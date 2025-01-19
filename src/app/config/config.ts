import dotenv from 'dotenv'
import path from 'path'

// ** Load Environment Variables **
dotenv.config({ path: path.join((process.cwd(), '.env')) })

export const config = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 5000,
  database_url: process.env.DATABASE_URL ?? 'mongodb://localhost:27017/test',
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS ?? 10,
  default_password: process.env.DEFAULT_PASS ?? '123456',
  jwt_access_secret: process.env.JWT_ACCESS_SECRET ?? '123456',
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET ?? '123456',
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN ?? '1d',
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN ?? '1d',
  reset_pass_ui_link:
    process.env.RESET_PASS_UI_LINK ?? 'http://localhost:3000/reset-password',
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME ?? '',
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY ?? '',
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET ?? '',
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD ?? '123456'
}
