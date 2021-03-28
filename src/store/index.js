import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    assessmentYearFrom: "2019",
    assessmentYearTo: "2020",
    complyTo82BB: false,
    name: "Md. X",
    gender: "Male",
    tin: "889529829745",
    haveOldTIN: false,
    oldTin: "",
    circle: "49",
    zone: "03",
    resident: true,
    quota10A: false,
    quota10B: false,
    quota10C: true,
    quota10D: false,
    birthDate2: "18-08-1992",
    incomeYearFrom: "2018",
    incomeYearTo: "2019",
    employerName: "Chittagong University of Engineering and Technology(CUET), Chattogram-4349",
    spouseName: "Mrs. Y",
    spouseTIN: "",
    fatherName: "Md. Abdul Hannan",
    motherName: "Fatema Begum",
    presentAddress: "Dept. of EEE, CUET",
    permanentAddress: "Vill.: Bhaluka, Upazilla+Post Office: Gouripur, District: Mymensingh",
    phone: "01737520527",
    email: "shrazo@cuet.ac.bd",
    nid: "4154126108",
    bid: "",
    parentOfDisabled: false,
    requireAssetLiabilityExpense: true,
    scheduleAnnexed: ['24A', '24B', '24C'],
    statementsAnnexed: ['IT-10B2016', 'IT-10BB2016'],
    listOfDocumentsAttached: ["NID", "GPF Statements", "Bank Statements"],
    schedule24A: [
      { sl: '03', title: 'Baic Pay', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '04', title: 'Special pay', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      {
        sl: '05', title: 'Arrear pay (if not included in taxable income earlier)', extra: '', amount: 0, taxExempted: false, taxable: 0
      },
      { sl: '06', title: 'Dearness allowance', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '07', title: 'House rent allowance', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '08', title: 'Medical allowance', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '09', title: 'Conveyance allowance', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '10', title: 'Festival Allowance', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '11', title: 'Allowance for support staff', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '12', title: 'Leave allowance', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '13', title: 'Honorarium/ Reward/Fee', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '14', title: 'Overtime allowance', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '15', title: 'Bonus / Ex-gratia', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '16', title: 'Other allowances', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '17', title: 'Employer’s contribution to a recognized provident fund', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '18', title: 'Interest accrued on a recognized provident fund', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '19', title: 'Deemed income for transport facility ', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '20', title: 'Deemed income for free furnished/ unfurnished accommodation', extra: '', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '21', title: 'Other, if any (give detail)\n', extra: 'BRTC', amount: 0, taxExempted: false, taxable: 0 },
      { sl: '22', title: 'Total', extra: '', amount: 0, taxExempted: 0, taxable: 0 },
    ],
    schedule24D: [
      { sl: '03', title: 'Life insurance premium', extra: '', amount: 0 },
      { sl: '04', title: 'Contribution to deposit pension scheme (not exceeding allowable limit)', extra: '', amount: 0 },
      { sl: '05', title: 'Investment in approved savings certificate', extra: '', amount: 0 },
      { sl: '06', title: 'Investment in approved debenture or debenture stock, Stock or Shares', extra: '', amount: 0 },
      { sl: '07', title: 'Contribution to provident fund to which Provident Fund  Act, 1925 applies', extra: '', amount: 0 },
      { sl: '08', title: 'Self contribution and employer’s contribution to Recognized Provident Fund', extra: '', amount: 0 },
      { sl: '09', title: 'Contribution to Super Annuation Fund', extra: '', amount: 0 },
      { sl: '10', title: 'Contribution to Benevolent Fund and Group Insurance Premium', extra: '', amount: 0 },
      { sl: '11', title: 'Contribution to Zakat Fund', extra: '', amount: 0 },
      { sl: '12', title: 'Others, if any ( give details ) ', extra: '', amount: 0 },
      { sl: '13', title: 'Total allowable investment, contribution etc.', extra: '', amount: 0 },
      { sl: '14', title: 'Eligible amount for rebate (the lesser of 14A, 14B or 14C)', extra: '', amount: 0 },
      { sl: '14A', title: '\tTotal allowable investment, contribution, etc. (as in 13)', extra: '', amount: 0 },
      { sl: '14B', title: '\t25% of the total income [excluding any income for which a tax exemption or a reduced rate is applicable under sub-section (4) of section 44 or any income from any source or sources mentioned in clause (a) of sub-section (2) of section 82C.]', extra: '', amount: 0 },
      { sl: '14C', title: '1.5 Crore', extra: '', amount: 15000000 },
      { sl: '15', title: 'Amount of tax rebate calculated on eligible amount (Serial14) under section 44(2)(b)', extra: '', amount: 0 },
    ],
    houseProperty: [],
    schedule25: {
      shares: [],
      nonAgri: [],
      agri: []
    },
    expenses: [
      { sl: '05', title: 'Expenses for food, clothing and other essentials', amount: 0, comment: '', subset: [] },
      { sl: '06', title: 'Housing expense', amount: 0, comment: '', subset: [] },
      {
        sl: '07', title: 'Auto and transportation expenses (07A+07B)', amount: 0, comment: '', subset: [{ sl: '07A', title: 'Driver’s salary, fuel and maintenance', amount: 0, comment: '' },
        { sl: '07B', title: 'Other transportation ', amount: 0, comment: '' },]
      },
      {
        sl: '08', title: 'Household and utility expenses (08A+08B+08C+08D)', amount: 0, comment: '', subset: [{ sl: '08A', title: 'Electricity', amount: 0, comment: '' },
        { sl: '08B', title: 'Gas, water, sewer and garbage', amount: 0, comment: '' },
        { sl: '08C', title: 'Phone, internet, TV channels subscription', amount: 0, comment: '' },
        { sl: '08D', title: 'Home-support staff and other expenses', amount: 0, comment: '' },]
      },
      { sl: '09', title: 'Children’s education expenses', amount: 0, comment: '', subset: [] },
      {
        sl: '10', title: 'Special expenses (10A+10B+10C+10D)', amount: 0, comment: '', subset: [{ sl: '10A', title: 'Festival, party, events and gifts', amount: 0, comment: '' },
        { sl: '10B', title: 'Domestic and overseas tour, holiday, etc. ', amount: 0, comment: '' },
        { sl: '10C', title: 'Donation, philanthropy, etc.', amount: 0, comment: '' },
        { sl: '10D', title: 'Other special expenses', amount: 0, comment: '' },]
      },
      { sl: '11', title: 'Any other expenses', amount: 0, comment: '', subset: [] },
      { sl: '12', title: 'Total expense relating to lifestyle (05+06+07+08+09+10+11)', amount: 0, comment: '', subset: [] },
      {
        sl: '13', title: 'Payment of tax, charges, etc. (13A+13B)', amount: 0, comment: '', subset: [{ sl: '13A', title: 'Payment of tax at source ', amount: 0, comment: '' },
        { sl: '13B', title: 'Payment of tax, surcharge or other amount', amount: 0, comment: '' },]
      },
      { sl: '14', title: 'Total amount of expense and tax (12+13)', amount: 0, comment: '', subset: [] },
    ]
  },
  mutations: {
    setName(state, name) {
      state.name = name
    },
    setAssessmentYear(state, value) {
      state.assessmentYear = value
    },
    setComplyTo82BB(state, value) {
      state.complyTo82BB = value
    },
    setGender(state, value) {
      state.gender = value
    },
    setTin(state, value) {
      state.tin = value
    },
    setHaveOldTIN(state, value) {
      state.haveOldTIN = value
    },
    deleteShare(state, share) {
      state.schedule25.shares.splice(state.schedule25.shares.indexOf(share), 1)
    },
    deleteNonAgri(state, item) {
      state.schedule25.nonAgri.splice(state.schedule25.nonAgri.indexOf(item), 1)
    },
    deleteAgri(state, item) {
      state.schedule25.agri.splice(state.schedule25.agri.indexOf(item), 1)
    }


  },
  actions: {
  },
  modules: {
  },
  getters: {
    name: (state) => {
      return state.name
    },
    salariesFromIncome: (state) => {
      return 1000000
    },
    interestOnSecurities: (state) => {
      return 0
    },
    incomeFromHouseProperty: (state) => {
      return 0
    },
    incomeFromBusinessProfession: (state) => {
      return 0
    },
    capitalGain: (state) => {
      return 0
    },
    incomeFromOtherSources: (state) => {
      return 10
    },
    incomeFromFirmOrAOP: (state) => {
      return 0
    },
    incomeOfMinorOrSpouse: state => {
      return 0
    },
    foreignIncome: state => {
      return 0
    },
    totalIncome: (state, getters) => {
      return getters.salariesFromIncome + getters.incomeFromOtherSources
    }
  }
})
