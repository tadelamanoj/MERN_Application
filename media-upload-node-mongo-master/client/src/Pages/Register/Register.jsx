import { useRef, useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { URL_DETAILS } from "../../Endpoints/Apidetails";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const [password ,setPassword] = useState("");
  const [picture,setPicture] = useState()
  const [success, setSuccess] =useState()
  const [error ,setError] = useState()
  const navigate = useNavigate();
  const getFileInfo = (e) => {
    console.log(e.target.files[0],e.target.files[0].name);
    setPicture(e.target.files[0]);

  }

  const handleClick = async (e) => {
    e.preventDefault();
    const {url,method}=URL_DETAILS['register']
    const URL =url
    let form = new FormData();
    form.append('file', picture);
    form.append('username',username.current.value)
    form.append('email',email.current.value)
    form.append('password',password)
    try {
      fetch(URL ,{
        method,
        body:form
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        setSuccess("You have Registered successfully ")
        setTimeout(() => {
          navigate("/login")
          setSuccess(null)
        }, 3000);
      });
      
    } catch (err) {
      setError("User Name or Email already exists")
      console.log(err);
    }
    
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Create App</h3>
          <span className="loginDesc">
            Lets build something new.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              name={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <label htmlFor="upload">Upload Profile Picture</label>
            <TextField
              variant="outlined"
              placeholder="Upload Profile Photo"
              required
              id="upload"
              helperText={!picture?"choose profile picture":null}
              name={picture}
              className=""
              onClick={getFileInfo}
              onChange={getFileInfo}
              type="file"
              />
              {success && (<div className="text-success">{success}</div>)}
              {error && (<div className="text-danger">{error}</div>)}
            <button className="loginButton" type="submit">
              Sign Up
            </button>
          <button className="loginRegisterButton text-white" ><Link className="text-white" to="/login">Log into Account</Link></button>
          </form>
        </div>
      </div>
    </div>
  );
}
