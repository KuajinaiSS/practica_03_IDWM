import axios from 'axios';

const BASE_URL = 'http://192.168.4.25:8000/api';



const agent = {
    getData: async () => {
        try {
            const response = await axios.get(BASE_URL + '/profile');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    
};

export default agent;
