//import Image from "next/image";

import Link from "next/link"


function Header1() {

 //export default  
  return (
    
 
<div className="w-full sm:h-[90px] md:h-[80px]   flex justify-center items-center sm:border-b-none md:border-b-2 sm:mb-4 ">

<div className="w-[80%] h-full  flex sm:flex-col md:flex-row justify-between items-center">

	  {/*left side*/}
	 <div >
	<ul className="flex gap-x-5 mr-4 sm:mb-4 md:mb-0">
	 <li>
	<Link className="hover:underline" href={"/"}>Home</Link>
	 </li>
	 <li>
	<Link className="hover:underline" href={"/"}>Shop</Link>
	 </li>
	 <li>
	<Link className="hover:underline" href={"/ProductAll"}>Product</Link>
	 </li>
	  <li>
	  <Link className="hover:underline" href={"/SinglePage"}>Pages</Link>
	 </li>
	   <li>
	   <Link className="hover:underline" href={"/About"}>About</Link>
	    </li>
		<li>
	   <Link className="hover:underline" href={"/NewCart"}>NewCart{0}</Link>
	 </li>
	   
	
	 <li>
	   <Link className="hover:underline" href={"/newprices"}>NewPrices</Link>
	 </li>






	
	 </ul>
	
	 </div>

	 
	  {/*right side*/}
	 <div  >
	
	Contact 0800-0000
	 
	</div>
	
	  
</div>

</div>

   
      
     
   
  );
}
export default Header1;