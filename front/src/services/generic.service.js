import axios from 'axios'

const API_URL = 'http://localhost:3003';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';

export const request = async ({url, method, data}) => {

    try{
        const response = await axios[method](`${API_URL}/${url}`, data)
        return response.data;

    }catch(error){
        return error.response.data;
    }

}

