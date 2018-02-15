<template>
  <div class="container">
    <h1>User</h1>
    <p><nuxt-link to="/">Home</nuxt-link></p>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
