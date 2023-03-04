const express=require('express')
const router=express.Router()
const SubCategoryController=require('../controllers/SubCategoryController')



router.get('/',SubCategoryController.getAllSubCategories)
router.post('/',SubCategoryController.createSubCategory)
router.get('/:id',SubCategoryController.getSubCategories)
router.put('/:id',SubCategoryController.updateSubCategory)
router.delete('/:id',SubCategoryController.deleteSubCategory)


module.exports=router