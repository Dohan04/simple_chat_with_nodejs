const express = require("express")
const router = express.Router()
const bodyparser = require("body-parser")
const passport = require("passport");
var accountDB = require('../model/account')
//variable for username



router.get('/',(req,res) => {
    res.render('login',{error:""})

})

router.get('/login',(req,res)=>{
    res.render('login',{error:"username or password is incorrect"})
})

router.get("/signup", (req, res)=>{
    res.render("signup",{error:""})
})

router.post("/signup", (req, res) => { 
    accountDB.register(
      new accountDB({
        username: req.body.username,
    }),
    req.body.password,   
     function(err, user) {
        if (err) {
          
          console.log(err);

          return res.render("signup",{error:"UserName is Already registerd! try another username"});
        } else {
          passport.authenticate("local")(req, res, function () {
            res.redirect("/");
          });
        }
      }
    );
  });
  

router.get("/chat",isLoggedIn,(req,res)=>{
         res.render('chat');
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

// 
router.post("/login",
     passport.authenticate("local", {
      successRedirect: "/index",
      failureRedirect: "/login",
    }),   
    function (req, res) {
    console.log("/login ")
    }
  );

router.get('/index',isLoggedIn,(req,res) => {
    let username= req.user.username
    res.render('index',{name_of_user: username})
  })  

  //middleware
  
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/login");
  }


module.exports = router