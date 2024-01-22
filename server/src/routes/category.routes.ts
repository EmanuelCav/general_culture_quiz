import { Router } from 'express';

import * as categoryCtrl from '../controller/category.ctrl';

import categoryValid from '../middleware/validation/question/category.valid';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

const router = Router()

router.get('/categories', [auth, access], categoryCtrl.categories)

router.post('/categories', [auth, access], categoryValid, categoryCtrl.createCategory)

export default router
