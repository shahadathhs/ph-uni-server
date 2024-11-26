import { Request, Response } from 'express'
import { config } from '../config/config'
import errorResponse from '../res/error.res'

const globalError = (
  err: Error & { statusCode?: number },
  req: Request,
  res: Response
) => {
  // * Log the error in development mode
  if (config.env === 'development') console.error(err)

  // * Send a generic error message if the error wasn't handled
  if (!res.headersSent) {
    const statusCode = err.statusCode ?? 500
    const message =
      config.env === 'development' ? err.message : 'Internal Server Error'
    errorResponse(res, { message } as Error, message, statusCode)
  }
}
export default globalError
