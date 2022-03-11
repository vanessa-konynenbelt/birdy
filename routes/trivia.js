import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivia.js'
import { Trivia } from '../models/trivia.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, triviaCtrl.new) //show new form
router.get('/', triviaCtrl.index) //read all 

router.post('/', isLoggedIn, triviaCtrl.create) //create new

router.get('/home', function (req, res) { //home 
  res.render('trivia/home', { title: 'Home Trivia Page', user: req.user ? req.user : null })
})

router.get('/play/:id', triviaCtrl.play)  


export {
  router
}
