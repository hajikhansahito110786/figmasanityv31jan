//import Image from "next/image";
import Image from 'next/image'
//import chaircusion from "./chaircusion.png"
import logo1 from "./logo1.png"
import cartshop from "./cartshop.png"
import Link from "next/link"


function Header1() {

 //export default  
  return (
    
 
<div className="bg-grey-300 w-full sm:h-[90px] md:h-[80px]   flex justify-center items-center sm:border-b-none md:border-b-2 sm:mb-4 ">

<div className="w-[80%] h-full  flex sm:flex-col md:flex-row justify-between items-center">

	  {/*left side*/}
	 <div className="text-3xl font-bold">
	<span> < Image src={logo1} alt ='hero-image' width={500} height={584} className="w-[145px]" /></span>
			
	 </div>

	 
	  {/*right side*/}
	 <div  >
	
	 <ul className="flex gap-x-5 mr-4 sm:mb-4 md:mb-0">
	 <li>
	 <span> < Image src={cartshop} alt ='hero-image' width={50} height={50} className="w-[45px]" /></span>
	
	
	<Link className="hover:underline" href={"/"}>.</Link>
	 </li>
	  
	 </ul>
	 
	</div>
	
	  
</div>

</div>

   
      
     
   
  );
}
export default Header1;