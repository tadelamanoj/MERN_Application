import "./login.css";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { URL_DETAILS } from "../../Endpoints/Apidetails";
export default function LoginFormik() {
  const [email,setEmail] = useState("");
  const [password,setPassword ]= useState("");
  const [success,setSuccess] =useState(null);
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  let isFetching =false



  const handleClick = (e) => {
    e.preventDefault();
    const {url,method}=URL_DETAILS['login']
    const data = {
      email:String( email),
      password:String(password)
    } 
    fetch(url,{
      method,
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),
    })
    .then(res=>{
      isFetching=true
      console.log("ress",res)
      if(res.ok){ 
        return res.json()}})
    .then(data=>{
      if(data){
        localStorage.setItem('email',data.email)
        localStorage.setItem('user',data.username)
        setSuccess("Login Success")
        setTimeout(() => {
          window.location.href="/"
        }, 1000);
      }
    }).catch((err)=>{
      setError("Invalid user Credentials")
    })
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Create App</h3>
          <span className="loginDesc">
            Never settle
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" method="POST" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              name="email"
              className="loginInput"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="5"
              name="password"
              className="loginInput"
              onChange={(e)=>setPassword(e.target.value)}
            />
            {success && (<div className="text-success">{success}</div>)}
            {error && (<div className="text-danger">{error}</div>)}
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={()=>navigate('/register')}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
