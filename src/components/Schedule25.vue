<template>
  <v-card class="mx-auto mt-5 mb-5" max-width="100%" outlined>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="d-flex justify-center mb-6">SCHEDULE 25</h3>
          <p class="d-flex justify-center mb-6">
            To be annexed to the Statement of Assets, Liabilities and Expenses
            (IT-10B2016)
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table dense>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Sl</th>
                  <th class="text-left">
                    Shareholdings in limited companies as director
                  </th>
                  <th class="text-left">No. of shares</th>
                  <th class="text-left">Value(৳)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(share, index) in shares" :key="share.id">
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ share.title }}
                  </td>
                  <td>
                    {{ share.number }}
                  </td>
                  <td>
                    {{ share.value }}
                  </td>
                  <td class="text-center">
                    <v-btn
                      class="my-2"
                      x-small
                      dark
                      color="red"
                      @click="deleteShare(share)"
                    >
                      Delete
                    </v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <v-text-field
                      v-model="shareTitle"
                      label="Title of the share"
                      :rules="textRules"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="shareNumber"
                      label="No. of shares"
                      type="number"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="shareValue"
                      label="Value(৳)"
                      type="number"
                    ></v-text-field>
                  </td>
                  <td class="text-center">
                    <v-btn x-small dark color="green" @click="addShare">
                      Add
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <!-- Non Agricultural property -->
      <v-row>
        <v-col>
          <v-simple-table dense>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Sl</th>
                  <th class="text-left">
                    Non-agricultural property at cost value or any advance made
                    for such property (description, location and size)
                  </th>
                  <th class="text-left">Value at the start of income year৳</th>
                  <th class="text-left">Value(৳)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in nonAgri" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ item.title }}
                  </td>
                  <td>
                    {{ item.startValue }}
                  </td>
                  <td>
                    {{ item.changeValue }}
                  </td>
                  <td>
                    {{ item.endValue }}
                  </td>
                  <td class="text-center">
                    <v-btn
                      class="my-2"
                      x-small
                      dark
                      color="red"
                      @click="deleteNonAgri(item)"
                    >
                      Delete
                    </v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <v-text-field
                      v-model="nonAgriPropertyTitle"
                      label="Title of the property"
                      :rules="nonAgriRules"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="nonAgriPropertyStartValue"
                      label="Starting Value(৳)"
                      type="number"
                      @input="changeEndValue"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="nonAgriPropertyChangeValue"
                      label="Changed Value(৳)"
                      type="number"
                      @input="changeEndValue"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="nonAgriPropertyEndValue"
                      label="End Value(৳)"
                      type="number"
                      @input="changeChangedValue"
                    ></v-text-field>
                  </td>
                  <td class="text-center">
                    <v-btn
                      x-small
                      dark
                      color="green"
                      @click="addNonAgriProperty"
                    >
                      Add
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <!-- Agricultural property -->
      <v-row>
        <v-col>
          <v-simple-table dense>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Sl</th>
                  <th class="text-left">
                    Agricultural property at cost value or any advance made for such property (description, location and size)
                  </th>
                  <th class="text-left">Value at the start of income year৳</th>
                  <th class="text-left">Value(৳)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in agri" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ item.title }}
                  </td>
                  <td>
                    {{ item.startValue }}
                  </td>
                  <td>
                    {{ item.changeValue }}
                  </td>
                  <td>
                    {{ item.endValue }}
                  </td>
                  <td class="text-center">
                    <v-btn
                      class="my-2"
                      x-small
                      dark
                      color="red"
                      @click="deleteAgri(item)"
                    >
                      Delete
                    </v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <v-text-field
                      v-model="agriPropertyTitle"
                      label="Title of the property"
                      :rules="agriRules"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="agriPropertyStartValue"
                      label="Starting Value(৳)"
                      type="number"
                      @input="changeAgriEndValue"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="agriPropertyChangeValue"
                      label="Changed Value(৳)"
                      type="number"
                      @input="changeAgriEndValue"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="agriPropertyEndValue"
                      label="End Value(৳)"
                      type="number"
                      @input="changeAgriChangedValue"
                    ></v-text-field>
                  </td>
                  <td class="text-center">
                    <v-btn
                      x-small
                      dark
                      color="green"
                      @click="addAgriProperty"
                    >
                      Add
                    </v-btn>
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
    return {
      textRules: [],
      nonAgriRules: [],
      agriRules: [],
      shareID: 1,
      shareTitle: "",
      shareNumber: "",
      shareValue: "",
      nonAgriID: 1,      
      nonAgriPropertyTitle: "",
      nonAgriPropertyStartValue: "",
      nonAgriPropertyChangeValue: "",
      nonAgriPropertyEndValue: "",
      agriID: 1,
      agriPropertyTitle: "",
      agriPropertyStartValue: "",
      agriPropertyChangeValue: "",
      agriPropertyEndValue: "",
    };
  },
  methods: {
    addShare() {
      if (this.shareTitle.length && this.shareNumber && this.shareValue) {
        this.textRules = [];
        this.shares.push({
          id: this.shareID++,
          title: this.shareTitle,
          number: Number(this.shareNumber),
          value: Number(this.shareValue),
        });
        // console.log(this.shares)
        this.shareTitle = "";
        this.shareNumber = "";
        this.shareValue = "";
      } else {
        this.textRules = [(v) => !!v || "Field is required"];
      }
    },
    deleteShare(share) {
      this.$store.commit("deleteShare", share);
    },
    changeEndValue(event) {
      this.nonAgriPropertyEndValue =
        Number(this.nonAgriPropertyStartValue) +
        Number(this.nonAgriPropertyChangeValue);
    },
    changeChangedValue(event) {
      this.nonAgriPropertyChangeValue =
        Number(this.nonAgriPropertyEndValue) -
        Number(this.nonAgriPropertyStartValue);
    },
    addNonAgriProperty() {
      if (this.nonAgriPropertyTitle.length) {
        this.nonAgriRules = [];
        this.nonAgri.push({
          id: this.nonAgriID++,
          title: this.nonAgriPropertyTitle,
          startValue: Number(this.nonAgriPropertyStartValue),
          changeValue: Number(this.nonAgriPropertyChangeValue),
          endValue: Number(this.nonAgriPropertyEndValue),
        });
        console.log(this.nonAgri);
        this.nonAgriPropertyTitle = "";
        this.nonAgriPropertyStartValue = "";
        this.nonAgriPropertyChangeValue = "";
        this.nonAgriPropertyEndValue = "";
      } else {
        this.nonAgriRules = [(v) => !!v || "Field is required"];
      }
    },
    deleteNonAgri(item) {
      this.$store.commit("deleteNonAgri", item);
    },
    changeAgriEndValue(event) {
      this.agriPropertyEndValue =
        Number(this.agriPropertyStartValue) +
        Number(this.agriPropertyChangeValue);
    },
    changeAgriChangedValue(event) {
      this.agriPropertyChangeValue =
        Number(this.agriPropertyEndValue) -
        Number(this.agriPropertyStartValue);
    },
    addAgriProperty() {
      if (this.agriPropertyTitle.length) {
        this.agriRules = [];
        this.agri.push({
          id: this.agriID++,
          title: this.agriPropertyTitle,
          startValue: Number(this.agriPropertyStartValue),
          changeValue: Number(this.agriPropertyChangeValue),
          endValue: Number(this.agriPropertyEndValue),
        });
        console.log(this.agri);
        this.agriPropertyTitle = "";
        this.agriPropertyStartValue = "";
        this.agriPropertyChangeValue = "";
        this.agriPropertyEndValue = "";
      } else {
        this.agriRules = [(v) => !!v || "Field is required"];
      }
    },
    deleteAgri(item) {
      this.$store.commit("deleteAgri", item);
    },
  },
  computed: {
    ...mapState({
      shares: (state) => state.schedule25.shares,
      nonAgri: (state) => state.schedule25.nonAgri,
      agri: (state) => state.schedule25.agri,
    }),
  },
};
</script>

<style>
</style>