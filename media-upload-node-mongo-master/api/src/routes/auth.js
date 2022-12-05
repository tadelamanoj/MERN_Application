const express = require("express")
const router=express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const upload = require("../middleware/upload");

//REGISTER

router.post("/register",upload.single("file"), async (req, res,next) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    if (req.file === undefined) return res.send("you must select a file.");
    //create new user
    
    const data={
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber:req.body.phoneNumber,
      profilePicture:req.file.filename||""
    }; 
    const userCollection = await User.getCollection()
    let addtoUsers =await userCollection.create(data)
    if(addtoUsers.nModified>0 || addtoUsers){
      res.status(200)
      res.send(addtoUsers)
      next()
    }else{
      const err =new Error("Please provide all fields")
      err.status(404)
      throw err
    }
  } catch (err) {
    res.status(500)
    res.send({message:{err}})
    next(err)
  }
});

//LOGIN
router.post("/login", async (req, res ,next) => {
  try {
    console.log(req.body)
    const userCollection = await User.getCollection()
    const user = await userCollection.findOne({ "email": req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")
    res.send(user)
    next()
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
