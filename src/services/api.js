import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '8ab818ba028a52e616b28b86b04bd25c',
        language: 'pt-BR',
        page: 1
    }
})


// '8ab818ba028a52e616b28b86b04bd25c'