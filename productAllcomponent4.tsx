//import Image from "next/image";
import Image from 'next/image'
import Product_Image from "./Product_Image.png"
import Pink from "./pink.png"
import Image11 from "./Image-11.png"
//import logo1 from "./logo1.png"
//import Link from "next/link"
//import {fapple} from '@fortawesome/free-brands-svg-icons';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {AppleIcon} from '@mui/icons-material/Apple';

function ProductAllcomponent4() {

 //export default  
  return (
    <>
	
    <div className='p-9'>All Products</div>
	
	<div className="bg-yellow-300 h-[300] sm:w-ful flex justify-center">
	<div className="bg-blue-300  w-[80%]  sm:w-ful flex justify-between ">
{/* left side belowdiv*/}

{/* Right side belowdiv */}
<div className="">
< Image src={Product_Image} alt ='hero-image' width={200} height={200} />

</div>
<div className=''>
< Image src={Pink} alt ='hero-image' width={200} height={200} />

</div>
<div className=''>
< Image src={Image11} alt ='hero-image' width={200} height={200} />

</div>

	</div>
	</div>
 

   
      
    </>  
   
  );
}
export default ProductAllcomponent4;