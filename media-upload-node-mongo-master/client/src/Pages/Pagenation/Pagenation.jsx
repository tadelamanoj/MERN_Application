import React from 'react'
import { useState } from 'react';

const Pagenation=( props )=> {
  const {data , pageHandler}=props
    // console.log({...props},data)
    let pageNumber= []
    for(let i = 1 ; i < Math.ceil(data.length/10)+1;i++){
      pageNumber.push(i)
    }
  const [curPage,setCurPage]= useState(1)
  const currentPage=(page)=>{
      setCurPage(page)
  }
  return (
    <div className='text-center'>
        {pageNumber.map((page,index)=>
          <div className={`btn  mx-1 ${curPage===index+1 ? "btn-primary":"btn-info" } `}
              onClick={()=>{pageHandler(page);currentPage(page)}}>{page}</div>)}
    </div>
  )
}

export default Pagenation