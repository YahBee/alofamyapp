<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { 
    title: this.$t('home.introduction')
  		}
	}
}
</script>