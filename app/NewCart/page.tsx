"use client"
//<Link href={`/Products/${item.id}`}>
  // <h1> link image </h1>
import { count, todo } from "@/app/data123";
import {useAtom} from "jotai"
import Link from "next/link";
import React from 'react'
import { useState } from "react"; 
import { atomWithStorage } from 'jotai/utils'
//import { useState } from "react";  return <Provider>{children}</Provider>;

//const darkModeAtom = atomWithStorage('darkMode', false)
//const darkModeAtom1 = atomWithStorage('darkMode1', 0)
const NewCart = () => {
/*
<button onClick={()=>setCount(myCount+1)}>counter: {myCount}</button>
  //setDarkMode1(myCount)
  <Link href={`/Products/user123`}>
   <h1> link image Pages</h1>
  
  </Link>
  <h1>home page</h1>
  <input 
  name="name"
  type="text" value={todonewvalue} placeholder="ghfghf" onChange={inputhandle}/>
  
  <button onClick={addfunction} className="ml-5">
    addition
  
  </button>


*/
const [myCount, setCount]=useAtom(count);
const [myTodo, setTodo]=useAtom(todo);
const [todonewvalue, setTodonewvalue]=useState("");
 //const [darkMode, setDarkMode] = useAtom(darkModeAtom)
 
 const inputhandle=(e:any)=>setTodonewvalue(e.target.value)

  const addfunction=()=>{
    setTodo([...myTodo,todonewvalue])
    setTodonewvalue("")
  }

  const deletefunction=(v:any)=>{
    const newArray=myTodo.filter(item=>item!==v);
    setTodo(newArray)
    //setTodo([...myTodo,todonewvalue])
    //setTodonewvalue("")
  }


 
  return (
  <div>
<h1>Calculation for Payment</h1>

{myTodo.map((v,i)=>{

return (
<li key={i} onClick={()=>deletefunction(v)}>

 {v}
 .....Click to del item
 </li> 
);
})}





  
  </div>
 
   
  );
}
export default NewCart;