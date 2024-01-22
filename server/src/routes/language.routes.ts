import { Router } from 'express';

import * as languageCtrl from '../controller/language.ctrl';

import languageValid from '../middleware/validation/user/language.valid';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

const router = Router()

router.get('/languages', auth, languageCtrl.languages)

router.post('/languages', [auth, access], languageValid, languageCtrl.createLanguages)

export default router
