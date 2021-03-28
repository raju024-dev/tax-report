<template>
  <v-card class="mx-auto mt-5 mb-5" max-width="100%" outlined>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="d-flex justify-center mb-6">SCHEDULE 24A</h3>
          <h4 class="d-flex justify-center mb-6">
            Particulars of income from Salaries
          </h4>
          <p>
            Annex this Schedule to the return of income if you have income from
            Salaries
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-simple-table dense>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Sl. No.</th>
                  <th class="text-left">Particulars</th>
                  <th class="text-left">Amount(A)</th>
                  <th class="text-left">Tax exempted(B)</th>
                  <th class="text-left">Taxable</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="particular in schedule24A.slice(0, 19)"
                  :key="particular.sl"
                >
                  <td>
                    {{ particular.sl }}
                  </td>
                  <td>
                    {{ particular.title }}
                  </td>
                  <td>
                    <v-text-field
                      v-model="particular.amount"
                      type="number"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch v-model="particular.exempted"></v-switch>
                  </td>
                  <td>
                    {{
                      (particular.taxable = particular.exempted
                        ? "-"
                        : particular.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><p class="font-weight-bold">Total</p></td>
                  <td>
                    <p class="font-weight-bold">{{ schedule24ATotalAmount }}</p>
                  </td>
                  <td>
                    <p class="font-weight-bold">
                      {{ schedule24ATotalExempted }}
                    </p>
                  </td>
                  <td>
                    <p class="font-weight-bold">
                      {{ schedule24ATotalTaxable }}
                    </p>
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
      amountRules: [
        (v) => {
          if (v.length) {
            return !isNaN(parseFloat(v)) || "This must be a number";
          } else {
            return true;
          }
        },
      ],
      particulars: [
        {
          id: "basicPay",
          extra: "",
          title: "Basic Pay",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "specialPay",
          extra: "",
          title: "Special Pay",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "arrearPay",
          extra: "",
          title: "Arrear Pay",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "dearnessAllowance",
          extra: "",
          title: "Dearness allowance",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "houseAllowance",
          extra: "",
          title: "House rent allowance",
          amount: "",
          exempted: true,
          taxable: "",
        },
        {
          id: "medicalAllowance",
          extra: "",
          title: "Medical allowance",
          amount: "",
          exempted: true,
          taxable: "",
        },
        {
          id: "conveyanceAllowance",
          extra: "",
          title: "Conveyance allowance",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "festivalAllowance",
          extra: "",
          title: "Festival Allowance",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "staffSupportAllowance",
          extra: "",
          title: "Allowance for support staff",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "leaveAllowance",
          extra: "",
          title: "Leave allowance",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "honorium",
          extra: "",
          title: "Honorarium/ Reward/Fee",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "overtime",
          extra: "",
          title: "Overtime allowance",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "bonus",
          extra: "",
          title: "Bonus / Ex-gratia",
          amount: "",
          exempted: true,
          taxable: "",
        },
        {
          id: "otherAllowances",
          extra: "",
          title: "Other allowances",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "contr2ProvidentFund",
          extra: "",
          title: "Employer's contribution to a recognized provident fund",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "interestAccruedOnProvidentFund",
          extra: "",
          title: "Interest accrued on a recognized provident fund",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "deemedIncomeTransport",
          extra: "",
          title: "Deemed income for transport facility",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "deemedIncomeAccomodation",
          extra: "",
          title: "Deemed income for free furnished/unfurnished accommodation",
          amount: "",
          exempted: false,
          taxable: "",
        },
        {
          id: "others",
          extra: "",
          title: "Other, if any (give detail):",
          amount: "",
          exempted: false,
          taxable: "",
        },
      ],
    };
  },
  methods: {},
  computed: {
    ...mapState({
      schedule24A: (state) => state.schedule24A,      
    }),
    schedule24ATotalAmount: function () {
      let sum = 0;
      this.schedule24A.slice(0, 19).forEach((item) => {
        sum += Number(item.amount);
      });
      this.$store.state.schedule24A[19].amount = sum;
      return this.$store.state.schedule24A[19].amount;
    },
    schedule24ATotalExempted: function () {
      let sum = 0;
      this.schedule24A.slice(0, 19).forEach((particular) => {
        sum += particular.exempted ? Number(particular.amount) : 0;
      });
      this.$store.state.schedule24A[19].taxExempted = sum;
      return this.$store.state.schedule24A[19].taxExempted;
    },
    schedule24ATotalTaxable: function () {
      let sum = 0;
      this.schedule24A.slice(0, 19).forEach((particular) => {
        sum += particular.exempted ? 0 : Number(particular.amount);
      });
      this.$store.state.schedule24A[19].taxable = sum;
      return this.$store.state.schedule24A[19].taxable;
    },
  },
};
</script>

<style>
</style>