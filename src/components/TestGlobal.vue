<template>
  <v-row>
    <v-col>
      <v-text-field v-model="name"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    name:{
      get(){
        return this.$store.state.name
      },
      set(value){
        this.$store.commit('setName', value)
      }
    }
  },
};
</script>

<style>
</style>