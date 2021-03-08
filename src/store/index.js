import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    assessmentYear: "",
    complyTo82BB: true,
    name: "",
    gender: null,
    tin: "",
    haveOldTIN: false,
    oldTin: false,
    circle: "",
    zone: "",
    resident: true,
    quota: [],
    birthDate2: null,
    incomeYear: '',
    employerName: '',
    spouseName: '',
    spouseTIN: '',
    fatherName: '',
    motherName: '',
    presentAddress: '',
    permanentAddress: '',
    phone: '',
    email: '',
    nid: '',
    bid: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
