import axios from 'axios';
import { logout } from '../../../back/src/controllers/auth.controller';
import { loginRequest } from '../services/auth.service'

const mutations = {

    auth_error(state, messange){
        console.log(messange);
        state.status = 403
        state.authError = messange
    },

    auth_success(state, messange, token){
        console.log(messange);
        state.token = token
        state.status = messange;
        state.authError = ''
    },

    logout(state){
        state.status = 'Разлогинен'
        state.token = ''
    }
}

const actions = {

    async login( { commit }, loginForm ){

        const data = await loginRequest(loginForm);

        if(data){
            localStorage.setItem('token', data.token);
            axios.defaults.headers.common['Authorization'] = data.token;
            commit('auth_success', data.messange,  data.token);
        }

        if(data.error != null){
            commit('auth_error', data.error);
            localStorage.removeItem('token');
        }
    },

    async logout( { commit } ){
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    },
    
}

const getters = {
    isLoggedIn: state => !!state.token,
    authError: state => state.authError,
}

const state = () => ({
    status: '',
    token: localStorage.getItem('token') || '',
    authError: '',
})

export default {
    mutations,
    getters,
    actions,
    state,
}