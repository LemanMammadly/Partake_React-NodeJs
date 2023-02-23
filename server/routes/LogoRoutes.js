const express=require('express')
const router=express.Router()
const LogoController=require('../controllers/LogoController')



router.get('/',LogoController.getAllLogos)
router.post('/',LogoController.createLogo)
router.get('/:id',LogoController.getLogo)
router.put('/:id',LogoController.updateLogo)
router.delete('/:id',LogoController.deleteLogo)


module.exports=router