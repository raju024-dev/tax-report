<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1>{{ heading }} for {{ name }}</h1>
          <v-btn @click="generatePDF"> Generate PDF </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- <v-checkbox
            v-model="showSchedule24A"
            label="Schedule 24A: if you have income from Salaries"
          ></v-checkbox>
          <v-checkbox
            v-model="showSchedule24B"
            label="Schedule 24B: if you have income from house property"
          ></v-checkbox>
          <v-checkbox
            v-model="showSchedule24C"
            label="Schedule 24C: if you have income from business or profession"
          ></v-checkbox>
          <v-checkbox
            v-model="showSchedule24D"
            label="Schedule 24D: if you claim tax rebate"
          ></v-checkbox>
          <v-checkbox
            v-model="showSchedule25"
            label="Schedule 25: if you have agricultural property and shares"
          ></v-checkbox> -->
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col>
          <h2 class="d-flex justify-center mb-6">Part I</h2>
        </v-col>
      </v-row> -->

      <!-- <BasicInformation /> -->
      <!-- <Schedule24A v-if="showSchedule24A" /> -->
      <!-- <Schedule24D v-if="showSchedule24D" /> -->
      <!-- <Schedule24B v-if="showSchedule24B" /> -->
      <!-- <Schedule25 v-if="showSchedule25" /> -->
      <StatementOfExpenses v-if="showStatementOfExpenses" />
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import BasicInformation from "./components/BasicInformation.vue";
import Schedule24A from "./components/Schedule24A.vue";
import Schedule24D from "./components/Schedule24D.vue";
import Schedule24B from "./components/Schedule24B.vue";
import Schedule25 from "./components/Schedule25.vue";
import StatementOfExpenses from "./components/StatementOfExpenses.vue";

