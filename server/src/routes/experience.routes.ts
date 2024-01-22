import { Router } from 'express';

import * as experienceCtrl from '../controller/experience.ctrl';

import auth from '../middleware/auth/auth';

const router = Router()

router.put('/experiences', auth, experienceCtrl.createExperience)

export default router
