import { Router } from 'express';

import * as userCtrl from '../controller/user.ctrl';

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:id', userCtrl.user)

router.post('/users/createUser', userCtrl.createUser)
router.post('/users/firsttime', userCtrl.firstTime)
router.post('/users/login', userCtrl.login)

router.delete('/users/:id', userCtrl.removeUser)

export default router
