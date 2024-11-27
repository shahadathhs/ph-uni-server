import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import notFound from './app/middlewares/notFound'
import router from './app/routes/routes'
import globalError from './app/middlewares/globalError'
import apiInfoLogger from './app/middlewares/apiInfoLogger'

// ** express app **
const app: Application = express()

// ** parse request body **
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ** cors **
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:4173',
      'http://localhost:4174'
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
  })
)

// ** API Info Logger **
app.use(apiInfoLogger)

// ** Default Routes **
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to PH University System Server!')
})
app.get('/api/v1', (req: Request, res: Response) => {
  res.send('This is the root API route!')
})

// ** application routes **
app.use('/api/v1', router)

// ** API Endpoint Not Found **
app.use(notFound)

// ** Error Handler **
app.use(globalError)

export default app
