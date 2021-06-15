//import axios from 'axios';
import { getSources, deleteSource, addSource } from '../services/settings.service'

const mutations = {
    
    get_success(state, data, messange){
        
        console.log(data);
        state.sourses = data
        state.status = messange;
    },

    add_success(state, SettingForm, messange){
        
        state.sourses.push[SettingForm]
        state.status = messange;
    },

    setting_error(state, messange){
        console.log(messange);
        state.status = messange
    },
}

const actions = {

    async GetSources( { commit } ) {

        const { data , messange} = await getSources();
        commit('get_success', data, messange);

    },

    async DeleteSource( { commit }, cartName ) {

        const { data , messange } = await deleteSource(cartName);
        commit('setting_success', data, messange);

    },

    async AddSource( { commit }, SettingForm ) {

        console.log(SettingForm)

        const { messange } = await addSource(SettingForm);
        commit('add_success', SettingForm, messange);

    },

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