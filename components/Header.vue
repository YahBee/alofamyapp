<template>
  <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: 'appheader',
  data () {
    return {
      drawer: null,
      right: null
    }
  }
}
</script>

<style scoped>
.center{
  width: 100%;
  text-align: center;
}
.nav_text{
  color: #000000;
}
.nav_link{
  text-decoration: none;
}
.nav_mobile_link{
  text-decoration: none;
  margin: 50px;
}
.logout_mobile_button{
  margin: 60px;
}
</style>