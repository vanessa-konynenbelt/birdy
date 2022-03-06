import { Router } from 'express'
import * as adviceCtrl from '../controllers/advice.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, adviceCtrl.new) //new advice form
router.get('/', adviceCtrl.index)  //read
router.get("/:id/edit", adviceCtrl.edit) //edit->show form

router.post('/', adviceCtrl.create) //create new advice

router.put('/:id', adviceCtrl.update) //edit->save update

router.delete('/:id', adviceCtrl.delete) //delete

export {
  router
}
