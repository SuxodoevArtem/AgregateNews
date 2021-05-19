<template>
  <div class="SignUp-conteiner"> 
      <h2>Create Account</h2>
      <input class="SignUp-conteiner_input" placeholder="Email">
      <input class="SignUp-conteiner_input" placeholder="Password" type="password">
      <input class="SignUp-conteiner_input" placeholder="Password" type="password">
      <button class="SignUp-conteiner_button">SignUp</button>
  </div>
</template>

<script >

export default {
  
  name: 'SignUp',

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

        .SignUp-conteiner_button{
            display: block;
            margin: auto;
            margin-top: 30px;
            width: 100px;
            height: 45px;
            background-color: $background-color_SignUp-conteiner;
            border: 2px solid $h1-color;
            border-radius: 5px;
            color: $h1-color;
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
            width: 60%;
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
            width: 80%;
            height: 450px;
        }
    }

</style>