import { Router } from 'express'
import * as adviceCtrl from '../controllers/advice.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', adviceCtrl.new) //new
router.get('/', adviceCtrl.index)  //read
router.get("/:id/edit", adviceCtrl.edit) //edit->show form

router.post('/', isLoggedIn, adviceCtrl.create) //new

router.put('/:id', adviceCtrl.update) //edit->save update

router.delete('/:id', adviceCtrl.delete) //delete

export {
  router
}
