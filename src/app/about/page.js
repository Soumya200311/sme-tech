
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
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
     Support
      </div>
        </div>



<div>

<h1  style={{fontSize:'30px'}} > About SME Tech, the experienced IT business in Christchurch
  </h1>
<p> Welcome to the SME Tech world – your preferred technology partner for all things ICT.
</p>
<br/>
<a>  The SME Tech vision has grown to encompass a wide range of business-essential ICT services to the micro, small and medium enterprises upon which our economy is so dependant.  This vision extends to fostering enduring partnerships and relationships to maximise an internet based future where technology can make the difference to business.  We provide not only the access technology, but also the internal ICT platforms which make business tick.
</a>
<br/>
<a>  We’re enthusiastic about being able to provide a single point for ICT solutions and services – large or small.  Simple solutions backed by deep experience and passion. What’s more, we offer personalised service and support. Our clients become one of the family.
</a>
<br/>
<a>  The SME Tech team engages each and every client to determine their specific needs as we recognise that each business has its own unique service profile.  We’ll construct a service profile and technology transition road map to suite your unique circumstances and we’ll work with you regularly to ensure  this profile serves you and evolves as your needs evolves too.  We’re integration specialists who live any technology transition with our clients – step-by-step, in a controlled fashion.
</a>
<br/>
<a>  Speak with us today on solving your business technology and connectivity solution and partnering with SME Tech to ensure your business is set for the future. </a>
</div>



<Footer/>
    </div>
  )
}

export default page
