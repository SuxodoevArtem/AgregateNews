<template>
  <div class="SignUp-conteiner"> 
      <h2>Create Account</h2>
      <input class="SignUp-conteiner_input" placeholder="Email" v-model="signUpForm.email">
      <input class="SignUp-conteiner_input" placeholder="Password" type="password" v-model="signUpForm.password" v-bind:class="{Dangeros: isActive}">
      <input class="SignUp-conteiner_input" placeholder="Password" type="password" v-model="signUpForm.passwordRepeat" v-bind:class="{Dangeros: isActive}">
        <div class="btn-container"> 
            <button class="SignUp-conteiner_button" @click="SignUp">SignUp</button>
            <button class="SignUp-conteiner_button">
                <router-link to="/Login">
                    <a>Login</a>
                </router-link>
            </button>
        </div>
        <h5 class="SignUp-conteiner_messange" > {{messange}}</h5>
  </div>
</template>

<script >

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'SignUp',
    data: () => ({
        signUpForm: {
            email: " ",
            password: " ",
            passwordRepeat: " ",
        },
        isActive: false,
    }),
    computed: {
        ...mapGetters({
            messange: 'authError',
        }),
        
    },
    methods: {
        ...mapActions({
            signUp: 'signUp',
        }),
        async SignUp(){
            console.log(this.signUpForm.passwordRepeat + ' ' + this.signUpForm.password)
            if(this.signUpForm.passwordRepeat == this.signUpForm.password){
                await this.signUp(this.signUpForm);
            }else{
                this.isActive = true;
            }
        }
    },
}

</script>

<style lang="scss">
    @import '/public/colors.scss';

    .SignUp-conteiner{
        margin: auto;
        margin-top: 10vh;
        height: 540px;
        background-color: $background-color_SignUp-conteiner;
        border-radius: 4px;
        width: 30%;
        box-shadow: 1px 0 2px 0.3 rgba(3, 3, 3, 0.95);

        h2{
            color: $h1-color;
            padding-top: 55px;
            text-align: center;
        }   

        .SignUp-conteiner_input{
            outline: none;
            display: block;
            margin: auto;
            margin-top: 22px;
            height: 38px;
            width: 80%;
            border: 2px solid #e2ecef;
            border-radius: 3px;
            background-color: #f7f8f9;
            color: #7e8586;
            font-size: 12px;
            padding-left: 10px;
        }

        .Dangeros{
            border-color:  #f77676;
        }
        

        .btn-container{

            display: flex;
            margin: 30px;
            padding: 0;
            .SignUp-conteiner_button{
                display: block;
                margin: auto;
            
                width: 42%;
                height: 45px;
                background-color: $background-color_SignUp-conteiner;
                border: 2px solid $h1-color;
                border-radius: 5px;
                color: $h1-color;
            }

            .SignUp-conteiner_button a{
                color: $h1-color;
                text-decoration: none;
            }

            .SignUp-conteiner_button:hover{
                background-color: #79ABFF;
                color: #ffffff;
                transition: 0.2s all;

                a{
                    color: #ffffff;
                    transition: 0.2s all;
                }
            }
        }

        
        .SignUp-conteiner_messange {
            color: $color_err;
            padding-top: 25px;
            padding-left: 100px;
            padding-right: 100px;
            text-align: center;
        }
    }

    @media (max-width: 1600px){
        .SignUp-conteiner{
            width: 30%;
        }
    }

    @media (max-width: 1400px){
        .SignUp-conteiner{
            width: 40%;
        }
    }

    @media (max-width: 990px){
        .SignUp-conteiner{
            width: 50%;
            height: 520px;
        }
    }

    @media (max-width: 760px){
        .SignUp-conteiner{
            width: 70%;
            height: 500px;
        }
    }

    @media (max-width: 568px){
        .SignUp-conteiner{
            width: 90%;
            height: 480px;
        }
    }

</style>