/* eslint-disable no-console */
import express, { Router } from 'express'
import formData from 'express-form-data'
import morgan from 'morgan'
// import httpErros from 'http-errors'

import * as dotenv from 'dotenv'
dotenv.config()

export const startServer = ({ router }: { router: Router }) => {
  const app = express()
  const origins = process.env.ORIGINS?.split(' ') || 'http://localhost:3000'

  console.log('Origins: ', origins)

  app
    .set('port', process.env.PORT || 5000)
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(formData.parse())
    .use((req, res, next) => {
      // res.header('Access-Control-Allow-Origin', '*')
      // res.header('Access-Control-Allow-Origin', origins)
      const origin = String(req.headers.origin)

      if (origins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin)
      }

      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
      res.header('Access-Control-Allow-Credentials', String(true))

      return next()
    })
    .use(router)
    .use(morgan('dev'))
  // .use((req, res, next) => next(httpErros(404)))
  // .use((err: { status: any }, req: any, res: { status: (arg0: any) => void; redirect: (arg0: string) => void }, next: any) => {
  //   console.log('Ruta no encontrada: ', String(err))

  //   res.status(err.status || 500)
  //   return res.redirect('/')
  // })

  return app
}
