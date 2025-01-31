import React from 'react'
import Header_1 from '../header_1'
import Header0 from '../header0'
import Header1 from '../header1'
//import Image from 'next/image'
//import whitesmall from "./whitesmall.jpg"
//import Navbarnew from '../navbarnew'

import ProductAllcomponent1 from '../productAllcomponent1'
import ProductAllcomponent2 from '../productAllcomponent2'
import ProductAllcomponent3 from '../productAllcomponent3'
import ProductAllcomponent4 from '../productAllcomponent4'
//import Link from 'next/link'
import Footerhk2 from "../Footer2hk";

const ProductAll = () => {
  return (
   <>
   		<Header_1/>
	<Header0/>
	<Header1/>
<ProductAllcomponent1/>
<ProductAllcomponent2/>
<ProductAllcomponent3/>
<ProductAllcomponent4/>
	 <Footerhk2/>
   </>
      
     
   
  );
}
export default ProductAll;