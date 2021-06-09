import axios from 'axios'

const API_URL = 'http://localhost:3003';

export const request = async ({url, method, data}) => {

    try{
        const response = await axios[method](`${API_URL}/${url}`, data)
        return response.data;

    }catch(error){
        return error.response.data;
    }

}

