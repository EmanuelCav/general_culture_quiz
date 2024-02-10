import { Router } from 'express';

import * as userCtrl from '../controller/user.ctrl';

import loginValid from '../middleware/validation/user/login.valid';
import createValid from '../middleware/validation/user/create.valid';
import registerValid from '../middleware/validation/user/register.valid'

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

const router = Router()

router.get('/users/:date', auth, userCtrl.users)
router.get('/users/profile/:id', auth, userCtrl.user)
router.get('/users/country/:date', auth, userCtrl.countryRank)

router.post('/users/createUser', [auth, access], createValid, userCtrl.createUser)
router.post('/users/firsttime', userCtrl.firstTime)
router.post('/users/:id/login', userCtrl.login)
router.post('/users/login', loginValid, userCtrl.authLogin)

router.delete('/users/:id', [auth, access], userCtrl.removeUser)

router.put('/users/options', auth, userCtrl.updateOptions)
router.put('/users/image', auth, userCtrl.changeIsImage)
router.put('/users/sounds', auth, userCtrl.changeIsSound)
router.put('/users/register', auth, registerValid, userCtrl.registerUser)
router.put('/users/experience', auth, userCtrl.updateExperience)
router.put('/users/helps/:type', auth, userCtrl.updateHelps)

export default router
