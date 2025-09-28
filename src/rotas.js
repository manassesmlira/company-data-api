const express = require('express');
const { detalharEmpresas } = require('./controladores/empresas');
const rotas = express()

rotas.get('/empresas', detalharEmpresas);

module.exports = rotas; 