//import Image from "next/image";
import Image from 'next/image'
import Product_Image from "./Product_Image.png"
//import logo1 from "./logo1.png"
//import Link from "next/link"
//import {fapple} from '@fortawesome/free-brands-svg-icons';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {AppleIcon} from '@mui/icons-material/Apple';
function Hero1() {

 //export default  
  return (
    
 
<div className="bg-gray-500 sm:w-ful h-[300px]  flex justify-center mt-8" >
<div className=" bg-gray-500 sm:w-full md:w-full lg:w-[80%] h-full flex justify-between">
	  {/*left side below*/}
	 <div className='bg-gray-500 ml-8 sm:mt-4 md:mt-16 text-black'>
	 
	 <div className='flex justify center items-center'>
	 
		<h1 > Welcome to Chairy</h1>		
		
	

	 
	 </div>
	







			
			
			
	
	
	
	<div className='w-[200px]'>
	<h1 className="text-2xl"> Best Furnitures
	</h1>
	<h1 className="text-2xl"> Collection for your Interrior</h1>
	<button className="font-bold underline underline-offset-8"> Shop Now</button>
	</div>
	
	
	

	 </div>

	 
	  {/*right side*/}
	 <div className="bg-gray-500">
	 < Image src={Product_Image} alt ='hero-image' width={200} height={280} />
			
	 </div>

</div>
</div>

   
      
     
   
  );
}
export default Hero1;