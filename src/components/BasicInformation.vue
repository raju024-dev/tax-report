<template>
  <v-card class="mx-auto mt-5 mb-5" max-width="100%" outlined>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="d-flex justify-center mb-6">Basic Information</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <template>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>
                    <v-text-field
                      v-model="assessmentYear"
                      hint="Write assessment year"
                      label="Assessment Year"
                    ></v-text-field>
                  </td>
                  <td>02</td>
                  <td>
                    <v-radio-group
                      v-model="complyTo82BB"
                      row
                      label="Return submitted under section 82BB? (tick one)"
                    >
                      <v-radio label="Yes" :value="true"></v-radio>
                      <v-radio label="No" :value="false"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>
                    <v-text-field
                      v-model="name"
                      hint="Write your name here"
                      label="Name of the Assessee"
                    ></v-text-field>
                  </td>
                  <td>04</td>
                  <td>
                    <v-radio-group
                      v-model="gender"
                      row
                      label="Gender(tick one)"
                    >
                      <v-radio label="Male" value="male"></v-radio>
                      <v-radio label="Female" value="female"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>
                    <v-text-field
                      v-model="tin"
                      :rules="tinRules"
                      hint="Write your TIN number here"
                      label="Twelve-digit TIN"
                    ></v-text-field>
                  </td>
                  <td>06</td>
                  <td>
                    <v-radio-group v-model="haveOldTIN" row label="Old TIN">
                      <v-radio label="Yes" :value="true"></v-radio>
                      <v-radio label="No" :value="false"></v-radio>
                    </v-radio-group>
                    <v-text-field
                      v-if="haveOldTIN"
                      v-model="oldTin"
                      hint="Write your TIN number here"
                      label="Old TIN"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>
                    <v-text-field
                      v-model="circle"
                      hint="Write your Tax circle here"
                      label="Circle"
                    ></v-text-field>
                  </td>
                  <td>08</td>
                  <td>
                    <v-text-field
                      v-model="zone"
                      hint="Write your Tax circle zone here"
                      label="Zone"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>Resident Status (tick one)</td>
                  <td></td>
                  <td>
                    <v-radio-group v-model="resident" row>
                      <v-radio label="Resident" :value="true"></v-radio>
                      <v-radio label="Non-resident" :value="false"></v-radio>
                    </v-radio-group>
                  </td>
                </tr>
                <tr>
                  <td class="d-flex" top>10</td>
                  <td>
                    <p>
                      Tick on the box(es) below if you are:
                      <span v-if="!quota.length">N/A</span>
                    </p>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="12" md="6">
                          <v-checkbox
                            v-model="quota"
                            label="10 A: A gazetted war-wound freedom fighter"
                            value="warWoundFF"
                            hide-details
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <v-checkbox
                            v-model="quota"
                            label="10 B: A person with disability"
                            value="disable"
                            hide-details
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <v-checkbox
                            v-model="quota"
                            label="10 C: Aged 65 years or more"
                            value="aged65"
                            hide-details
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <v-checkbox
                            v-model="quota"
                            label="10 D: A parent/legal guardian of a person with disability"
                            value="guardian"
                            hide-details
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-container>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    <v-menu
                      v-model="birthDateMenu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="birthDate"
                          label="Picker without buttons"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="birthDate"
                        @input="birthDateMenu = false"
                      ></v-date-picker>
                    </v-menu>
                  </td>
                  <td>12</td>
                  <td>
                    <v-text-field
                      v-model="incomeYear"
                      hint="Write income year"
                      label="Income Year"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    <v-text-field
                      v-model="employerName"
                      hint="Write your employer year"
                      label="If employed, employer's name"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>
                    <v-text-field
                      v-model="spouseName"
                      hint="Write your spouse name"
                      label="Spouse Name"
                    ></v-text-field>
                  </td>
                  <td>15</td>
                  <td>
                    <v-text-field
                      v-model="spouseTIN"
                      hint="Write your spouse TIN"
                      label="Spouse TIN"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>
                    <v-text-field
                      v-model="fatherName"
                      hint="Write your Father's name"
                      label="Father's Name"
                    ></v-text-field>
                  </td>
                  <td>17</td>
                  <td>
                    <v-text-field
                      v-model="motherName"
                      hint="Write your mother's name"
                      label="Mother's name"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>
                    <v-text-field
                      v-model="presentAddress"
                      label="Present Address"
                    ></v-text-field>
                  </td>
                  <td>19</td>
                  <td>
                    <v-text-field
                      v-model="permanentAddress"
                      label="Permanent Address"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>
                    <v-text-field
                      v-model="phone"
                      label="Contact Telephone"
                    ></v-text-field>
                  </td>
                  <td>17</td>
                  <td>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="Email"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>
                    <v-text-field
                      v-model="nid"
                      label="National Identification Number"
                    ></v-text-field>
                  </td>
                  <td>17</td>
                  <td>
                    <v-text-field
                      v-model="bid"
                      label="Business Identification Number(s)"
                      hint="Separate multiple number with commas"
                    ></v-text-field>
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
      tinRules: [
        (value) => (value || "").length === 12 || "TIN must be 12 digits",
      ],
      birthDateMenu: false,
      birthDate: new Date().toISOString().substr(0, 10),

      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  computed: {
    assessmentYear() {
      return this.$store.state.assessmentYear;
    },
    complyTo82BB() {
      return this.$store.state.complyTo82BB;
    },
    name() {
      return this.$store.state.name;
    },
    gender() {
      return this.$store.state.gender;
    },
    tin() {
      return this.$store.state.tin;
    },
    haveOldTIN() {
      return this.$store.state.haveOldTIN;
    },
    oldTin() {
      return this.$store.state.oldTin;
    },
    circle() {
      return this.$store.state.circle;
    },
    zone() {
      return this.$store.state.zone;
    },
    resident() {
      this.$store.state.resident;
    },
    quota() {
      return this.$store.state.quota;
    },
    incomeYear() {
      return this.$store.state.incomeYear;
    },
    employerName() {
      return this.$store.state.employerName;
    },
    spouseName() {
      return this.$store.state.spouseName;
    },
    spouseTIN() {
      return this.$store.state.spouseTIN;
    },
    fatherName() {
      return this.$store.state.fatherName;
    },
    motherName() {
      return this.$store.state.motherName;
    },
    presentAddress() {
      return this.$store.state.presentAddress;
    },
    permanentAddress() {
      return this.$store.state.permanentAddress;
    },
    phone() {
      return this.$store.state.phone;
    },
    email() {
      return this.$store.state.email;
    },
    nid() {
      return this.$store.state.nid;
    },
    bid() {
      return this.$store.state.bid;
    },
  },
};
</script>

<style>
</style>