<template>

       <div >
        <input placeholder="Cart Name"  class="SettingsCart-container_title" :value="cartName">
        <div class="SettingsCart-container_checkboxes">
          <p for="RadBtnVK" >VK</p>
          <input id="RadBtnVK" type="radio" :value="VK">
          <p for="RadBtnRSS" >RSS</p>
          <input id="RadBtnRSS" type="radio" :value="RSS">
        </div>
        <input placeholder="Link"  class="SettingsCart-container_Link" :value="Link">

        <h5>Key Words</h5>  

        <div class="KeyWords-container">
            <button class="KeyWords-container_btn">Add Key Word</button>
            <div v-for="(keyWord, key) in keyWords" :key="key">
                <button class="KeyWords-container_keyword">{{keyWord}}</button>
                <i class="KeyWords-container-icon fas fa-trash-alt"></i>
                <i class="KeyWords-container-icon fas fa-pen"></i>
            </div>
        </div>

        <button class="SettingsCart-container_Save">Save</button>
        <button class="SettingsCart-container_Delete">Delete</button>
      </div>
</template>
<script>
    export default {
        name: 'CartSettings',
        props: { 
            cartName: { type: String,  default: "Cart Name", },
            VK: { type: Boolean, default: false, },
            RSS: { type: Boolean, default: true, },
            Link: { type: String, default: "", },
            keyWords: []
         }
    }

</script>
<style lang="scss">

</style>
