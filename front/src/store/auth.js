import { login } from '../services/auth.service'

const mutations = {
    auth_error(state, err){
        state.status = err
    },
}

const actions = {

    async login( { commit }, loginForm ){

        try{
            console.log(...loginForm);
            const data = await login(...loginForm);
            console.log(data);
            
        }catch(err){
       
            commit('auth_error', err);
            localStorage.removeItem('token');
        }

    }
}

const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
}

const state = () => ({
    status: '',
    token: localStorage.getItem('token') || '',
    authError: null,
})


export default {
    mutations,
    getters,
    actions,
    state,
}