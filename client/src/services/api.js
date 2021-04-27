import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: 'http://172.16.2.224:8080',
    headers: {
        'Accept': 'application/json'
    }  
})