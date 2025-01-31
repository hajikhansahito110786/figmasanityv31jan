"use client"
import product from '@/sanity/schemaTypes/product';
import { StaticImageData } from 'next/image';
import React from 'react'
//
import Image from 'next/image'
import Minus from '@/app/Minus';
import Plus from '@/app/Plus';

import {useAtom} from "jotai"
import {useState} from "react";
//import User1 from '@/app/data';
//import User1 from '../data1';
//User1

//import { count } from "./data1.ts";
interface Iproducts{
  id: number;
title: string;

image?:string[] | StaticImageData | string;
}
const products123:Iproducts[]=[
{
id:1,
title:"hk1",
image: ["/Image.png","/Image.png"],
},
{
  id:2,
  title:"hk2",
image: ["/Image.png","/Image.png"],
  }
]





//

const Slug = ({params}:{params:{slug:number}}) => {


const items:any=products123.find((item)=>item.id==params.slug)
console.log(items)
  return (
 
  <div className='flex mt-28 '>
  
<div>

<Image src={items?.image[0]} alt={items?.title} width={100} height={100}></Image>

<Image src={items?.image[1]} alt={items?.title} width={100} height={100}></Image>


</div>

 <div>
  <p>minus</p>
  <button className="w-10">minus<Minus/></button>
  <span>{"item qtl"}</span>
  <p>Plus</p>
    <button className="w-100">plus<Plus/></button>
   <button className="w-200">Add to cart</button>
  
  </div>




  
 
</div>
   
  );
}
export default Slug;