<template>
  <v-row>
    <v-col>
      Name: {{name}}
    </v-col>
    <v-col>
      <v-text-field v-model="test1" label="Test1"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed:{
    test1(){
      return this.$store.state.test1
    },
    name(){
      return this.$store.state.name
    }
  }
};
</script>

<style>
</style>