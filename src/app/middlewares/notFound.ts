import { Request, Response } from 'express'
import httpStatus from 'http-status'

/**
 * Catch-all route to handle all unhandled routes.
 * @function
 * @param {express.Request} req - Express request object.
 * @param {express.Response} res - Express response object.
 * @returns - The response object.
 */
const notFound = (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).send({
    status: 404,
    success: false,
    message: 'API Not Found or Invalid URL.'
  })
}

export default notFound
