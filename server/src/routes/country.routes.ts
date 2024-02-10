import { Router } from 'express';

import * as countryCtrl from '../controller/country.ctrl';

import countryValid from '../middleware/validation/user/country.valid';

import auth from '../middleware/auth/auth';
import access from '../middleware/auth/access';

const router = Router()

router.get('/countries', auth, countryCtrl.countries)

router.post('/countries', [auth, access], countryValid, countryCtrl.createCountry)

router.delete('/countries/:id', [auth, access], countryCtrl.removeCountry)

router.put('/countries/:id', [auth, access], countryCtrl.updateCountry)

export default router
