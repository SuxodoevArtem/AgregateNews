import { getNews } from '../services/news.service'

const mutations = {
    get_success(state, data, messange){

        console.log(data);
        state.news = data
        state.status = messange;

    },
}

const actions = {

    async GetNews( { commit }){
        const { data , messange } = await getNews();
        commit('get_success', data, messange);
    },

}

const getters = {
    GetNews: state => state.news,
}

const state = () => ({
    status: '',
    news: []
})

export default {
    mutations,
    getters,
    actions,
    state,
}