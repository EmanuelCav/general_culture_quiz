import { Router } from 'express';

import * as questionCtrl from '../controller/question.ctrl';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

const router = Router()

router.post('/questions/category/:id', [access, auth], questionCtrl.createQuestion)

router.patch('/questions/games/:id', auth, questionCtrl.questionsGame)
router.patch('/questions/:id/options', [access, auth], questionCtrl.pushOption)

export default router