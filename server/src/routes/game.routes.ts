import { Router } from 'express';

import * as gameCtrl from '../controller/game.ctrl';

import auth from '../middleware/auth/auth';

const router = Router()

router.get('/games/users', auth, gameCtrl.games)
router.post('/games', auth, gameCtrl.generateGame)

export default router