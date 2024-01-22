import { Router } from 'express';

import * as countryCtrl from '../controller/country.ctrl';

import countryValid from '../middleware/validation/user/country.valid';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

const router = Router()

router.get('/countries', countryCtrl.countries)

router.post('/countries', [auth, access], countryValid, countryCtrl.createCountry)

export default router
