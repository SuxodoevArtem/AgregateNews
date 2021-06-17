<template>
  <div>
    <Header/>  
    <div class="Api-container">
        <h3>API key</h3>
        <div class="key-container">
            <input class="key-container_input" type="text">
            <button class="key-container_btn"><i class="fas fa-redo-alt"></i></button>
        </div>

        <h5>Api Call</h5>
        <div class="Api-container_call">
             <p>api/news/<smal>{API key}</smal></p>
        </div>
        <div class="Api-container_call">
            <p>api/news/<smal>{API key}</smal>?date=<smal>{date}</smal></p>
        </div>
    </div>
  </div>
</template>

<script >

export default {
  
  name: 'Api',
  components: {
    Header: () => import('@/components/layouts/Header')
  }
}
</script>

<style lang="scss">
    .Api-container{
        margin: 3%;
        height: 70vh;

        .key-container{ 
            
            margin-top: 4vh;
            display: flex;
            .key-container_input {
                font-size: 23px;
                color: rgb(115, 188, 248);
                outline: none;
                height: 5vh;
                width: 80%;
                border: 2px solid #e2ecef;
                border-radius: 3px;
            }
            .key-container_btn {
                border-radius: 4px;
                border: 2px solid #e2ecef;
                outline: none;
                margin-left: 1%;
                background-color: rgb(167, 202, 241);
                color: #ffffff;
                height: 5vh;
                width: 40px;
            }

            .key-container_btn:hover{
                background-color: #b5daeb;
                color: rgb(167, 202, 241);
                transition: all 0.5s;
            }
        }

        h5{
            margin-top: 5vh;
        }

        .Api-container_call{
            font-size: 24px;
            display: flex;
            margin-top:10px;
            width: 80%;
            height: 10vh;
            background-color: rgb(255, 255, 255);

            p{
                padding: 1.5%;

                smal{
                    color: rgb(115, 188, 248);
                }
            }
        }


    }
</style>