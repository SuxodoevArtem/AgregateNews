<template>
  <div>
    <Header/>  
    <div class="News-container">
      <div class="NewsCart-conteiner"
          v-for="(news, key) in News"
          :key="key"
      >
      <CartNews
              :title ="news.title" 
              :link ="news.link" 
              :img ="news.img" 
              :date ="news.date" 
      />

      </div>
    </div>
  </div>
</template>

<script >
import { mapActions, mapGetters } from 'vuex'

export default {
  
  name: 'News',
  components: {
    Header: () => import('@/components/layouts/Header'),
    CartNews: () => import('@/components/CartNews'),
  },
  computed: {
      ...mapGetters({
          News: 'GetNews'
    }),
  },
  methods: {
      ...mapActions({
          GetNews: 'GetNews'
      }),
  },
  mounted(){
      this.GetNews();
  },
}
</script>

<style lang="scss">
  .News-container{
      padding: 2.6%;
      display: flex;
      flex-wrap: wrap;

      .NewsCart-conteiner{
        height: 50vh;
        width: 20%;
        background-color: #FAFAFA;
        margin-right: 2%;
      }
 
  }
</style>