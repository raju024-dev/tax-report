<template>
  <v-card class="mx-auto mt-5 mb-5" max-width="100%" outlined>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="d-flex justify-center mb-6">SCHEDULE 24D</h3>
          <h4 class="d-flex justify-center mb-6">
            Particulars of tax credit/rebate
          </h4>
          <p class="d-flex justify-center mb-6">
            To be annexed to return by an assessee claiming investment tax
            credit <br />
            (Attach the proof of claimed investment, contribution, etc.)
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-simple-table dense>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Serial No.</th>
                  <th class="text-left">Particulars</th>
                  <th class="text-left">Amount(৳)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in schedule24D" :key="item.sl">
                  <td v-if="index < 10" width="10%">{{ item.sl }}</td>
                  <td v-if="index < 10" width="70%">
                    <div v-if="item.extra">
                      <v-text-field
                        v-model="item.extra"
                        type="number"
                      ></v-text-field>
                    </div>
                    <div v-else>
                      {{ item.title }}
                    </div>
                  </td>
                  <td v-if="index < 10" width="20%">
                    <v-text-field
                      v-model="item.amount"
                      type="number"
                    ></v-text-field>
                  </td>
                </tr>
                <!-- 13	Total allowable investment, contribution etc. -->
                <tr>
                  <td>{{ schedule24D[10].sl }}</td>
                  <td>
                    <div v-if="schedule24D[10].extra">
                      <v-text-field
                        v-model="schedule24D[10].title"
                        type="number"
                      ></v-text-field>
                    </div>
                    <div v-else>
                      {{ schedule24D[10].title }}
                    </div>
                  </td>
                  <td width="20%">
                    <p>{{ schedule24D_13 }}</p>
                  </td>
                </tr>
                <!-- 14	Eligible amount for rebate (the lesser of 14A, 14B or 14C) -->
                <tr>
                  <td>{{ schedule24D[11].sl }}</td>
                  <td>
                    <div v-if="schedule24D[11].extra">
                      <v-text-field
                        v-model="schedule24D[11].title"
                        type="number"
                      ></v-text-field>
                    </div>
                    <div v-else>
                      {{ schedule24D[11].title }}
                    </div>
                  </td>
                  <td width="20%">
                    <p>{{schedule24D_14}} </p>
                  </td>
                </tr>
                <!-- 14A	
Total allowable investment, contribution, etc. (as in 13) -->
                <tr>
                  <td>{{ schedule24D[12].sl }}</td>
                  <td>
                    <div v-if="schedule24D[12].extra">
                      <v-text-field
                        v-model="schedule24D[12].title"
                        type="number"
                      ></v-text-field>
                    </div>
                    <div v-else>
                      {{ schedule24D[12].title }}
                    </div>
                  </td>
                  <td width="20%">
                    <p>{{ schedule24D_13 }}</p>
                  </td>
                </tr>
                <!-- 14B	
........ % of the total income [excluding any income for which a tax exemption or a reduced rate is applicable under sub-section (4) of section 44 or any income from any source or sources mentioned in clause (a) of sub-section (2) of section 82C.] -->
                <tr>
                  <td>{{ schedule24D[13].sl }}</td>
                  <td>
                    <div v-if="schedule24D[13].extra">
                      <v-text-field
                        v-model="schedule24D[13].title"
                        type="number"
                      ></v-text-field>
                    </div>
                    <div v-else>
                      {{ schedule24D[13].title }}
                    </div>
                  </td>
                  <td width="20%">
                    <p>{{schedule24D_14B}} </p>
                  </td>
                </tr>
                <!-- 14C	
1.5 Crore -->
                <tr>
                  <td>{{ schedule24D[14].sl }}</td>
                  <td>
                    <div v-if="schedule24D[14].extra">
                      <v-text-field
                        v-model="schedule24D[14].title"
                        type="number"
                      ></v-text-field>
                    </div>
                    <div v-else>
                      {{ schedule24D[14].title }}
                    </div>
                  </td>
                  <td width="20%">
                    <p>{{ schedule24D[14].amount }}</p>
                  </td>
                </tr>
                <!-- 15	
Amount of tax rebate calculated on eligible amount (Serial14) under section 44(2)(b) -->
                <tr>
                  <td>{{ schedule24D[15].sl }}</td>
                  <td>
                    <div v-if="schedule24D[15].extra">
                      <v-text-field
                        v-model="schedule24D[15].title"
                        type="number"
                      ></v-text-field>
                    </div>
                    <div v-else>
                      {{ schedule24D[15].title }}
                    </div>
                  </td>
                  <td width="20%">
                    <p>{{ schedule24D_15 }}</p>
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
    save() {},
  },
  computed: {
    ...mapState({
      schedule24D: (state) => state.schedule24D,
      totalTaxableIncome: state=> state.schedule24A[19].taxable
    }),
    schedule24D_13: function () {
      var tot = 0;
      for (let index = 0; index < 10; index++) {
        tot += Number(this.schedule24D[index].amount);
      }
      this.$store.state.schedule24D[10].amount = tot;
      return this.$store.state.schedule24D[10].amount;
    },
    schedule24D_14A: function () {
      return this.schedule24D_13;
    },
    schedule24D_14B: function(){
      this.$store.state.schedule24D[13].amount = this.totalTaxableIncome*.25;
      return this.$store.state.schedule24D[13].amount;
    },
    schedule24D_14: function () {
      this.$store.state.schedule24D[11].amount = Math.min(this.schedule24D_14A, this.schedule24D_14B, this.$store.state.schedule24D[14].amount)      
      return this.$store.state.schedule24D[11].amount;
    },
    schedule24D_15: function(){
      this.$store.state.schedule24D[15].amount = 0.15*this.$store.state.schedule24D[11].amount
      return this.$store.state.schedule24D[15].amount
    }
  },
};
</script>

<style>
</style>