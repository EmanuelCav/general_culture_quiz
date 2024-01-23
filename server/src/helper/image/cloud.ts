import cloudinary from 'cloudinary';

export const cloud = cloudinary.v2

import { cloud_name, api_key, api_secret } from '../../config/config';

cloud.config({
    cloud_name,
    api_key,
    api_secret
})