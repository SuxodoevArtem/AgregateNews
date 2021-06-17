<template>
    <a :href="link">
        <img :src="img">
        <div class="NewsCart-conteiner_text">
            <h6>{{title}}</h6>
        </div>
        <small>{{date}}</small>
    </a>
</template>
<script>
    export default {
        name: 'CartNews',
        props: { 
            title: { type: String, default: "", },
            link: { type: String, default: "",  },
            img: { type: String, default: "",  },
            date: { type: String, default: "", },
        }  
    }

</script>
<style lang="scss">
    .NewsCart-conteiner{
        a{
            text-decoration: none;
            color: #000000;
            img{
                height: 25vh;
                width: 100%;
                border-radius: 3px;
                box-shadow: 0px 0 5px 0 rgba(192, 194, 196, 0.95);
            }
            .NewsCart-conteiner_text{
                height: 20vh;
                padding: 8%;
                h6{
                    
                }
            }
            small{
                margin-left: 70%;
            }
        }

     }
</style>