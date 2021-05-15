<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {
      Header: () => import('@/components/layouts/Header')
    }
  }
  
</script>

<style>

</style>
