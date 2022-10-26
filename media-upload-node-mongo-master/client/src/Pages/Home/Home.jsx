import { Container } from '@material-ui/core';
import React from 'react'
import { useEffect, useState } from 'react';
import { URL_DETAILS } from '../../Endpoints/Apidetails';
import { Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import './home.css'
import Header from '../Header/header'

function Home() {
  const [data,setData] = useState(null)
  const {url,method}=URL_DETAILS['getDetails']
  const URL_ =url+"?username="+localStorage.getItem('user')
  const [img,setImg]= useState()
  

  useEffect( ()=>{
    const {url,method}=URL_DETAILS['getPicture']
    const imageurl=`${url}/${data?data.profilePicture:null}`
    fetch(imageurl,{
      method,
    })
    .then(res=>{
        return res.arrayBuffer()
    })
    .then(data=>{
      const blob = new Blob([data])
      const url =URL.createObjectURL(blob)
      setImg(url)
    })
    .catch(err=>console.log(err))
  },[data])

  useEffect(()=>{
    
    fetch(URL_,{
      method,
    })
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      })
    .catch(err=>console.log(err))
  },[])

  return (
    <React.Fragment>
      <Header/>
      <Container className='d-flex flex-auto '>
        <Image
        className="avat"
        src={img}
        alt="no-image"
        roundedCircle
        />
        <div className="home_card col-8 mt-3">
            <h1 className='text-success'>Welcome {data? data.username:null} to your Profile..!</h1>
            <h1 className="home_header" >Hi There.!</h1>
            <p id="intro">I'm {data?data.username:"user"},</p>
            <p id="intro">A Full-Stack Engineer at Infosys based in Bangalore. </p> 
        </div>
        
      </Container>
    </React.Fragment>
  )
}

export default Home
        