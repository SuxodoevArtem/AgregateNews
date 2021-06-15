<template>
  <div>
    <Header/>  
    <div class="Settings-container">
      <div class="SettingsCart-container"
              v-for="(sourse, key) in GetSourses"
              :key="key"
          >
          <CartSettings 
              :cartName ="sourse.cartName" 
              :VK ="sourse.VK" 
              :RSS ="sourse.RSS" 
              :Link ="sourse.Link" 
              :keyWords ="sourse.keyWords" 
          />
      </div>

      <div class="SettingsCart-container">
        <input placeholder="Cart Name"  class="SettingsCart-container_title" v-model="SettingForm.cartName">
        <div class="SettingsCart-container_checkboxes">
          <p for="RadBtnVK" >VK</p>
          <input id="RadBtnVK"  type="radio" v-model="SettingForm.VK"  value=true>
          <p for="RadBtnRSS" >RSS</p>
          <input id="RadBtnRSS"  type="radio"   v-model="SettingForm.VK" value=false>
        </div>
        <input placeholder="Link"  class="SettingsCart-container_Link" v-model="SettingForm.Link">

        <h5>Key Words</h5>

        <div class="KeyWords-container">
          <input class="KeyWords-container_input" placeholder="Add Key Word" v-on:keyup.enter="addKey" v-model="keyword">
          <div v-for="(keyWord, key) in SettingForm.keyWords" :key="key">
                <button class="KeyWords-container_keyword">{{keyWord}}</button>
                <i class="KeyWords-container-icon fas fa-trash-alt"></i>
          </div>
        </div>

        <button class="SettingsCart-container_Save" @click="addSourse">Save</button>

      </div>
    </div>
  </div>
</template>

<script >
  import { mapActions, mapGetters } from 'vuex'

  export default {
    
    name: 'Settings',
    components: {
      Header: () => import('@/components/layouts/Header'),
      CartSettings: () => import('@/components/CartSettings'),
    },
    data: () => ({
        SettingForm: {
            cartName: 'NewCart',
            VK: false,
            RSS: true,
            Link: '',
            keyWords: []
        },
        keyword: ''
    }),
    mounted(){
      this.GetSources();
    },
    computed: {
      ...mapGetters({
          GetSourses: 'GetSourses'
      }),
    },
    methods: {
        ...mapActions({
            GetSources: 'GetSources',
            AddSource: 'AddSource',
            /*DeleteSource: 'DeleteSource',*/
        }),
        addKey(){
          this.SettingForm.keyWords.push(this.keyword)
        },
        addSourse(){
          this.AddSource(this.SettingForm)
        }
    },
    
  }
</script>

<style lang="scss">
    .Settings-container{
      padding: 2.6%;
      display: flex;
      flex-wrap: wrap;

      .SettingsCart-container{
        width: 20%;
        height: 56vh;
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
          
          .KeyWords-container_input{
            outline: none;
            margin: 1%;
            height: 4vh;
            width: 55%;
            border-radius: 15px;
            border: 1px solid #AFAFAF;
            background-color: #fafafa;
          }

          .KeyWords-container_input::-webkit-input-placeholder  {
            font-size: 15px;
            color: #AFAFAF;
            text-align: center;
          }
          
          .KeyWords-container_keyword{
            white-space: nowrap; /* Отменяем перенос текста */
            overflow: hidden;
            outline: none;
            margin: 1%;
            height: 4vh;
            width: 55%;
            border-radius: 15px;
            border: 1px solid #AFAFAF;
            font-size: 15px;
            color: #4883eb;
            background-color: #47C8FF;
            opacity: 0.48;
            margin-right: 30%;
          }

          .KeyWords-container-icon{
            color: #C0C0C0;
            cursor: pointer;
            margin-left: 6%;
            font-size: 16px;
          }

          .KeyWords-container-icon:hover{
            color: #dad4d4;
            transition: 0.5s;
          }

        }

        .SettingsCart-container_Save{
          margin-top: 2vh;
          height: 4.4vh;
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

        .SettingsCart-container_Delete{
            margin-top: 2vh;
            height: 4.4vh;;
            border: none;
            width: 26%;
            margin-left: 5%;
            border-radius: 2px;
            background-color: #F24B4B;
            opacity: 0.60;
            color: #EC1414;
        }

        .SettingsCart-container_Delete:hover{
            background-color: #f13838;
            transition: 0.5s;
        }

      }
    }
</style>