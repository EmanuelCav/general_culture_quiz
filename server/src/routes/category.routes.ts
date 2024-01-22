import { Router } from 'express';

import * as categoryCtrl from '../controller/category.ctrl';

const router = Router()

router.get('/categories', categoryCtrl.categories)

router.post('/categories', categoryCtrl.createCategory)

export default router
