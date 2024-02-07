import { Router } from 'express';

import * as statisticCtrl from '../controller/statistic.ctrl';

import auth from '../middleware/auth/auth';

const router = Router()

router.put('/statistics/:id', auth, statisticCtrl.selectCategory)
router.put('/statistics', auth, statisticCtrl.changeAllCategory)
router.put('/statistics/:id/correct', auth, statisticCtrl.correctCategory)
router.put('/statistics/:id/count', auth, statisticCtrl.countCategory)

export default router
