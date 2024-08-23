import axios from 'axios';

const userData = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .catch(error => {
            console.error(error);
            return [];
        });
};

export default userData;
