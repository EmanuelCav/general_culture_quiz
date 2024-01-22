import { Router } from 'express';

import * as roleCtrl from '../controller/role.ctrl';

import roleValid from '../middleware/validation/user/role.valid';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

const router = Router()

router.get('/roles', [auth, access], roleCtrl.roles)

router.post('/roles', [auth, access], roleValid, roleCtrl.createRole)

export default router
