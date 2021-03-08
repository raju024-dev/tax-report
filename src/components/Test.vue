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
                <tr v-for="particular in particulars" :key="particular.title">
                  <td>
                    <v-text-field
                      v-model="particular.amount"
                      :label="particular.title"
                    ></v-text-field>
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
                  <td>{{total}}</td>
                  <td>{{totalExempted}}</td>
                  <td>{{taxable}}</td>
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
      particulars:[
        {title:'Basic Pay', amount: '', exempted: false, taxable:''},
        {title:'Special Pay', amount: '', exempted: false, taxable:''},
        {title:'Bonus Pay', amount: '', exempted: false, taxable:''}
      ],
      totalExempted: 0,
      taxable: 0
    };
  },
  computed: {
    total: function(){
      let sum = 0;
      this.particulars.forEach((particular)=>{
        sum += Number(particular.amount)
      })
      return sum;
    }
  }
};
</script>

<style>
</style>