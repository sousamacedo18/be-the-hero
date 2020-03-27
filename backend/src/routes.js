const express = require('express');
const OngController = require('./controller/OngController');
const IncidentsController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/ongs',OngController.create);
routes.post('/incidents',IncidentsController.create);

routes.post('/sessions',SessionController.create);

routes.get('/profile',ProfileController.index);

routes.get('/ongs',OngController.index);
routes.get('/incidents',IncidentsController.index);

routes.delete('/incidents/:id',IncidentsController.delete);

module.exports= routes;