import axios from 'axios';

const instance  = axios.create({
    baseURL:'https://react-burger-order-fc722.firebaseio.com/'
})

export default instance