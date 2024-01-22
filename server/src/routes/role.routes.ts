import { Router } from 'express';

import * as roleCtrl from '../controller/role.ctrl';

import roleValid from '../middleware/validation/user/role.valid';

const router = Router()

router.get('/roles', roleCtrl.roles)

router.post('/roles', roleValid, roleCtrl.createRole)

export default router
