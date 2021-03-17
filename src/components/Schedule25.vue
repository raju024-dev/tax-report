<template>
  <v-card class="mx-auto mt-5 mb-5" max-width="100%" outlined>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="d-flex justify-center mb-6">SCHEDULE 5</h3>
          <p>
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
                <tr v-for="(share, count) in shares" :key="share.id">
                  <td>{{ count + 1 }}</td>
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
                      fab
                      x-small
                      dark
                      color="red"
                      @click="shares.splice(index, 1)"
                    >
                      <v-icon>mdi-delete</v-icon>
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
                      :rules="numberRules"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="shareValue"
                      label="Value(৳)"
                      type="number"
                      :rules="numberRules"
                    ></v-text-field>
                  </td>
                  <td class="text-center">
                    <v-btn fab x-small dark color="green" @click="addShare">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
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
                  <th class="text-left">Sl</th>
                  <th class="text-left">
                    Non-agricultural property at cost value or any advance made
                    for such property(description, location and size)
                  </th>
                  <th class="text-left">
                    Value at the start of income year (৳)
                  </th>
                  <th class="text-left">
                    increased/ decreased during the income year (৳)
                  </th>
                  <th class="text-left">
                    Value at the last date of income year (৳)
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in nonAgriProperties" :key="item.id">
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
                      fab
                      x-small
                      dark
                      color="red"
                      @click="nonAgriProperties.splice(index, 1)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <v-text-field
                      v-model="nonAgriPropertyTitle"
                      label="Title of the Property"
                      :rules="textRules"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="nonAgriPropertyStartValue"
                      label="Starting Value(৳)"
                      type="number"
                      :rules="numberRules"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="nonAgriPropertyChangeValue"
                      label="Change in Value(৳)"
                      type="number"
                      :rules="numberRules"
                    ></v-text-field>
                  </td>
                  <td>
                    {{nonAgriPropertyEndValue}}
                  </td>
                  <td class="text-center">
                    <v-btn
                      fab
                      x-small
                      dark
                      color="green"
                      @click="addNonAgriProperty"
                    >
                      <v-icon>mdi-plus</v-icon>
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
export default {
  data() {
    return {
      numberRules: [],
      textRules: [],
      shareID: 1,
      shareTitle: "",
      shareNumber: "",
      shareValue: "",
      shares: [],
      nonAgriID: 1,
      agriID: 1,
      nonAgriPropertyTitle: "",
      nonAgriPropertyStartValue: "",
      nonAgriPropertyChangeValue: "",
      nonAgriProperties: [],
      agriProperties: [],
    };
  },
  methods: {
    addShare() {
      if (this.shareTitle.length && this.shareNumber && this.shareValue) {
        this.numberRules = [];
        this.textRules = [];
        this.shares.push({
          id: this.shareID++,
          title: this.shareTitle,
          number: Number(this.shareNumber),
          value: Number(this.shareValue),
        });
        this.shareTitle = "";
        this.shareNumber = "";
        this.shareValue = "";
      } else {
        this.numberRules = [
          (v) => !!v || "Field is required",
          (v) => /^\d+$/.test(v) || "Must be a number",
        ];
        this.textRules = [(v) => !!v || "Field is required"];
      }
    },
    addNonAgriProperty() {      
      if (this.nonAgriPropertyTitle.length && this.nonAgriPropertyStartValue && (this.nonAgriPropertyChangeValue || this.nonAgriPropertyEndValue)) {
        this.numberRules = [];
        this.textRules = [];
        this.nonAgriProperties.push({
          id: this.nonAgriID++,
          title: this.nonAgriPropertyTitle,
          startValue: Number(this.nonAgriPropertyStartValue),
          changeValue: Number(this.nonAgriPropertyChangeValue),
          endValue: this.nonAgriPropertyEndValue,
        });
        this.nonAgriPropertyTitle = "";
        this.nonAgriPropertyStartValue = "";
        this.nonAgriPropertyChangeValue = "";
      } else {
        this.numberRules = [
          (v) => !!v || "Field is required",
          (v) => /^\d+$/.test(v) || "Must be a number",
        ];
        this.textRules = [(v) => !!v || "Field is required"];
      }
    },
    deleteNonAgriProperty(index) {
      console.log("Non AGri delete", index);
    },
  },
  computed: {
    nonAgriPropertyEndValue: function(){
      return Number(this.nonAgriPropertyStartValue)+Number(this.nonAgriPropertyChangeValue)
    }
  },
};
</script>

<style>
</style>