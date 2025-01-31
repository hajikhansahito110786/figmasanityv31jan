"use client"
import {useAtom} from "jotai"
import {useState} from "react";
import { count } from "./data123";
import { total } from "./data123";
import { todo } from "./data123";

//const User1 = (props:any) => {
  const User1 = ({data1}:{data1:number}) => {
    console.log("data1",data1)
const [myCount,setMyCount]=useAtom(count)
const [myTotal,setMyTotal]=useAtom(total)


const [myTodo, setTodo]=useAtom(todo);
const [todonewvalue, setTodonewvalue]=useState("");



const addfunction=()=>{
 //setTodo([...myTodo,"abc"])
 //setTodo([...myTodo,{name:677(parseInt({data1}) * parseInt({myCount}))])
  setTodo([...myTodo, (parseInt(data1) * parseInt(myCount))])

   // setTodonewvalue(parseInt({data1}) * parseInt({myCount}))
   //   setTodo([...myTodo,todonewvalue])
    //setTodonewvalue("")
	console.log("here123",myTodo)
  }

  const deletefunction=(v:any)=>{
    const newArray=myTodo.filter(item=>item!==v);
    setTodo(newArray)
    //setTodo([...myTodo,todonewvalue])
    //setTodonewvalue("")
  }


console.log(data1)
  return (
    
    <><div className="flex">
      <h1>{/*props.data1*/}</h1>
      <div>
      <h1>Item Price ..</h1>

  
    {data1}
      </div>
      <div>
      <button className="w-100" onClick={() => {
        setMyCount(myCount + 1);
       // setTodonewvalue(parseInt({data1}) * parseInt({myCount}))
      //setTodonewvalue(88);
      
		   
      } }>Quantity Please? click me (+) :....  ({myCount})  ....</button>
      </div>
	  <div>
      <p><h1>......SubTotal</h1></p>
	  <h1>   ..</h1>
      {parseInt(data1) * parseInt(myCount)}
     </div>
    </div><div>


        <button onClick={addfunction} className="ml-5">
          button add to cart addition

        </button>
      </div></>
 
   
    
  )
}

export default User1;