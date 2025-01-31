//"use client"
//[slug2]
//"use client"
//import Image from "next/image";
import Hk from "./hkpic.jpg"
import { client} from "@/sanity/lib/client"
import product from '@/sanity/schemaTypes/product';
import { StaticImageData } from 'next/image';
import React from 'react'
//
import Image from 'next/image'
import Minus from '@/app/Minus';
import Plus from '@/app/Plus';


//import {useState} from "react";
import Link from "next/link";
import User1 from "../User1";
//okimport User1 from "../User1";
//ok import { count } from "../data123";
import {useAtom} from "jotai"
//import User1 from '@/app/data';
//import User1 from '../data1';


//import { count } from "./data1.ts";



//const Slug2 = ({params}:{params:{slug2:number}}) => {   //export default Slug2;

//
 export default  async function Slug2({params}:{params:{slug2:number}})  {

  //const Slug2 = ({params}:{params:{slug2:number}}) => {
  
  // const products:any = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']`)
const product:any[]  = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']`)
  //ok console.log(product)
  // const [myCount,setMyCount]=useAtom(count)
//const items:any=products.find((item:any)=>item.id==params.slug2)
//console.log(items)
//console.log(params)
  return (
 
    <div className="mt-40 sm:w-full md:w-full lg:w-[80%] h-full ">
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center  mt-10">
   



   




    {
    product.map((data:any,i:number)=>{
	
	if(data.id==params.slug2){
	console.log("ok")
	}
    return(
	
	data.id==params.slug2 ? (
      <>
        

<div className="flex">
    <div>
      <img src={data.imagePath} alt={data.name} width="200" />
       
         <h1  >    { data.name } </h1>
         <h1  >    { /*data.price*/ } </h1>
</div>
<div>
         <User1 data1={data.price}/>
</div>

      
              </div>





      </>   
    ) : (
      <div className="whatever">.</div> 
    )
  )
	
	
	
	
	
    })
     }
    
    
    
    
    
    
    
    </div>
    </div>
  );
}
