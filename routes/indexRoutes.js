const express=require("express");
const router= express.Router();
const {
    homepage,
    signup,
    signin,
    signout,
    
    createbook,
    books,
    deletebooks,
    currentuser,
    updatebooks,
}= require('../Controller/indexController');
const { isLoggedIn } = require("../utils/auth");

router.get("/", homepage )

 

//post /signup - createUser
router.post("/signup", signup)

//post /signin - loginUser
router.post("/signin", signin)

//get /signout - logoutUser
router.get("/signout",isLoggedIn, signout)
 
// get loaduser 
router.post("/loaduser",isLoggedIn, currentuser);


module.exports = router;