import { jsPDF } from "jspdf";
import "jspdf-autotable";
export default {
  name: "App",
  components: {
    BasicInformation,
    Schedule24A,
    Schedule24B,
    Schedule24D,
    Schedule25,
    StatementOfExpenses
  },
  data: () => ({
    heading: "Tax Calculator v1.0.0",
    test: false,
    showSchedule24A: false,
    showSchedule24B: false,
    showSchedule24C: false,
    showSchedule24D: false,
    showSchedule25: false,
    showStatementOfExpenses: true,
    showTest1: false,
    showTestGlobal: false,
    listItems: [
      { title: "Assessment Year", content: "2020-21" },
      {
        title: "Return submitted under section 82BB? (tick one)",
        content: "Yes",
      },
      { title: "Name of the Assessee", content: "Md. Saddam Hossain Razo" },
    ],
    someText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure.",
  }),
  computed: mapState({
    name: (state) => state.name,
    assessmentYear: (state) => state.assessmentYear,
    schedule24A: state=>state.schedule24A
  }),
  methods: {
    changeName() {
      this.$store.state.name = "New Name";
    },
    generatePDF() {
      const doc = new jsPDF({
        orientation: "p",
        unit: "in",
        format: "a4",
      });
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      var lineHeight = 0.25;
      var topMargin = 0.75 + 0.5;
      var leftMargin = 0.75;
      var rightMargin = 0.5;
      var bottomMargin = 0.5;

      // // PART I
      // doc.setFont("times", "bold").setFontSize(14);
      // doc.text("RETURN OF INCOME", width / 2.0, topMargin, "center");

      // doc.setFont("times", "bold").setFontSize(14);
      // doc.text(
      //   "For an Individual Assessee",
      //   width / 2.0,
      //   topMargin + lineHeight,
      //   "center"
      // );

      // doc.setFont("times", "normal").setFontSize(11);
      // doc.text(
      //   "The following schedules shall be the integral part of this return and must be annexed to return in the following cases:",
      //   leftMargin,
      //   topMargin + 2 * lineHeight,
      //   { align: "left", maxWidth: 5.5 }
      // );

      // doc.autoTable({
      //   theme: "plain",
      //   styles: {
      //     font: "times",
      //     fontSize: 11,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.0,
      //     valign: "middle",
      //     cellPadding: 0,
      //   },
      //   margin: { left: leftMargin },
      //   body: [
      //     ["Schedule 24A", "if  you have income from Salaries"],
      //     ["Schedule 24B", "if  you have income from house property"],
      //     ["Schedule 24C", "if  you have income from business or profession"],
      //     ["Schedule 24D", "if  you claim tax rebate"],
      //   ],
      //   startY: topMargin + 3 * lineHeight,
      // });

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text("PART I", width / 2.0, topMargin + 7 * lineHeight, "center");

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text(
      //   "Basic Information",
      //   width / 2.0,
      //   topMargin + 8 * lineHeight,
      //   "center"
      // );

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "middle",
      //     cellPadding: 0.05,
      //     minCellHeight: 0.5,
      //   },
      //   margin: { left: leftMargin },
      //   body: [
      //     [
      //       "01",
      //       "Assessment Year\n" +
      //         (this.$store.state.assessmentYearFrom +
      //           "-" +
      //           this.$store.state.assessmentYearTo),
      //       "02",
      //       "Return submitted under section 82BB?\n " +
      //         (this.$store.state.complyTo82BB ? "Yes" : "No"),
      //     ],
      //     [
      //       "03",
      //       "Name of the Assessee\n" + this.$store.state.name,
      //       "04",
      //       "Gender\n " + this.$store.state.gender,
      //     ],
      //     [
      //       "05",
      //       "Twelve-digit TIN\n" + this.$store.state.tin,
      //       "06",
      //       "Old TIN\n " + this.$store.state.oldTin,
      //     ],
      //     [
      //       "07",
      //       "Circle\n" + this.$store.state.circle,
      //       "08",
      //       "Zone\n " + this.$store.state.zone,
      //     ],
      //     [
      //       "09",
      //       "Resident Status",
      //       {
      //         content: this.$store.state.resident
      //           ? "Resident"
      //           : "Non-resident ",
      //         colSpan: 2,
      //         styles: { halign: "left" },
      //       },
      //     ],
      //     [
      //       "10",
      //       {
      //         content:
      //           "Tick on the box(es) below if you are:\n10A: A gazetted war-wounded freedom fighter: " +
      //           (this.$store.state.quota10A ? "Yes" : "No") +
      //           "\n10C: Aged 65 years or more: " +
      //           (this.$store.state.quota10C ? "Yes" : "No"),
      //         colSpan: 2,
      //         styles: { halign: "left" },
      //       },
      //       {
      //         content:
      //           "\n10B: A person with disability: " +
      //           (this.$store.state.quota10B ? "Yes" : "No") +
      //           "\n10D: A parent/legal guardian of a person with disability: " +
      //           (this.$store.state.quota10D ? "Yes" : "No"),
      //         styles: { halign: "left", cellWidth: 3 },
      //       },
      //     ],
      //     [
      //       "11",
      //       "Date of Birth:\n" + this.$store.state.birthDate2,
      //       "12",
      //       "Income Year:\n" +
      //         this.$store.state.incomeYearFrom +
      //         "-" +
      //         this.$store.state.incomeYearTo,
      //     ],
      //     [
      //       "13",
      //       {
      //         content:
      //           "If employed, employer’s name:\n" +
      //           this.$store.state.employerName,
      //         colSpan: 3,
      //       },
      //     ],
      //     [
      //       "14",
      //       "Spouse Name:\n" + this.$store.state.spouseName,
      //       "15",
      //       "Spouse TIN (if any):\n" + this.$store.state.spouseTIN,
      //     ],
      //     [
      //       "16",
      //       "Father's Name:\n" + this.$store.state.fatherName,
      //       "17",
      //       "Mother's Name:\n" + this.$store.state.motherName,
      //     ],
      //     [
      //       "18",
      //       "Present Address:\n" + this.$store.state.presentAddress,
      //       "19",
      //       "Permanent Address:\n" + this.$store.state.permanentAddress,
      //     ],
      //     [
      //       "20",
      //       "Contact Telephone:\n" + this.$store.state.phone,
      //       "21",
      //       "Email:\n" + this.$store.state.email,
      //     ],
      //     [
      //       "22",
      //       "National Identification Number:\n" + this.$store.state.nid,
      //       "23",
      //       "Business Identification Number:\n" + this.$store.state.bid,
      //     ],
      //   ],

      //   startY: topMargin + 8.5 * lineHeight,
      // });

      // // ==================
      // // END of PART I
      // //====================

      // // ====================
      // // PART II
      // // ====================
      // doc.addPage("a4", "p");

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text("PART II", width / 2.0, 3 * lineHeight, "center");

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text(
      //   "Particulars of Income and Tax",
      //   width / 2.0,
      //   4 * lineHeight,
      //   "center"
      // );
      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text(
      //   "TIN: " + this.$store.state.tin,
      //   width / 2.0,
      //   5 * lineHeight,
      //   "center"
      // );

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "middle",
      //     cellPadding: 0.05,
      //   },
      //   headStyles: {
      //     lineWidth: 0.01,
      //     fontStyle: "bold",
      //   },
      //   margin: { left: leftMargin },
      //   head: [["Sl. No", "Particulars of Total Income", "", "Amount(Taka)"]],
      //   body: [
      //     [
      //       "24",
      //       "Salaries (annex Schedule 24A)",
      //       "S.21",
      //       this.$store.getters.salariesFromIncome
      //         ? this.$store.getters.salariesFromIncome.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "25",
      //       "Interest on securities ",
      //       "S.22",
      //       this.$store.getters.interestOnSecurities
      //         ? this.$store.getters.interestOnSecurities.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "26",
      //       "Income from house property (annex Schedule 24B)",
      //       "S.24",
      //       this.$store.getters.incomeFromHouseProperty
      //         ? this.$store.getters.incomeFromHouseProperty.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "27",
      //       "Agricultural income",
      //       "S.26",
      //       this.$store.getters.incomeFromHouseProperty
      //         ? this.$store.getters.incomeFromHouseProperty.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "28",
      //       "Income from business or profession (annex Schedule 24C)",
      //       "S.28",
      //       this.$store.getters.incomeFromBusinessProfession
      //         ? this.$store.getters.incomeFromBusinessProfession.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "29",
      //       "Capital gains",
      //       "S.31",
      //       this.$store.getters.capitalGain
      //         ? this.$store.getters.capitalGain.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "30",
      //       "Income from other sources",
      //       "S.33",
      //       this.$store.getters.incomeFromOtherSources
      //         ? this.$store.getters.incomeFromOtherSources.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "31",
      //       "Share of income from firm or AOP",
      //       "",
      //       this.$store.getters.incomeFromFirmOrAOP
      //         ? this.$store.getters.incomeFromFirmOrAOP.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "32",
      //       "Income of minor or spouse under section 43(4)",
      //       "S.43",
      //       this.$store.getters.incomeOfMinorOrSpouse
      //         ? this.$store.getters.incomeOfMinorOrSpouse.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "33",
      //       "Foreign income",
      //       "",
      //       this.$store.getters.foreignIncome
      //         ? this.$store.getters.foreignIncome.toLocaleString()
      //         : "-",
      //     ],
      //     [
      //       "34",
      //       "Total income (aggregate of 24 to 33)",
      //       "",
      //       this.$store.getters.totalIncome
      //         ? this.$store.getters.totalIncome.toLocaleString()
      //         : "-",
      //     ],
      //   ],
      //   startY: 6 * lineHeight,
      // });

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "middle",
      //     cellPadding: 0.05,
      //     columnStyles: { 1: { halign: "center" } }, // Cells in first column centered and green
      //   },
      //   headStyles: {
      //     lineWidth: 0.01,
      //     fontStyle: "bold",
      //   },
      //   margin: { left: leftMargin },
      //   head: [["Sl. No", "Particulars of Total Income", "Amount(Taka)"]],
      //   body: [
      //     ["35", "Gross tax before tax rebate ", ""],
      //     ["36", "Tax rebate (annex Schedule 24D)", ""],
      //     ["37", "Net tax after tax rebate", ""],
      //     ["38", "Minimum tax ", ""],
      //     ["39", "Net wealth surcharge", ""],
      //     [
      //       "40",
      //       "Interest or any other amount under the Ordinance (if any)",
      //       "",
      //     ],
      //     ["41", "Total amount payable ", ""],
      //     ["42", "Tax deducted or collected at source (attach proof)", ""],
      //     ["43", "Advance tax paid (attach proof)", ""],
      //     [
      //       "44",
      //       "Adjustment of tax refund [mention assessment year(s) of refund]",
      //       "",
      //     ],
      //     ["45", "Amount paid with return (attach proof)", ""],
      //     ["46", "Total amount paid and adjusted (42+43+44+45)", ""],
      //     ["47", "Deficit or excess (refundable) (41-46)", ""],
      //     ["48", "Tax exempted income", ""],
      //   ],
      //   startY: topMargin + 17 * lineHeight,
      // });

      // doc.addPage("a4", "p");

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text("PART III", width / 2.0, 3 * lineHeight, "center");
      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text(
      //   "Instruction, Enclosures and Verification",
      //   width / 2.0,
      //   4 * lineHeight,
      //   "center"
      // );
      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text(
      //   "TIN: " + this.$store.state.tin,
      //   width / 2.0,
      //   5 * lineHeight,
      //   "center"
      // );

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "middle",
      //     cellPadding: 0.05,
      //   },
      //   headStyles: {
      //     lineWidth: 0.01,
      //     fontStyle: "bold",
      //   },
      //   margin: { left: leftMargin },
      //   // head: [["Sl. No", "Particulars of Total Income", "", "Amount(Taka)"]],
      //   body: [
      //     [
      //       { content: "49", rowSpan: 2, styles: { cellWidth: 0.5 } },
      //       {
      //         content: "Instructions",
      //         colSpan: 2,
      //         styles: { fontStyle: "bold" },
      //       },
      //     ],
      //     [
      //       {
      //         content:
      //           "1. Statement of assets, liabilities and expenses (IT-10B2016) and statement of life style expense(IT-10BB2016) must be furnished with the return unless you are exempted from furnishing such statement(s) under section 80. \n2. Proof of payments of tax, including advance tax and withholding tax and the proof of investment for tax rebate must be provided along with return. \n3. Attach account statements and other documents where applicable",
      //         colSpan: 2,
      //       },
      //     ],
      //     [
      //       "50",
      //       "If you are a parent of a person with disability, has your spouse availed the extended tax exemption threshold?",
      //       this.$store.state.parentOfDisabled ? "Yes" : "No",
      //     ],
      //     [
      //       "51",
      //       "Are you required to submit a statement of assets, liabilities and expenses (IT-10B2016) under section 80(1)?",
      //       {
      //         content: this.$store.state.requireAssetLiabilityExpense
      //           ? "Yes"
      //           : "No",
      //         styles: { minCellWidth: 2 },
      //       },
      //     ],
      //     [
      //       "52",
      //       "Schedules annexed: \t",
      //       this.$store.state.scheduleAnnexed.join(", "),
      //     ],
      //     [
      //       "53",
      //       "Statements annexed: \t",
      //       this.$store.state.statementsAnnexed.join(","),
      //     ],
      //     [
      //       "54",
      //       {
      //         content:
      //           "Other statements, documents, etc. attached (list all): \n- " +
      //           this.$store.state.listOfDocumentsAttached.join("\n- "),
      //         colSpan: 2,
      //       },
      //     ],
      //   ],
      //   startY: 6 * lineHeight,
      // });

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text(
      //   "Verification and Signature",
      //   width / 2.0,
      //   24 * lineHeight,
      //   "center"
      // );

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "middle",
      //     cellPadding: 0.05,
      //   },
      //   headStyles: {
      //     lineWidth: 0.01,
      //     fontStyle: "bold",
      //   },
      //   margin: { left: leftMargin },
      //   // head: [["Sl. No", "Particulars of Total Income", "", "Amount(Taka)"]],
      //   body: [
      //     [
      //       { content: "55", rowSpan: 3, styles: { cellWidth: 0.5 } },
      //       {
      //         content: "Verification",
      //         colSpan: 2,
      //         styles: { fontStyle: "bold" },
      //       },
      //     ],
      //     [
      //       {
      //         content:
      //           "I solemnly declare that to the best of my knowledge and belief the information given in this return and statements and documents annexed or attached herewith are correct and complete.",
      //         colSpan: 2,
      //       },
      //     ],
      //     [
      //       "Name:\n"+this.$store.state.name+"\n\n"+"____ - ____ - ________\nDate of Signature(DD-MM-YYYY)",
      //       "Signature:\n\n________________________________"
      //     ],
      //   ],
      //   startY: 24.5 * lineHeight,
      // });

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text(
      //   "For Office use Only",
      //   width / 2.0,
      //   34 * lineHeight,
      //   "center"
      // );

      // doc.setFont("times", "normal").setFontSize(12);
      // doc.text(
      //   "Return Submission Information",
      //   width / 2.0,
      //   35 * lineHeight,
      //   "center"
      // );

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "middle",
      //     cellPadding: 0.05,
      //   },
      //   headStyles: {
      //     lineWidth: 0.01,
      //     fontStyle: "bold",
      //   },
      //   margin: { left: leftMargin },
      //   // head: [["Sl. No", "Particulars of Total Income", "", "Amount(Taka)"]],
      //   body: [
      //     [
      //       "Date of Submission (DD-MM-YYYY)\n\n____ - ____ - ________",
      //       "Tax Office Entry Number\n\n___________________________________"
      //     ]
      //   ],
      //   startY: 35.5 * lineHeight,
      // });
      // // =========================
      // // PART III
      // // =========================

      // // +++++++++++++++++++++++++
      // // Acknowledge Slip
      // // +++++++++++++++++++++++++
      // doc.addPage("a4", "p");

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text("ACKNOWLEDGEMENT RECEIPT OF\nRETURN OF INCOME", width / 2.0, 5.5 * lineHeight, "center");

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "top",
      //     cellPadding: 0.05,
      //     minCellHeight: 0.75
      //   },
      //   headStyles: {
      //     lineWidth: 0.01,
      //     fontStyle: "bold",
      //   },
      //   margin: { left: leftMargin },
      //   // head: [["Sl. No", "Particulars of Total Income", "", "Amount(Taka)"]],
      //   body: [
      //     [
      //       "Assessment Year\n\n"+this.$store.state.assessmentYearFrom+"-"+this.$store.state.assessmentYearTo,
      //       "Return under section section 82BB?\n\n"+(this.$store.state.complyTo82BB?"Yes": "No")
      //     ],
      //     [
      //       {content: "Name of the Assessee:\n\n"+this.$store.state.name, colSpan:2}
      //     ],
      //     [
      //       "Circle:\n\n"+this.$store.state.circle,
      //       "Tax Zone:\n\n"+this.$store.state.zone
      //     ],
      //     [
      //       {content: "Total income shown(serial 34):\n\n"+this.$store.getters.totalIncome, colSpan:2}
      //     ],
      //     [
      //       "Amount Payable(serial 41):\n\n"+"--",
      //       "Amount Paid and adjusted(serial 46):\n\n"+"--"
      //     ],
      //     [
      //       "Date of Submission (DD-MM-YYYY):\n\n"+"____ -- ____ -- ________",
      //       "Tax Office Entry Number:\n\n"+"______________________"
      //     ],
      //     [
      //       {content: "Signature and seal of the official receiving the return:\n", colSpan:2}
      //     ],
      //     [
      //       "Date of Signature (DD-MM-YYYY):\n\n"+"____ -- ____ -- ________",
      //       "Contact Number of Tax Office:\n"
      //     ]
      //   ],
      //   startY: 7 * lineHeight,
      // });

      // // +++++++++++++++++++++++++
      // // SCHEDULE 24A
      // // +++++++++++++++++++++++++
      // doc.addPage("a4", "p");

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text("SCHEDULE 24A", width / 2.0, 5.5 * lineHeight, "center");

      // doc.setFont("times", "normal").setFontSize(12);
      // doc.text(
      //   "Particulars of income from Salaries",
      //   width / 2.0,
      //   6.5 * lineHeight,
      //   "center"
      // );

      // doc.setFont("times", "italic").setFontSize(12);
      // doc.text(
      //   "Annex this Schedule to the return of income if you have income from Salaries",
      //   width / 2.0,
      //   7.5 * lineHeight,
      //   "center"
      // );
      // var tableBody = [];
      // this.$store.state.schedule24A.forEach((particular) => {
      //   tableBody.push([
      //     particular.sl,
      //     particular.title + particular.extra,
      //     particular.amount,
      //     particular.taxExempted,
      //     particular.taxable,
      //   ]);
      // });
      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "top",
      //     cellPadding: 0.05,
      //   },
      //   headStyles: {
      //     lineWidth: 0.01,
      //     fontStyle: "bold",
      //     halign: "center",
      //   },
      //   columnStyles: {
      //     0: { halign: "center" },
      //     1: { halign: "left" },
      //     2: { halign: "center", cellWidth: 1 },
      //     3: { halign: "center", cellWidth: 1 },
      //     4: { halign: "center", cellWidth: 1 },
      //   },
      //   margin: { left: leftMargin },
      //   head: [
      //     [
      //       "Sl. No",
      //       "Particulars",
      //       "Amount\n(A)",
      //       "Tax Exempted(B)",
      //       "Taxable\n(C=A-B)",
      //     ],
      //   ],
      //   body: tableBody,
      //   startY: 8 * lineHeight,
      // });

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: 3.5,
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "top",
      //     cellPadding: 0.05,
      //     minCellHeight: 1,
      //   },
      //   margin: { left: leftMargin },
      //   body: [["Name:\n" + this.$store.state.name, "Signature & Date"]],
      //   startY: 38 * lineHeight,
      // });

      // // +++++++++++++++++++++++++
      // // SCHEDULE 24D
      // // +++++++++++++++++++++++++
      // doc.addPage("a4", "p");

      // doc.setFont("times", "bold").setFontSize(12);
      // doc.text("SCHEDULE 24D", width / 2.0, 5.5 * lineHeight, "center");
      // doc.setFont("times", "normal").setFontSize(12);
      // doc.text(
      //   "Particulars of tax credit/rebate",
      //   width / 2.0,
      //   6.5 * lineHeight,
      //   "center"
      // );

      // doc.setFont("times", "italic").setFontSize(12);
      // doc.text(
      //   "To be annexed to return by an assessee claiming investment tax credit\n(Attach the proof of claimed investment, contribution, etc.)",
      //   width / 2.0,
      //   7.5 * lineHeight,
      //   "center"
      // );

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "top",
      //     cellPadding: 0.05,
      //   },
      //   margin: { left: leftMargin },
      //   body: [
      //     [
      //       "01",
      //       "Assessment Year\n"+this.$store.state.assessmentYearFrom+" - "+this.$store.state.assessmentYearTo,
      //       "02",
      //       "TIN\n"+this.$store.state.tin
      //     ]
      //     ],
      //   startY: 9 * lineHeight,
      // });

      // var tableBody = [];
      // this.$store.state.schedule24D.forEach((particular) => {
      //   tableBody.push([
      //     particular.sl,
      //     particular.title + particular.extra,
      //     particular.amount,
      //   ]);
      // });
      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "top",
      //     cellPadding: 0.05,
      //   },
      //   headStyles: {
      //     lineWidth: 0.01,
      //     fontStyle: "bold",
      //     halign: "center",
      //   },
      //   columnStyles: {
      //     0: { halign: "left", cellWidth: 0.65 },
      //     1: { halign: "left" },
      //     2: { halign: "center" },
      //   },
      //   margin: { left: leftMargin },
      //   head: [["Sl. No", "Particulars", "Amount (Taka)"]],
      //   body: tableBody,
      //   startY: 13 * lineHeight,
      // });

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fontSize: 12,
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: 3.5,
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "top",
      //     cellPadding: 0.05,
      //     minCellHeight: 1,
      //   },
      //   margin: { left: leftMargin },
      //   body: [["Name:\n" + this.$store.state.name, "Signature & Date"]],
      //   startY: 38 * lineHeight,
      // });

      // +++++++++++++++++++++++++
      // SCHEDULE 24D
      // +++++++++++++++++++++++++
      // doc.addPage("a4", "p");

      doc.setFont("times", "bold").setFontSize(12);
      doc.text(
        "STATEMENT OF EXPENSES RELATING TO LIFESTYLE ",
        width / 2.0,
        4.5 * lineHeight,
        "center"
      );
      doc.setFont("times", "normal").setFontSize(12);
      doc.text(
        "under section 80(2) of the Income Tax Ordinance, 1984 (XXXVI of 1984)",
        width / 2.0,
        5.5 * lineHeight,
        "center"
      );

      doc.autoTable({
        theme: "grid",
        styles: {
          font: "times",
          fontSize: 12,
          fillColor: null,
          overflow: "linebreak",
          textColor: [0, 0, 0],
          lineColor: [0, 0, 0],
          lineWidth: 0.01,
          valign: "top",
          cellPadding: 0.04,
        },
        margin: { left: leftMargin },
        body: [
          [
            "01",
            "Assessment Year\n" +
              this.$store.state.assessmentYearFrom +
              " - " +
              this.$store.state.assessmentYearTo,
            "02",
            "Statement as on (DD-MM-YYYY)\n_____ - _____ - ________",
          ],
          [
            "03",
            "Name of the Assessee\n" + this.$store.state.name,
            "04",
            "TIN\n" + this.$store.state.tin,
          ],
        ],
        startY: 6 * lineHeight,
      });

      var tableBody = [];
      this.$store.state.statementOfExpense.forEach((particular) => {
        tableBody.push([
          particular.sl,
          particular.title,
          particular.amount,
          particular.comment,
        ]);
      });
      doc.autoTable({
        theme: "grid",
        styles: {
          font: "times",
          fontSize: 12,
          fillColor: null,
          overflow: "linebreak",
          textColor: [0, 0, 0],
          cellWidth: "auto",
          lineColor: [0, 0, 0],
          lineWidth: 0.01,
          valign: "top",
          cellPadding: 0.04,
        },
        headStyles: {
          lineWidth: 0.01,
          fontStyle: "bold",
          halign: "center",
        },
        columnStyles: {
          0: { halign: "left", cellWidth: 0.65 },
          1: { halign: "left" },
          2: { halign: "center" },
        },
        margin: { left: leftMargin },
        head: [["Sl. No", "Particulars", "Amount (Taka)", "Comments"]],
        body: tableBody,
        startY: 11 * lineHeight,
      });

      doc.autoTable({
        theme: "grid",
        styles: {
          font: "times",
          fontSize: 12,
          fillColor: null,
          overflow: "linebreak",
          textColor: [0, 0, 0],
          lineColor: [0, 0, 0],
          lineWidth: 0.01,
          valign: "top",
          cellPadding: 0.04,
        },
        headStyles: {
          fontStyle: "bold",
          lineColor: [255, 255, 255],
          halign: "center",
        },
        margin: { left: leftMargin },
        head: [[{ content: "Verification and Signature", colSpan: 3 }]],
        body: [
          [
            { content: "15", rowSpan: 3 },
            {
              content: "Verification",
              colSpan: 2,
              styles: { fontStyle: "bold" },
            },
          ],
          [
            {
              content:
                "I solemnly declare that to the best of my knowledge and belief the information given in this statement is correct and complete.",
              colSpan: 2,
            },
          ],
          ["Name:\n" + this.$store.state.name, "Signature & Date"],
        ],
        startY: 37 * lineHeight,
      });

      // doc.autoTable({
      //   theme: "grid",
      //   styles: {
      //     font: "times",
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "middle",
      //   },
      //   body: [
      //     ["01", "Assessment Year", "02", "TIN"],
      //     ["", this.$store.state.assessmentYear, "", this.$store.state.tin],
      //   ],
      //   startY: topMargin + 3 * lineHeight,
      // });

      // doc.autoTable({
      //   theme: "plain",
      //   styles: {
      //     font: "times",
      //     fontStyle: "bold",
      //     fillColor: null,
      //     overflow: "linebreak",
      //     textColor: [0, 0, 0],
      //     cellWidth: "auto",
      //     lineColor: [0, 0, 0],
      //     lineWidth: 0.01,
      //     valign: "middle",
      //   },
      //   headStyles: {
      //     fontStyle: "bold",
      //   },
      //   bodyStyles: {
      //     fontStyle: "normal",
      //   },
      //   columns: [
      //     { header: "id", dataKey: "id" },
      //     { header: "particulars", dataKey: "particulars" },
      //     { header: "amount", dataKey: "amount" },
      //     { header: "taxExempted", dataKey: "taxExempted" },
      //     { header: "taxable", dataKey: "taxable" },
      //   ],
      //   columnStyles: {
      //     amount: {
      //       cellWidth: 1,
      //       halign: "right",
      //     },
      //     taxExempted: {
      //       cellWidth: 1,
      //       halign: "right",
      //     },
      //     taxable: {
      //       cellWidth: 1,
      //       halign: "right",
      //     },
      //   },
      //   head: [["", "Particulars", "Amount(A)", "Tax Exempted(B)", "Taxable"]],
      //   body: [
      //     ["03", "Basic Pay", "321120", "-", "321120"],
      //     ["03", "Special pay", "321120", "-", "321120"],
      //     [
      //       "03",
      //       "Arrear pay (if not included in taxable income earlier)",
      //       "321120",
      //       "-",
      //       "321120",
      //     ],
      //     ["03", "Dearness allowance", "321120", "-", "321120"],
      //     ["03", "Medical allowance", "321120", "-", "321120"],
      //     ["03", "Conveyance allowance", "321120", "-", "321120"],
      //     ["03", "Festival Allowance", "321120", "-", "321120"],
      //     ["03", "Allowance for support staff", "321120", "-", "321120"],
      //     ["03", "Leave allowance", "321120", "-", "321120"],
      //     ["03", "Honorarium/ Reward/Fee", "321120", "-", "321120"],
      //     ["03", "Overtime allowance", "321120", "-", "321120"],
      //     ["03", "Bonus / Ex-gratia", "321120", "-", "321120"],
      //     ["03", "Other allowances (BRTC)", "321120", "-", "321120"],
      //     [
      //       "03",
      //       "Employer's contribution to a recognized provident fund",
      //       "321120",
      //       "-",
      //       "321120",
      //     ],
      //     [
      //       "03",
      //       "Interest accrued on a recognized provident fund",
      //       "321120",
      //       "-",
      //       "321120",
      //     ],
      //     [
      //       "03",
      //       "Interest accrued on a recognized provident fund",
      //       "321120",
      //       "-",
      //       "321120",
      //     ],
      //     [
      //       "03",
      //       "Deemed income for transport facility",
      //       "321120",
      //       "-",
      //       "321120",
      //     ],
      //     [
      //       "03",
      //       "Deemed income for free furnished/ unfurnished accommodation",
      //       "321120",
      //       "-",
      //       "321120",
      //     ],
      //     ["03", "Other, if any (give detail):Exam", "321120", "-", "321120"],
      //     ["03", "Total", "321120", "-", "321120"],
      //   ],
      //   startY: topMargin + 6 * lineHeight,
      // });

      // doc.setFont("times", "italic");
      // doc.text(
      //   "All figures of amount are in taka(৳)",
      //   width / 2.0,
      //   topMargin + 10 * lineHeight,
      //   "center"
      // );

      // // text is placed using x, y coordinates
      // // doc.addImage(imgData, 'JPEG', 45, 30, 90, 118);
      // doc.setFont("times").setFontSize(22).text(420, 40, "TAX INVOICE");
      // doc.setFont("times").setFontSize(10).text(400, 70, "NUMBER:");
      // doc.setFont("times").setFontSize(10).text(490, 70, "123456789");
      // doc.setFont("times").setFontSize(10).text(385, 85, "REFERENCE:");
      // doc.setFont("times").setFontSize(10).text(490, 85, "123456789");
      // doc.setFont("times").setFontSize(10).text(416, 100, "DATE:");
      // doc.setFont("times").setFontSize(10).text(490, 100, "123456789");
      // doc.setFont("times").setFontSize(10).text(392, 115, "DUE DATE:");
      // doc.setFont("times").setFontSize(10).text(490, 115, "123456789");
      // doc.setFont("times").setFontSize(10).text(390, 130, "SALES REP:");
      // doc.setFont("times").setFontSize(10).text(490, 130, "123456789");
      // doc
      //   .setFont("times")
      //   .setFontSize(10)
      //   .text(330, 145, "OVERALL DISCOUNT %:");
      // doc.setFont("times").setFontSize(10).text(490, 145, "123456789");
      // doc.setFont("times").setFontSize(10).text(412, 160, "PAGES:");
      // doc.setFont("times").setFontSize(10).text(490, 160, "123456789");
      // doc.setFont("times").setFontSize(11).text(50, 230, "FROM:");
      // doc.setFont("times").setFontSize(11).text(300, 230, "TO:");
      // doc.setFont("times").setFontSize(18).text(50, 250, "COMPANY Inc.");
      // doc.setFont("times").setFontSize(18).text(300, 250, "COMPANY Inc.");
      // doc.setFont("times").setFontSize(11).text(50, 280, "VAT NO:");
      // doc.setFont("times").setFontSize(11).text(300, 280, "CUSTOMER VAT NO:");
      // doc
      //   .setFont("times")
      //   .setFontSize(10)
      //   .text(50, 290, "1355 Market Street, Suite 900");
      // doc
      //   .setFont("times")
      //   .setFontSize(10)
      //   .text(300, 290, "1355 Market Street, Suite 900");
      // doc
      //   .setFont("times")
      //   .setFontSize(10)
      //   .text(50, 300, "San Francisco, CA 94103");
      // doc
      //   .setFont("times")
      //   .setFontSize(10)
      //   .text(300, 300, "San Francisco, CA 94103");
      // doc.setFont("times").setFontSize(10).text(50, 310, "P: (123) 456-7890");
      // doc.setFont("times").setFontSize(10).text(300, 310, "P: (123) 456-7890");

      // doc.autoTable(columns, this.items, { margin: { top: 350 } });

      // doc.setLineWidth(2);
      // doc.line(560, 725, 40, 725);
      // doc.save(`${this.heading}.pdf`);
      var string = doc.output("datauristring");
      var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
      var x = window.open();
      x.document.open();
      x.document.write(embed);
      x.document.close();
    },
  },
};
</script>
