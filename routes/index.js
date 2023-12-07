const express=require('express');
const router=express.Router();

const {SignInUser} =require('../controllers/signIn')
const {SignUpUser} =require('../controllers/signUp')


router.post('/signup',SignUpUser)
router.post('/signin',SignInUser)

module.exports=router;