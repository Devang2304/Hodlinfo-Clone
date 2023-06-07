import axios from 'axios';

const URL = 'http://localhost:5000';

export const getData = async () =>{
    try {
        return await axios.get(`${URL}/`);
    } catch (error) {
        console.log("Error while calling getData api",error);
    }
}