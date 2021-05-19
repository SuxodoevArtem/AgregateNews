<template>
  <div>
    <Header/>  
    <h1>Settings</h1>
  </div>
</template>

<script >

export default {
  
  name: 'Settings',
  components: {
    Header: () => import('@/components/layouts/Header')
  }

}
</script>

<style lang="scss">

</style>