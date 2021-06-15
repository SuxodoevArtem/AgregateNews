<template>

</template>
<script>
    export default {
        name: 'CartNews',
        props: { 
            cartName: { type: String,  default: "Cart Name", },
            VK: { type: Boolean, default: false, },
            RSS: { type: Boolean, default: true, },
            Link: { type: String, default: "", },
            keyWords: { type: Array },
         }  
    }

</script>
<style lang="scss">

</style>