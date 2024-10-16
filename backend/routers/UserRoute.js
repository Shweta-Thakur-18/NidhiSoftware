const express=require("express")
const {registerUser,authUser,fingerprintLogin,verifyOtp}=require("../controllers/UserController")

const router=express.Router()

router.post("/register",registerUser)
router.post("/login",authUser)
router.post('/api/user//fingerprint-login', fingerprintLogin)
router.post('/verify-otp', verifyOtp);



module.exports=router;