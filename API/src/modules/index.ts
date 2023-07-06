import { Router } from 'express'
import { characterController } from './character/character.controller'

const router = Router()
const api = '/api'

characterController({ api, router })

export { router }
