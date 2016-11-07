// 'use strict';
// import{
//   Router
// } from 'express';
// import * as controller from './employee.controller';
// import * as auth from '../../auth/auth.service';
//
// var router = Router();
//
// router.get('/', auth.hasRole('admin'),controller.index);
// router.get('/:id', auth.hasRole('admin'),controller.show);
// router.post('/', auth.hasRole('admin'), controller.create);
// router.put('/:id', auth.hasRole('admin'),controller.update);
// module.exports = router;

'use strict';

var express = require('express');
var controller = require('./employee.controller');

var router = express.Router();
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
module.exports = router;
