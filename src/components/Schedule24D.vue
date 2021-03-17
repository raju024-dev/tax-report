<template>
  <v-card class="mx-auto mt-5 mb-5" max-width="100%" outlined>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="d-flex justify-center mb-6">SCHEDULE 24D</h3>
          <h4 class="d-flex justify-center mb-6">
            Particulars of tax credit/rebate
          </h4>
          <p>
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
                <tr v-for="particular in particulars" :key="particular.id">
                  <td>{{ particular.id }}</td>
                  <td>
                    {{ particular.title }}
                  </td>
                  <td>
                    <v-text-field
                      v-model="particular.amount"
                      :rules="amountRules"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    Total allowable investment, contribution etc
                  </td>
                  <td>
                    {{totalAllowableInvestment}}
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>
                    Eligible amount for rebate (the lesser of 14A, 14B or 14C)
                  </td>
                  <td>
                    {{eligibleAmountForRebate}}
                  </td>
                </tr>
                <tr>
                  <td>14A</td>
                  <td>
                    Total allowable investment, contribution, etc. (as in 13)
                  </td>
                  <td>
                    {{totalAllowableInvestment}}
                  </td>
                </tr>
                <tr>
                  <td>14B</td>
                  <td>
                    25% of the total income [excluding any income for which a tax exemption or a reduced rate is applicable under sub-section (4) of section 44 or any income from any source or clause (a) of sub-section (2) of section 82C.]
                  </td>
                  <td>
                    {{totalIncome*0.25}}
                  </td>
                </tr>
                <tr>
                  <td>14C</td>
                  <td>
                    1.5 crore
                  </td>
                  <td>
                    {{OneAndHalfCrore}}
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>
                    Amount of tax rebate calculated on eligible amount (Serial14) under section 82C
                  </td>
                  <td>
                    {{taxRebate}}
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
      OneAndHalfCrore: 15000000,
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
          id: "3",
          title: "Life insurance premium",
          amount: "",
        },
        {
          id: "4",
          title:
            "Contribution to deposit pension scheme (not exceeding allowable limit)",
          amount: "",
        },
        {
          id: "5",
          title: "Investment in approved savings certificate",
          amount: "",
        },
        {
          id: "6",
          title:
            "Investment in approved debenture or debenture stock, Stock or Shares",
          amount: "",
        },
        {
          id: "7",
          title:
            "Contribution to provident fund to which Provident Fund Act, 1925 applies",
          amount: "",
        },
        {
          id: "8",
          title:
            "Self-contribution and employer's contribution to Recognized Provident Fund",
          amount: "",
        },
        {
          id: "9",
          title: "Contribution to Super Annuation Fund",
          amount: "",
        },
        {
          id: "10",
          title: "Contribution to Benevolent Fund and Group Insurance Premium",
          amount: "",
        },
        {
          id: "11",
          title: "Contribution to Zakat Fund",
          amount: "",
        },
        {
          id: "12",
          extra: "",
          title: "Others, if any ( give details )",
          amount: "",
        },
        // {
        //   id: "13",
        //   title: "Total allowable investment, contribution etc.",
        //   amount: "",
        // },
        // {
        //   id: "14",
        //   title: "Eligible amount for rebate (the lesser of 14A, 14B or 14C)",
        //   amount: "",
        // },
        // {
        //   id: "14A",
        //   title: "Total allowable investment, contribution, etc. (as in 13)",
        //   amount: "",
        // },
        // {
        //   id: "14B",
        //   title:
        //     "25 % of the total income [excluding any income for which a tax exemption or a reduced rate is applicable under sub-section (4) of section 44 or any income from any source or clause (a) of sub-section (2) of section 82C.]",
        //   amount: "",
        // },
        // {
        //   id: "14C",
        //   title: "1.5 crore",
        //   amount: "",
        // },
        // {
        //   id: "15",
        //   title:
        //     "Amount of tax rebate calculated on eligible amount (Serial 14) under section",
        //   amount: "",
        // },
      ],
    };
  },
  methods: {},
  computed: {
    totalIncome: function(){
      return 647873.50 // implement this later
    },
    totalAllowableInvestment: function () {
      let sum = 0;
      this.particulars.forEach((particular) => {
        if (Number(particular.id) < 13) {
          sum += Number(particular.amount);
        }
      });
      return sum;
    },
    eligibleAmountForRebate: function () {
      return Math.min(this.totalAllowableInvestment, this.totalIncome*0.25, this.OneAndHalfCrore)
    },
    taxRebate: function () {
      return 0.15*this.eligibleAmountForRebate;
    },
  },
};
</script>

<style>
</style>