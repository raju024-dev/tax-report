<template>
  <v-card class="mx-auto mt-5 mb-5" max-width="100%" outlined>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="d-flex justify-center mb-6">SCHEDULE 24B</h3>
          <h4 class="d-flex justify-center mb-6">
            Particulars of income from house property
          </h4>
          <p class="d-flex justify-center">
            Annex this Schedule to the return of income if you have income from
            house property
          </p>
        </v-col>
      </v-row>
      <v-row v-for="(property, index) in houseProperty" :key="property.id">
        <v-col>
          <v-simple-table dense>
            <thead>
              <th colspan="3">
                House Property # {{ index + 1 }}
                <v-btn class="error mx-3" @click="deleteProperty(index)"
                  >Delete</v-btn
                >
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Address: {{ property.address }}</td>
                <td>Total area: {{ property.totalArea }}</td>
                <td>Share of the asessee (%): {{ property.share }}%</td>
              </tr>
              <tr>
                <td colspan="2">Annual Value</td>
                <td>
                  {{ property.annualValue }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Deductions</td>
                <td>
                  {{ property.deductions }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Repair, Collection, etc.</td>
                <td>
                  {{ property.repair }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Municipal or Local Tax</td>
                <td>
                  {{ property.tax }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Land Revenue</td>
                <td>
                  {{ property.landRevenue }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Interest on Loan/Mortgage/Capital Charge</td>
                <td>
                  {{ property.interest }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Insurance Premium</td>
                <td>
                  {{ property.insurance }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Vacancy Allowance</td>
                <td>
                  {{ property.vacancy }}
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  {{ property.otherTitle }}
                </td>
                <td>
                  {{ property.other }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Income from house property</td>
                <td>
                  {{ property.incomeFromHouseProperty }}
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  In case of partial ownership, the share of income
                </td>
                <td>
                  {{ property.shareOfIncome }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="primary" large @click="showHouseProperty = true">
            Add House Property
          </v-btn>
        </v-col>
      </v-row>

      <v-row v-if="showHouseProperty">
        <v-col>
          <v-simple-table dense>
            <tbody>
              <tr>
                <td>
                  <v-text-field
                    v-model="address"
                    label="Address of the property"
                    :rules="textRules"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="totalArea" label="Total Area" :rules="textRules">
                  </v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="share"
                    label="Share of the asessee(%)"
                    type='number'
                  ></v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">Annual Value</td>
                <td>
                  <v-text-field
                    v-model="annualValue"
                    label="Annual Value"
                    type="number"
                  >
                  </v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">Deductions</td>
                <td>
                  {{ deductions }}
                </td>
              </tr>
              <tr>
                <td colspan="2">Repair, Collection, etc.</td>
                <td>
                  <v-text-field
                    v-model="repair"
                    label="Repair, Collection, etc."
                    type="number"
                  >
                  </v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">Municipal or Local Tax</td>
                <td>
                  <v-text-field
                    v-model="tax"
                    label="Municipal or Local Tax"
                    type="number"
                  >
                  </v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">Land Revenue</td>
                <td>
                  <v-text-field
                    v-model="landRevenue"
                    label="Land Revenue"
                    type="number"
                  >
                  </v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">Interest on Loan/Mortgage/Capital Charge</td>
                <td>
                  <v-text-field
                    v-model="interest"
                    label="Interest on Loan/Mortgage/Capital Charge"
                    type="number"
                  >
                  </v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">Insurance Premium</td>
                <td>
                  <v-text-field
                    v-model="insurance"
                    label="Insurance Premium"
                    type="number"
                  >
                  </v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">Vacancy Allowance</td>
                <td>
                  <v-text-field
                    v-model="vacancy"
                    label="Vacancy Allowance"
                    type="number"
                  >
                  </v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <v-text-field v-model="otherTitle" label="Other, if any">
                  </v-text-field>
                </td>
                <td>
                  <v-text-field v-model="other" label="Other" type="number">
                  </v-text-field>
                </td>
              </tr>
              <tr>
                <td colspan="2">Income from house property</td>
                <td>
                  {{ incomeFromHouseProperty }}
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  In case of partial ownership, the share of income
                </td>
                <td>
                  {{ shareOfIncome }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-btn class="success" @click="saveProperty">
            Save House Property
          </v-btn>
          <v-btn class="error mx-2" @click="showHouseProperty = false">
            Cancel
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <tbody>
              <tr>
                <td>Aggregate of income of all house properties</td>
                <td>{{aggregateIncome}} </td>
              </tr>
              <tr v-for="(property, index) in houseProperty" :key="property.id">
                <td>House property # {{index+1}} </td>
                <td>{{property.shareOfIncome}} </td>
              </tr>
            </tbody>
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
      textRules:[
        (v) => !!v || "This field is required."
      ],
      showHouseProperty: false,
      address: "",
      totalArea: "",
      share: 0,
      annualValue: 0,
      repair: 0,
      tax: 0,
      landRevenue: 0,
      interest: 0,
      insurance: 0,
      vacancy: 0,
      otherTitle: "",
      other: 0,
      // houseProperty: [],
    };
  },
  methods: {
    saveProperty() {
      let property = {
        id: this.houseProperty.length + 1,
        address: this.address,
        totalArea: this.totalArea,
        share: this.share,
        annualValue: this.annualValue,
        repair: this.repair,
        tax: this.tax,
        landRevenue: this.landRevenue,
        interest: this.interest,
        insurance: this.insurance,
        vacancy: this.vacancy,
        deductions: this.deductions,
        otherTitle: "Others: " + this.otherTitle,
        other: this.other,
        incomeFromHouseProperty: this.incomeFromHouseProperty,
        shareOfIncome: this.shareOfIncome,
      };
      if (property.address.length && property.totalArea.length) {
        this.houseProperty.push(property);
        this.showHouseProperty = false;
        this.address = "";
        this.totalArea = "";
        (this.share = 0),
          (this.annualValue = 0),
          (this.repair = 0),
          (this.tax = 0);
        this.landRevenue = 0;
        this.interest = 0;
        this.insurance = 0;
        this.vacancy = 0;
        this.otherTitle = "";
        this.other = 0;
      }
    },
    deleteProperty(index) {
      this.$store.state.houseProperty.pop(index);
    },
  },
  computed: {
    ...mapState({
      houseProperty: (state) => state.houseProperty,
    }),
    deductions: function () {
      return (
        Number(this.repair) +
        Number(this.tax) +
        Number(this.landRevenue) +
        Number(this.interest) +
        Number(this.insurance) +
        Number(this.vacancy) +
        Number(this.other)
      );
    },
    incomeFromHouseProperty: function () {
      return Number(this.annualValue) - Number(this.deductions);
    },
    shareOfIncome: function () {
      return (Number(this.share) * this.incomeFromHouseProperty) / 100.0;
    },
    aggregateIncome: function(){
      let sum = 0
      this.$store.state.houseProperty.forEach(property=>sum+=property.shareOfIncome)
      return sum;
    }
  },
};
</script>

<style>
</style>