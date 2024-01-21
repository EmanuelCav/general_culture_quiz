import { Router } from 'express';

import * as userCtrl from '../controller/user.ctrl';

const router = Router()

router.post('/users/firsttime', userCtrl.firstTime)
router.post('/users/login', userCtrl.login)

export default router
