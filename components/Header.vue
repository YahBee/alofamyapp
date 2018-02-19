<template>
  <v-toolbar>
    <div class="logo">
      <a href="#"><router-link to="/"><img src="~/assets/img/icon.png"  alt=""></router-link></a>
    </div>
    <div id="nav">
    <router-link to="/publish">+Publish</router-link>
      <a href="#">Blog</a>
      <a href="#">Search</a>
    <router-link to="/login">Login</router-link>
    </div>
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
.header{
  width: 100%;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  position: fixed;
  top:0;
  left: 0;
  background-color: #fff;
}
.header .logo a img{
  margin: 10px;
  width: 60px;
}
.header #nav a{
  padding:20px 0 20px 40px;
}
button{
  text-align:center;
    text-decoration: none;
    display:inline-block;
    background: #f26722;
    padding: 10px 15px;
    outline: none;
            -webkit-border-radius: 7px;
            -moz-border-radius: 7px;
            border-radius: 7px;
            margin: 10px 5px;
}
</style>