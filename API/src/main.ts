import 'reflect-metadata'
import { startServer } from './app'
import { connectDB } from './modules/repositories/app.mongoose-connect'
import mongoose from 'mongoose'
import { router } from './modules'

const app = startServer({ router })

connectDB()
mongoose.connection.once('open', () => {
  app.listen(app.get('port'), () => {
    console.log('App routes: ')

    router.stack.forEach(e => console.log(e.route.path))
    console.log(`Server running at http://localhost:${app.get('port')}/`)
  })
})
