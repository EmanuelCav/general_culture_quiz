import { Router } from 'express';

import * as gameCtrl from '../controller/game.ctrl';

import auth from '../middleware/auth/auth';

const router = Router()

router.get('/games/users', auth, gameCtrl.games)
router.get('/games/categories/:id', auth, gameCtrl.gamesCategory)
router.post('/games/categories/:id', auth, gameCtrl.generateGame)

export default router