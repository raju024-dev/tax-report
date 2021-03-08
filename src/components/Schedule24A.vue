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
                  <th class="text-left">Tax exempted(B)</th>
                  <th class="text-left">Taxable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <v-text-field
                      v-model="basicPay.amount"
                      label="Basic Pay"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="basicPay.exempted"
                      :label="`${basicPay.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (basicPay.taxable = basicPay.exempted
                        ? "-"
                        : basicPay.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="specialPay.amount"
                      label="Special Pay"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="specialPay.exempted"
                      :label="`${specialPay.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (specialPay.taxable = specialPay.exempted
                        ? "-"
                        : specialPay.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="arrearPay.amount"
                      label="Arrear Pay(if not included in a taxable income earlier)"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="arrearPay.exempted"
                      :label="`${arrearPay.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (arrearPay.taxable = arrearPay.exempted
                        ? "-"
                        : arrearPay.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="dearnessAllowance.amount"
                      label="Dearness Allowance"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="dearnessAllowance.exempted"
                      :label="`${dearnessAllowance.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (dearnessAllowance.taxable = dearnessAllowance.exempted
                        ? "-"
                        : dearnessAllowance.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="houseRentAllowance.amount"
                      label="House Rent Allowance"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="houseRentAllowance.exempted"
                      :label="`${houseRentAllowance.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (houseRentAllowance.taxable = houseRentAllowance.exempted
                        ? "-"
                        : houseRentAllowance.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="medicalAllowance.amount"
                      label="Medical Allowance"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="medicalAllowance.exempted"
                      :label="`${medicalAllowance.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (medicalAllowance.taxable = medicalAllowance.exempted
                        ? "-"
                        : medicalAllowance.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="conveyanceAllowance.amount"
                      label="Conveyance Allowance"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="conveyanceAllowance.exempted"
                      :label="`${conveyanceAllowance.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (conveyanceAllowance.taxable = conveyanceAllowance.exempted
                        ? "-"
                        : conveyanceAllowance.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="festivalAllowance.amount"
                      label="Festival Allowance"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="festivalAllowance.exempted"
                      :label="`${festivalAllowance.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (festivalAllowance.taxable = festivalAllowance.exempted
                        ? "-"
                        : festivalAllowance.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="staffSupportAllowance.amount"
                      label="Allowance for support staff"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="staffSupportAllowance.exempted"
                      :label="`${staffSupportAllowance.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (staffSupportAllowance.taxable = staffSupportAllowance.exempted
                        ? "-"
                        : staffSupportAllowance.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="leaveAllowance.amount"
                      label="Leave allowance"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="leaveAllowance.exempted"
                      :label="`${leaveAllowance.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (leaveAllowance.taxable = leaveAllowance.exempted
                        ? "-"
                        : leaveAllowance.amount)
                    }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      v-model="honoriumRewardFee.amount"
                      label="Honorarium/Reward/Fee"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-switch
                      v-model="honoriumRewardFee.exempted"
                      :label="`${honoriumRewardFee.exempted.toString()}`"
                    ></v-switch>
                  </td>
                  <td>
                    {{
                      (honoriumRewardFee.taxable = honoriumRewardFee.exempted
                        ? "-"
                        : honoriumRewardFee.amount)
                    }}
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
      basicPay: { amount: "", exempted: false, taxable: "" },
      specialPay: { amount: "", exempted: false, taxable: "" },
      arrearPay: { amount: "", exempted: false, taxable: "" },
      dearnessAllowance: { amount: "", exempted: false, taxable: "" },
      houseRentAllowance: { amount: "", exempted: false, taxable: "" },
      medicalAllowance: { amount: "", exempted: false, taxable: "" },
      conveyanceAllowance: { amount: "", exempted: false, taxable: "" },
      festivalAllowance: { amount: "", exempted: false, taxable: "" },
      staffSupportAllowance: { amount: "", exempted: false, taxable: "" },
      leaveAllowance: { amount: "", exempted: false, taxable: "" },
      honoriumRewardFee: { amount: "", exempted: false, taxable: "" },
    };
  },
};
</script>

<style>
</style>