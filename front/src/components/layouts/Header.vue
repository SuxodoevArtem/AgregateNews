<template>
    <nav>
        <div class="left-conteiner">
            <h5 class="left-conteiner_logo">NewsAgregate</h5>
            <div class="left-conteiner_links">
              <router-link to="/"><a>News</a></router-link>
              <router-link to="/Settings"><a>Settings</a></router-link>
              <router-link to="/Analistics"><a>Analistics</a></router-link>
              <router-link to="/Api"><a>API</a></router-link>
            </div>
        </div>
        <div class="right-conteiner">
            <p>
                <router-link to="/Login"><a>Log Out</a></router-link> \  <router-link to="/SignUp"><a>Sign Up</a></router-link>
            </p>
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

        box-shadow: 0px 0 5px 0 rgba(90, 171, 218, 0.95);
        background-color: $background-color_header;
        height: 60px;
        display: flex;
        color: $color_header;

        .left-conteiner{
            width: 50%;
            margin-left: 2%;

            .left-conteiner_logo{
              padding-top: 3px;
              padding-left: 10px;
              font-weight: 100;
            }

            .left-conteiner_links a{
                font-size: 14px;
                text-decoration: none;
                color: $color_header;
                padding-bottom: 2px;
                padding-right: 5px;
                padding-left: 5px;
                cursor: pointer;
            }

            .left-conteiner_links a:hover{
                border-bottom: 3px solid $color_header;
            }

        }

        .right-conteiner{
            width: 50%;
            display: flex;
            justify-content: flex-end;
            padding-top: 15px;
            padding-right: 35px;

            a{
                cursor:  pointer;
                text-decoration: none;
                color: $color_header;
            }
        }
    }

</style>