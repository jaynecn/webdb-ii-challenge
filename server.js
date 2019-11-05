const express = require ('express');

const CarRouter = require('./cars/car-router');

const server = express();

// plug in middleware
server.use(express.json());
server.use('/api/cars', CarRouter);

module.exports = server;