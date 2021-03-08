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
          <v-checkbox
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
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 class="d-flex justify-center mb-6">Part I</h2>
        </v-col>
      </v-row>
      <BasicInformation />
      <Schedule24A v-if="showSchedule24A" />
    </v-container>
  </v-app>
</template>

<script>
import BasicInformation from "./components/BasicInformation.vue";
import Schedule24A from "./components/Schedule24A.vue";

import { jsPDF } from "jspdf";
import "jspdf-autotable";
export default {
  name: "App",
  components: {
    BasicInformation,
    Schedule24A,
  },
  data: () => ({
    heading: "Tax Calculator v1",
    showSchedule24A: "false",
    showSchedule24B: "false",
    showSchedule24C: "false",
    showSchedule24D: "false",
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
  computed: {
    name() {
      return this.$store.state.name.toUpperCase();
    },
  },
  methods: {
    changeName() {
      this.$store.state.name = "New Name";
    },
    generatePDF() {
      const columns = [
        { title: "Discription", dataKey: "discription" },
        { title: "Quantity", dataKey: "quantity" },
        { title: "UnitPrice", dataKey: "unitprice" },
        { title: "Disc%", dataKey: "disk" },
        { title: "Vat%", dataKey: "vat" },
        { title: "ExclTotal", dataKey: "excltotal" },
        { title: "InclTotal", dataKey: "incltotal" },
      ];
      const doc = new jsPDF({
        orientation: "p",
        unit: "in",
        format: "a4",
      });
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      var lineHeight = 0.25;
      var topMargin = 1.0;
      var leftMargin = 0.9;
      var rightMargin = 0.9;
      var bottomMargin = 1.0;

      doc.setFont("times", "bold").setFontSize(16);
      doc.text("SCHEDULE 24A", width / 2.0, topMargin, "center");

      doc.setFont("times", "bold").setFontSize(14);
      doc.text(
        "Particulars of income from Salaries",
        width / 2.0,
        topMargin + lineHeight,
        "center"
      );

      doc.setFont("times", "italic");
      doc.text(
        "Annex this Schedule to the return of income if you have income from Salaries",
        width / 2.0,
        topMargin + 2 * lineHeight,
        "center"
      );

      doc.autoTable({
        theme: "grid",
        styles: {
          font: "times",
          fillColor: null,
          overflow: "linebreak",
          textColor: [0, 0, 0],
          cellWidth: "auto",
          lineColor: [0, 0, 0],
          lineWidth: 0.01,
          valign: "middle",
        },
        body: [
          ["01", "Assessment Year", "02", "TIN"],
          ["", "2020-21", "", "889529829745"],
        ],
        startY: topMargin + 3 * lineHeight,
      });

      doc.autoTable({
        theme: "plain",
        styles: {
          font: "times",
          fontStyle: "bold",
          fillColor: null,
          overflow: "linebreak",
          textColor: [0, 0, 0],
          cellWidth: "auto",
          lineColor: [0, 0, 0],
          lineWidth: 0.01,
          valign: "middle",
        },
        headStyles: {
          fontStyle: "bold",
        },
        bodyStyles: {
          fontStyle: "normal",
        },
        columns: [
          { header: "id", dataKey: "id" },
          { header: "particulars", dataKey: "particulars" },
          { header: "amount", dataKey: "amount" },
          { header: "taxExempted", dataKey: "taxExempted" },
          { header: "taxable", dataKey: "taxable" },
        ],
        columnStyles: {
          amount: {
            cellWidth: 1,
            halign: "right",
          },
          taxExempted: {
            cellWidth: 1,
            halign: "right",
          },
          taxable: {
            cellWidth: 1,
            halign: "right",
          },
        },
        head: [["", "Particulars", "Amount(A)", "Tax Exempted(B)", "Taxable"]],
        body: [
          ["03", "Basic Pay", "321120", "-", "321120"],
          ["03", "Special pay", "321120", "-", "321120"],
          [
            "03",
            "Arrear pay (if not included in taxable income earlier)",
            "321120",
            "-",
            "321120",
          ],
          ["03", "Dearness allowance", "321120", "-", "321120"],
          ["03", "Medical allowance", "321120", "-", "321120"],
          ["03", "Conveyance allowance", "321120", "-", "321120"],
          ["03", "Festival Allowance", "321120", "-", "321120"],
          ["03", "Allowance for support staff", "321120", "-", "321120"],
          ["03", "Leave allowance", "321120", "-", "321120"],
          ["03", "Honorarium/ Reward/Fee", "321120", "-", "321120"],
          ["03", "Overtime allowance", "321120", "-", "321120"],
          ["03", "Bonus / Ex-gratia", "321120", "-", "321120"],
          ["03", "Other allowances (BRTC)", "321120", "-", "321120"],
          [
            "03",
            "Employer's contribution to a recognized provident fund",
            "321120",
            "-",
            "321120",
          ],
          [
            "03",
            "Interest accrued on a recognized provident fund",
            "321120",
            "-",
            "321120",
          ],
          [
            "03",
            "Interest accrued on a recognized provident fund",
            "321120",
            "-",
            "321120",
          ],
          [
            "03",
            "Deemed income for transport facility",
            "321120",
            "-",
            "321120",
          ],
          [
            "03",
            "Deemed income for free furnished/ unfurnished accommodation",
            "321120",
            "-",
            "321120",
          ],
          ["03", "Other, if any (give detail):Exam", "321120", "-", "321120"],
          ["03", "Total", "321120", "-", "321120"],
        ],
        startY: topMargin + 6 * lineHeight,
      });

      doc.setFont("times", "italic");
      doc.text(
        "All figures of amount are in taka(৳)",
        width / 2.0,
        topMargin + 10 * lineHeight,
        "center"
      );

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
