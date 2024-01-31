import { Router } from 'express';

import * as userCtrl from '../controller/user.ctrl';

import loginValid from '../middleware/validation/user/login.valid';
import createValid from '../middleware/validation/user/create.valid';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

const router = Router()

router.get('/users', auth, userCtrl.users)
router.get('/users/:id', userCtrl.user)

router.post('/users/createUser', createValid, userCtrl.createUser)
router.post('/users/firsttime', userCtrl.firstTime)
router.post('/users/:id/login', userCtrl.login)
router.post('/users/login', loginValid, userCtrl.authLogin)

router.delete('/users/:id', [auth, access], userCtrl.removeUser)

export default router
