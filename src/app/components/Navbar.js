
import Image from "next/image";
import React from "react";
import Link from 'next/link';

function Navbar(){
    return(
<div>

<div className="bg-slate-50" style={{ display: 'flex', alignItems: 'center' , textAlign:'right'  }}>
  <div style={{ paddingLeft: '390px', paddingTop: '20px',  paddingBottom:'25px' , position: 'relative' }}>
    <Image
      src="/logosme.gif"
      alt="Logo"
      width={200}
      height={300}
    />
  </div>

  <div style={{ fontSize: '20px', textAlign: 'right', paddingLeft: '600px', paddingBottom: '10px' }}>
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ marginRight: '20px' ,fontSize:'20px', fontFamily:'initial' }}>
      Call us today:{' '}
      <Link href="">
        <p style={{ color: 'blue', display: 'inline' }}>08007638324</p>
      </Link>
    </div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div>
      Email us:{' '}
      <Link href="">
        <p style={{ color: 'blue', display: 'inline' }}>enquiries@smetech.co.nz</p>
      </Link>
    </div>
  </div>
</div>

</div>


<header class="text-gray-800 body-font border-t-2 border-b-2 border-grey">
  <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center"   >
   
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      
      <a class="mr-5 hover:text-gray-900 px-5 py-1">HOME</a>
      <a class="mr-5 hover:text-gray-900 px-5 py-1">ICT</a>
      <a class="mr-5 hover:text-gray-900 px-5 py-1">CYBER SECURITY</a>
      <a class="mr-5 hover:text-gray-900 px-5 py-1">INTERNET ACCESS</a>
      <a class="mr-5 hover:text-gray-900 px-5 py-1">UNIFIED COMMUNICATION</a>
      <a class="mr-5 hover:text-gray-900 px-5 py-1">ABOUT US</a>
      <a class="mr-5 hover:text-gray-900 px-5 py-1">CONTACT</a>
     

    </nav>
   
  </div>
</header>


</div>
    )
    } 


export default Navbar;
