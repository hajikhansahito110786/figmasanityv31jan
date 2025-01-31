import React from 'react'
import Image from 'next/image'
import chaircusion from "./chaircusion.png"

const Producthk2 = () => {
  return (
    

<div className="w-full sm:h-full md:h-[300px] flex justify-center items-center bg-red-500 ">
<div className="sm:w-full md:w-full lg:w-[80%] h-full bg-yellow-300">

{/* top side */}
<div className="sm:pl-5 md:pl-5">
<span className='border-1-8 border-red-400 text-red-600 mb-5 font-bold' >This month</span>
<div className="flex justify-between">
<h2 className="text-4xl font-bold mt-4">Best selling Product</h2>
<button className="sm:hidden md:block px-5 px-3 bg-blue-300 text-white ml-[500px] rounded-md">ghjgghh</button>

</div>
</div>
{/* products */}
{/* containers boxes */}
<div className="flex sm:flex-col sm:items-center md:flex-row justify-between mt-9 sm:gap-y-5 md:gap-y-0">

<div>
<div className="w-[200px] h-[150px] bg-green-500 flex justify-center items-center">

< Image src={chaircusion} alt ='hero-image' width={150} height={100} ></Image>
</div>
{/*title*/}
<div className="flex flex-col">
<span className="text-lg font-bold">
jkhjkhkjhjkhjh
</span>
<span className="font-bold">
ghfghfghfg
</span>
</div>



</div>
	
<div>


<div className="w-[200px] h-[150px] bg-green-500 flex justify-center items-center">

< Image src={chaircusion} alt ='hero-image' width={150} height={100} ></Image>
</div>
{/*title*/}
<div className="flex flex-col">
<span className="text-lg font-bold">
jkhjkhkjhjkhjh
</span>
<span className="font-bold">
ghfghfghfg
</span>
</div>


</div>

<div>


<div className="w-[200px] h-[150px] bg-green-500 flex justify-center items-center">

< Image src={chaircusion} alt ='hero-image' width={150} height={100} ></Image>
</div>

{/*title*/}
<div className="flex flex-col">
<span className="text-lg font-bold">
jkhjkhkjhjkhjh
</span>
<span className="font-bold">
ghfghfghfg
</span>
</div>


</div>


<div>
<div className="w-[200px] h-[150px] bg-green-500 flex justify-center items-center">

< Image src={chaircusion} alt ='hero-image' width={150} height={100} ></Image>
</div>

{/*title*/}
<div className="flex flex-col">
<span className="text-lg font-bold">
jkhjkhkjhjkhjh
</span>
<span className="font-bold">
ghfghfghfg
</span>
</div>


</div>







</div>

<button className=" sm:ml-[5%] sm:block md:hidden py-2 px-5 bg-blue-300 text-white ml-[5px] rounded-md">View All2</button>


</div>

</div>



  







 
  )
}

export default Producthk2