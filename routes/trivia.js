import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivia.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', triviaCtrl.new)
router.post('/', isLoggedIn, triviaCtrl.create)

router.get('/', triviaCtrl.index)


export {
  router
}
