import React from 'react'
import { FaStar } from "react-icons/fa6";
import Image from 'next/image'
import abc from "../../Image.png"


import { StaticImageData } from 'next/image';
import Link from 'next/link';

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



let stars = [<FaStar key={0}/>,<FaStar key={1}/>]
const Products = (props:any) => {
console.log(props)
  return (
  <div>
  <div className='flex justify-around'>
  {
  products123.map((item:any)=>{
  return(
  
  <div>
//
  <h1> image </h1>
   <Image src={item.image[0]} className='w-[200px] h-[200px]' alt={"hghj"} width={200} height={200}></Image>
  <h1> {item.title} </h1>
  {/* starts

//

  <Link href={`/Products/${item.id}`}>
   <h1> link image </h1>
  
  </Link>

//



  */}
  <p className='flex justify-center items-start'>{stars}</p>
  <div className='flex space-x-3 font-bold'>
    <p className='font-bold text-gray-500 line-through'> {item.title} </p>
    <p> {item.title} </p>
    
  
  </div>
  
  </div>
  )
  
  
  }
  )
  
  
  
  }
  
  </div>
  
  
  </div>
   		
      
     
   
  );
}
export default Products;