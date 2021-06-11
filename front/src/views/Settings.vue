<template>
  <div>
    <Header/>  
    <div class="Settings-container">

      <div class="SettingsCart-container">
        <input placeholder="Cart Name"  class="SettingsCart-container_title">
        <div class="SettingsCart-container_checkboxes">
          <p for="RadBtnVK" >VK</p>
          <input id="RadBtnVK" type="radio" value="0">
          <p for="RadBtnRSS" >RSS</p>
          <input id="RadBtnRSS" type="radio" value="1">
        </div>
        <input placeholder="Link"  class="SettingsCart-container_Link">

        <h5>Key Words</h5>

        <div class="KeyWords-container">
          <button class="KeyWords-container_btn">Add Key Word</button>
        </div>

        <button class="SettingsCart-container_Save">Save</button>

      </div>

    </div>
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
    .Settings-container{
      padding: 2.6%;
      display: flex;
      flex-wrap: wrap;

      .SettingsCart-container{
        width: 20%;
        height: 54vh;
        margin-right: 25px;
        border: 2px solid #C0C0C0;
        background-color: #fafafa;
        border-radius: 2px;
        font-size: 19px;

        .SettingsCart-container_title{
          outline: none;
          width: 80%;
          margin-top: 3%;
          margin-right: 6%;
          margin-left: 10px;
          color: #AFAFAF;
          border: none;
          background-color: #fafafa;;
        }

        .SettingsCart-container_checkboxes{
          display: flex;
          margin-top: 1.2vh;
          margin-left: 5%;
          color: #AFAFAF;

          p{
            margin-right: 6%;
            cursor: pointer;
          }

          input{
            cursor: pointer;
            margin-top: 3%;
            margin-right: 11%;
          }
        }

        .SettingsCart-container_Link{
          outline: none;
          width: 90%;
          margin-left: 5%;
          height: 4vh;
          color: #AFAFAF;
          border: 1px solid #C0C0C0;
        }

        h5{
          font-weight: 400;
          color: #AFAFAF;
          margin-left: 5%;
          padding-top: 2vh;
        }

        .KeyWords-container{
          margin: 5%;
          height: 22vh;
          width: 90%;
          
          .KeyWords-container_btn{
            outline: none;
            margin: 1%;
            height: 4vh;
            width: 55%;
            border-radius: 15px;
            border: 1px solid #AFAFAF;
            font-size: 15px;
            color: #AFAFAF;
            background-color: #fafafa;
          }

          .KeyWords-container_btn:hover{
            height: 4.2vh;
            transition: all 0.1s;
          }
        }

        .SettingsCart-container_Save{
          height: 5vh;
          border: none;
          width: 26%;
          margin-left: 5%;
          border-radius: 2px;
          background-color: #2BEDA7;
          opacity: 0.60;
          color: #09bda8;
        }

        .SettingsCart-container_Save:hover{
          background-color: #35ffb5;
          transition: 0.5s;
        }

      }
    }
</style>