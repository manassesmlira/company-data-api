const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v2',
    params: {
        api_key: '8d132847bc474081882bd2aac7df150f',
    }
});


module.exports = instanciaAxios;