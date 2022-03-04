import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivia.js'


const router = Router()

router.get('/', triviaCtrl.index)

export {
  router
}
