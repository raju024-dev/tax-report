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
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th class="text-left">Particulars</th>
                  <th class="text-left">Amount(A)</th>
                  <th class="text-left">Tax exempted(B)</th>
                  <th class="text-left">Taxable</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="particular in particulars" :key="particular.id">
                  <td>
                    {{ particular.title }}
                  </td>
                  <td>
                    <v-text-field v-model="particular.amount" :rules="amountRules"></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="particular.exempted"
                      :label="`${particular.exempted.toString()}`"
                    ></v-switch>
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
                  <td><p class="font-weight-bold">Total</p></td>
                  <td>
                    <p class="font-weight-bold">{{ totalAmount }}</p>
                  </td>
                  <td>
                    <p class="font-weight-bold">{{ totalTaxExempted }}</p>
                  </td>
                  <td>
                    <p class="font-weight-bold">{{ totalTaxable }}</p>
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
    totalAmount: function () {
      let sum = 0;
      this.particulars.forEach((particular) => {
        sum += Number(particular.amount);
      });
      return sum;
    },
    totalTaxExempted: function () {
      let sum = 0;
      this.particulars.forEach((particular) => {
        sum += particular.exempted ? 0 : Number(particular.amount)
      });
      return sum;
    },
    totalTaxable: function () {
      let sum = 0;
      this.particulars.forEach((particular) => {
        sum += particular.exempted ? Number(particular.amount) : 0
      });
      return sum;
    },
  },
};
</script>

<style>
</style>