const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    phoneNumber:{
      type: String,
      require:true,
      min:10,
      max:10,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  {collection:"users", timestamps: true }
);

const connectionOptions={
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
  }
let connection={}
const url= process.env.DB || "mongodb://127.0.0.1:27017/newmedia"
connection.getCollection = async ()=>{
  let database= await mongoose.connect(url,connectionOptions);
  let userModel= await database.model("users",UserSchema);
  return userModel;
}

// async function k(){
// const u=await connection.getCollection()
// console.log(u)
// const data = await u.find({})
// console.log(data)
// }
// k()
module.exports = connection;
