import { Router } from 'express'
import * as questionsCtrl from '../controllers/questions.js'

const router = Router()

router.get('/new', questionsCtrl.new) //new
router.get('/', questionsCtrl.index) //read
router.get("/:id/edit", questionsCtrl.edit) //edit->show form

router.post('/', questionsCtrl.create) //new

router.put('/:id', questionsCtrl.update) //edit->save update

router.delete('/:id', questionsCtrl.delete) //delete

export {
  router
}
