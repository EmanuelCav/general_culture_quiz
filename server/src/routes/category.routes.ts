import { Router } from 'express';

import * as categoryCtrl from '../controller/category.ctrl';

import categoryValid from '../middleware/validation/question/category.valid';

const router = Router()

router.get('/categories', categoryCtrl.categories)

router.post('/categories', categoryValid, categoryCtrl.createCategory)

export default router
