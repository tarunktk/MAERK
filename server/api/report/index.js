'use strict';

import {Router} from 'express';
import * as controller from './report.controller';
import * as auth from '../../auth/auth.service';

var router = Router();

router.get('/',controller.index);
router.get('/:id', auth.hasRole('admin'), controller.show);
router.post('/', auth.hasRole('admin') , controller.create);
router.put('/:id', auth.hasRole('admin') , controller.update);
module.exports = router;
