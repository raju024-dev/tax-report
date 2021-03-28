<template>
  <v-card class="mx-auto mt-5 mb-5" max-width="100%" outlined>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="d-flex justify-center mb-6">
            STATEMENT OF EXPENSES RELATING TO LIFESTYLE
          </h3>
          <p class="d-flex justify-center mb-6">
            under section 80(2) of the Income Tax Ordinance, 1984 (XXXVI of
            1984)
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table dense grid>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Partticulars</th>
                  <th class="text-left">Amount (৳)</th>
                  <th class="text-left">Comment</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in expenses" :key="item.sl">
                  <td>{{ item.title }}</td>
                  <td v-if="item.subset.length">
                    <v-list-item v-for="set in item.subset" :key="set.sl">
                      <v-list-item-content class="mx-2">
                        <v-text-field
                          v-model="set.amount"
                          :label="set.title"
                          type="number"
                        ></v-text-field>
                      </v-list-item-content>
                      <v-list-item-content class="mx-2">
                        <v-text-field
                          v-model="set.comment"
                          label="Comments"
                        ></v-text-field>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        Total: {{ totalAmount(item.subset) }}
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td v-else>
                    <v-text-field
                      v-model="item.amount"
                      type="number"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="item.comment"
                      label="Comments"
                    ></v-text-field>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-simple-table dense>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Partticulars</th>
                  <th class="text-left">Amount (৳)</th>
                  <th class="text-left">Comment</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in expenses" :key="item.sl">
                  <td>{{ item.sl }}</td>
                  <td>{{ item.title }}</td>
                  <td>
                    {{ item.amount }}
                  </td>
                  <td>
                    {{ item.comment }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    totalAmount(items) {
      let sum = 0;
      items.forEach((item) => (sum += Number(item.amount)));
      return sum;
    },
  },
  computed: {
    ...mapState({
      expenses: (state) => state.expenses,
    }),
  },
};
</script>

<style>
</style>