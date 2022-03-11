import { Router } from 'express'
import * as questionsCtrl from '../controllers/questions.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, questionsCtrl.new) //new
router.get('/', questionsCtrl.index) //read
router.get("/:id/edit", isLoggedIn, questionsCtrl.edit) //edit->show form

router.post('/', questionsCtrl.create) //new

router.put('/:id', questionsCtrl.update) //edit->save update

router.delete('/:id', questionsCtrl.delete) //delete

// router.get('/index', function (req, res) { //home
//   res.render('questions/index', { title: 'All Questions Page', user: req.user ? req.user : null })
// })

router.get('/play', function (req, res) { //play
  res.render('questions/play', { title: 'Play Question Game', user: req.user ? req.user : null })
})


export {
  router
}
