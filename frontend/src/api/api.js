import axios from 'axios';

const URL = 'https://hodlinfo-clone-devang.onrender.com';

export const getData = async () =>{
    try {
        return await axios.get(`${URL}/`);
    } catch (error) {
        console.log("Error while calling getData api",error)
    }
}