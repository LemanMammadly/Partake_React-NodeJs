const express=require('express')
const router=express.Router()
const StatusController=require('../controllers/StatusController')



router.get('/',StatusController.getAllStatus)
router.post('/',StatusController.createStatus)
router.get('/:id',StatusController.getStatus)
router.put('/:id',StatusController.updateStatus)
router.delete('/:id',StatusController.deleteStatus)


module.exports=router