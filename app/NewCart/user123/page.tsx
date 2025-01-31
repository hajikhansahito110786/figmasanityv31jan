"use client"
import { count, todo } from "@/app/data123";
import {useAtom} from "jotai"
import Link from "next/link";
import React from 'react'
//import { useState } from "react";

import { atomWithStorage } from 'jotai/utils'


const User123 = (props:any) => {
  console.log(props)
  const [myTodo, setTodo]=useAtom(todo);
const [myCount, setCount]=useAtom(count);
// const [darkMode, setDarkMode] = useAtom(darkModeAtom)
//const darkModeAtom1 = atomWithStorage('darkMode1', 0)
// const [darkMode1, setDarkMode1] = useAtom(darkModeAtom1)
  return (
  <div>
<h1>home page</h1>
  <button onClick={()=>setCount(myCount+1)}>counter: {myCount}</button>
  
  <Link href={`/Products/pages`}>
   <h1> link image User123 </h1>
  
  </Link>
  //
  {myTodo}



  //
   
  
  </div>
 
   
  );
}
export default User123;