import dotenv from 'dotenv'

// ** Load Environment Variables **
dotenv.config({ path: '.env' })

export const config = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 5000,
  mongo: {
    url: process.env.DATABASE_URL ?? 'mongodb://localhost:27017/test'
  },
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS ?? 10,
  default_password: process.env.DEFAULT_PASS ?? '123456'
}
