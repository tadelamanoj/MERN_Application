const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");


router.get("/", async (req, res,next) => {
    const username = req.query.username;
    try {
      const user = await User.getCollection()
      const data = await user.findOne({ username: username });
      if(data){
        const { password, updatedAt, ...other } = data._doc;
        res.status=200
        res.send(other)
      }else{
        const err=new Error("No details Found")
        err.status=500
        throw err
      }
    } catch (err) {
      res.send({messaage:"No details found",status:err.status})
    }
  });


module.exports = router;
