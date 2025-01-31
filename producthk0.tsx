import React from 'react'
import Image from 'next/image'
import zapierlogo from "./zapierlogo.png"
import pipedrive from "./pipedrive.png"
import sibbank from "./sibbank.png"
import onlyzee from "./onlyzee.png"


import Hk from "./hkpic.jpg"
import { client} from "@/sanity/lib/client"
//export default async function
//const async Producthk0 =
//export default Producthk0
 export default async function Producthk0() {
const products:any = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']`)
  //console.log(products)
  
  return (
    
<main>
<div className="w-full sm:h-full md:h-[300px] flex justify-center items-center  mt-10">
<div className="sm:w-full md:w-full lg:w-[80%] h-full ">

{/* top side */}
<div className="sm:pl-5 md:pl-5">
<span className='border-1-8 border-red-400 text-red-600 mb-5 font-bold' >..</span>
<h2 className="text-4xl font-bold mt-4">..</h2>
</div>
{/* products */}
{/* containers boxes   <div className="flex justify-between mt-9">*/}
<div className="flex sm:flex-col sm:items-center md:flex-row  justify-between mt-9 sm:gap-y-5 md:gap-y-0">

<div>
<div className="w-[200px] h-[150px]  flex justify-center items-center">

< Image src={zapierlogo} alt ='hero-image' width={150} height={100} ></Image>
</div>
{/*title*/}




</div>
	
<div>


<div className="w-[200px] h-[150px] flex justify-center items-center">

< Image src={pipedrive} alt ='hero-image' width={150} height={100} ></Image>
</div>
{/*title*/}



</div>

<div>


<div className="w-[200px] h-[150px]  flex justify-center items-center">

< Image src={sibbank} alt ='hero-image' width={150} height={100} ></Image>
</div>

{/*title*/}



</div>

<div>


<div className="w-[200px] h-[150px]  flex justify-center items-center">

< Image src={onlyzee} alt ='hero-image' width={150} height={100} ></Image>
</div>

{/*title*/}



</div>














</div>


</div>

</div>
<button className="py-2 px-3 bg-red-300 sm:ml-[5px] md:ml-[500px] rounded-md text-white">View All products</button>
</main>

  







 
  )
}

