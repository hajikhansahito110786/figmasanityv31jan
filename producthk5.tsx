import React from 'react'
import Image from 'next/image'
//import chaircusion from "./chaircusion.png"
import smallwhitechair from "./smallwhitechair.jpg"
//import redchair from "./redchair.png"
import orange from "./orange.png"
import whitesofa from "./whitesofa.png"
//import wingchair from "./wingchair.png"
//import woodenchair from "./woodenchair.png"
//import stole1 from "./stole1.png"

const Producthk5 = () => {
  return (
    
<main>
<div className="w-full sm:h-full md:h-[300px] flex justify-center items-center  mt-10">
<div className="sm:w-full md:w-full lg:w-[80%] h-full ">

{/* top side */}
<div className="sm:pl-5 md:pl-5">
<span className='border-1-8 border-red-400 text-red-600 mb-5 font-bold' >Explore New Products</span>
<h2 className="text-4xl font-bold mt-4">..</h2>
</div>
{/* products */}
{/* containers boxes   <div className="flex justify-between mt-9">*/}
<div className="flex sm:flex-col sm:items-center md:flex-row  justify-between mt-9 sm:gap-y-5 md:gap-y-0">

<div>
<div className="w-[200px] h-[150px]  flex justify-center items-center">

< Image src={orange} alt ='hero-image' width={150} height={100} ></Image>
</div>
{/*title*/}
<div className="flex flex-col">

</div>



</div>
	
<div>


<div className="w-[200px] h-[150px]  flex justify-center items-center">

< Image src={whitesofa} alt ='hero-image' width={150} height={100} ></Image>
</div>
{/*title*/}
<div className="flex flex-col">

</div>


</div>

<div>


<div className="w-[200px] h-[150px]  flex justify-center items-center">

< Image src={smallwhitechair} alt ='hero-image' width={150} height={100} ></Image>
</div>

{/*title*/}
<div className="flex flex-col">

</div>


</div>
















</div>


</div>

</div>
<button className="py-2 px-3 bg-red-300 sm:ml-[5px] md:ml-[500px] rounded-md text-white">View All products</button>
</main>

  







 
  )
}

export default Producthk5