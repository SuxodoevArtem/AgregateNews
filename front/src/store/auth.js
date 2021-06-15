import axios from 'axios';
import { loginRequest, signUpRequest } from '../services/auth.service'
import  router  from '../router/index'

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

    auth_logout(state){
        state.status = 'Разлогинен'
        state.token = ''
    }
}

const actions = {

    async login( { commit }, loginForm ){

        const data = await loginRequest(loginForm);

        if(data){
            localStorage.setItem('token', data.token);
            console.log(localStorage.getItem('token'));
            axios.defaults.headers.common['Authorization'] = data.token;
            commit('auth_success', data.messange,  data.token);
        }

        if(data.error != null){
            commit('auth_error', data.error);
            localStorage.removeItem('token');
        }
    },

    async signUp( {commit}, { email, password } ){
        console.log(email + " " + password)
        const data = await signUpRequest({email, password});
        console.log(data)

        if(data.error != null){
            commit('auth_error', data.error);
        }else{ 
            router.push('/login');
        }
    

    },

    async logout( { commit } ){
        commit('auth_logout');
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