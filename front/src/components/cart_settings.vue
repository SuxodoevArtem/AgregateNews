<template>
    
</template>
<script>
    export default {
        name: 'ProductCard',
        props: { 
            cartName: { type: String,  default: "Cart Name", },
            VK: { type: Boolean, default: false, },
            RSS: { type: Boolean, default: true, },
            Link: { type: String, default: "", },
            nameGroupe: { type: String, default: "", },
            keyWords: []
         }
    }
    
</script>
<style lang="scss">

</style>
