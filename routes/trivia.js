import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivia.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', triviaCtrl.new) //show new form
router.get('/', triviaCtrl.index) //read all 

router.post('/', isLoggedIn, triviaCtrl.create) //create new

router.get('/home', function (req, res) { //home 
  res.render('trivia/home', { title: 'Home Trivia Page', user: req.user ? req.user : null })
})

router.get('/play', function (req, res) { //play
  res.render('trivia/play', { title: 'Play Trivia Game', user: req.user ? req.user : null })
})

export {
  router
}
