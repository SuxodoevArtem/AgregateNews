//import axios from 'axios';
//import { getSources } from '../services/settings.service'

const mutations = {
    
    setting_success(state, data, messange){
        console.log(data);

        state.sourses = data
        state.status = messange;
    },

    setting_error(state, messange){
        console.log(messange);
        state.status = messange
    },
}

const actions = {
    async GetSources( { commit } ) {

        const messange = 'success'
        const data = [
            {
                cartName: 'Cart1',
                VK: false,
                RSS: false,
                Link: '/16y8y2sdds11r/nznsdd/ndex.com',
                keyWords: ['PGATU','Студенты']
            },
            {
                cartName: 'Cart2',
                VK: false,
                RSS: false,
                Link: '/1',
                keyWords: ['KeyWord','KeyWord','Игры']
            },
        ]
            
        commit('setting_success', data, messange);
    }
}

const getters = {
    GetSourses: state => state.sourses,
}

const state = () => ({
    status: '',
    sourses: []
})

export default {
    mutations,
    getters,
    actions,
    state,
}