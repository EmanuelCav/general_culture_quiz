import { Router } from 'express';

import * as questionCtrl from '../controller/question.ctrl';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

import questionValid from '../middleware/validation/question/question.valid';

import { upload } from '../helper/image/multer';

const router = Router()

router.get('/questions', [auth, access], questionCtrl.allQuestions)
router.get('/questions/category/:id', [auth, access], questionCtrl.questionsCategory)

router.post('/questions/category/:id', [auth, access], upload.single("file"), questionValid, questionCtrl.createQuestion)

router.delete('/questions/:id', [auth, access], questionCtrl.removeQuestion)

router.put('/questions/:id', [auth, access], questionCtrl.updateQuestion)

router.patch('/questions/games/:id', auth, questionCtrl.questionsGame)
router.patch('/questions/:qid/games/:gid', auth, questionCtrl.generateQuestion)
router.patch('/questions/:id/options', [auth, access], questionCtrl.pushOption)

export default router