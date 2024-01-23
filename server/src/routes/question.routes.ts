import { Router } from 'express';

import * as questionCtrl from '../controller/question.ctrl';

import auth from '../middleware/auth/auth';

const router = Router()

router.patch('/games/:gid/categories/:cid', auth, questionCtrl.questionsGame)

export default router