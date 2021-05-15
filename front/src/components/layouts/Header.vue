<template>
    <nav>
        <div class="right-conteiner">
            <h5 class="right-conteiner_logo">NewsAgregate</h5>
            <div class="right-conteiner_links">
               <a>News</a>
               <a>Settings</a>
               <a>Analistics</a>
            </div>
        </div>
        <div class="left-conteiner">
            
        </div>
    </nav>
</template>
<script>
    export default ({
        name: 'Header',
    })
</script>
<style lang="scss">
    @import '/public/colors.scss';

    nav{

        box-shadow: 0 0 3px 0 rgba(192, 189, 189, 0.95);
        background-color: $background-color_header;
        height: 60px;
        display: flex;
        color: $color_header;

        .right-conteiner{
            width: 50%;
            margin-left: 2%;

            .right-conteiner_logo{
              
            }

            .right-conteiner_links{
                
            }

            .right-conteiner_links a{
                font-size: 14px;
                padding-bottom: 5px;
                padding-right: 10px;
                padding-left: 10px;
                border-bottom: 2px solid #47C8FF;
            }

        }

        .left-conteiner{
            display: flex;
            width: 50%;
        }
    }

</style>