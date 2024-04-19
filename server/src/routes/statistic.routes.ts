import { Router } from 'express';

import * as statisticCtrl from '../controller/statistic.ctrl';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access'

const router = Router()

router.put('/statistics/:id', auth, statisticCtrl.selectCategory)
router.put('/statistics', auth, statisticCtrl.changeAllCategory)
router.put('/statistics/:id/games/:gid/correct', auth, statisticCtrl.correctCategory)
router.put('/statistics/:id/count', auth, statisticCtrl.countCategory)
router.put('/statistics/categories/:id', [auth, access], statisticCtrl.addStatistic)

export default router
