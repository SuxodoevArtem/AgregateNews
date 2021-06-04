import axios from 'axios'

const API_URL = 'http://localhost:3003';

export const request = async ({url, method, data}) => {

    try{
        const response = await axios[method](`${API_URL}/${url}`, data)
        
        //console.log(response.data)
        return response.data;

    }catch(error){
        //console.log(error.response.status);
        //console.log(error.response.data);
        return error.response.data;
    }

}

