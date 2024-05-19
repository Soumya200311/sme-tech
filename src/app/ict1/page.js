import React from 'react'

import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div>
      
    

    
      <Navbar/>
      <div style={{ position: 'relative', marginTop:'0px',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="/keyb.png"
        alt="keybo"
        width={1950}
        height={100}
       
      />
 <div style={{
        position: 'absolute',
        color: 'white', // Change this color if the text is not visible on the image
        fontSize: '3rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: adds a shadow to the text
        textAlign: 'center'
      }}>
       Information Communication
      </div>
 </div>

 <div style={{ padding: '50px', paddingLeft:'400px', paddingBottom: '100px' , paddingRight:'450px'}} className="flex items-center justify-between">
      <a style={{ marginRight: '20px' ,fontSize:'20px'}}>Value for money, customised IT services and solution</a>
      <Image
        src='/ict.jpg'
        width={200}
        height={200}
        alt='ICT'
      />
    </div>

       <div className='bg-gray-100 item-center text-left  ' style={{ textAlign:'left', padding:'50px', paddingLeft:'390px', paddingRight:'390px'}} >
<p style={{fontSize:'19px'}} > Server, Workstation, Network, Cloud, Data, Security, Unified Communication.
</p>
<p  style={{fontSize:'19px'}}   > What ever your situation or needs, we’re here to serve.  Office365?  Google Apps for Work? IT Strategy?  Streamline or optimise your IT? Security? Road warriors?
</p>
<br/>
<a>If your business is moving premises or at a turning point, it may be worth your while to benefit from an independant review – unbiased, professional, and comprehensive!  We’re here to give you peace of mind and establish how best we can deliver to that promise for you.
</a>
<a> We’re brand agnostic – which means we get on with the job.
</a>
<a> Want to see a little more of the landscape of our ICT service, click here.
</a>
  <a>A summary of ICT services can be seen here.  </a> 
       </div>

       <div style={{fontSize:'35px', textAlign:'center', margin:'50px'}}>

<a  >  Questions? Contact us today.  </a>

       </div>
  <Footer/>
    </div>
  )
}

export default page
