import React from 'react'
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

<p style={{ textAlign:'left', padding:'80px', paddingLeft:'390px' ,lineHeight:'1.9' }}  >  We’re constantly providing remote support to our end-users.  Our preferred technology for this is Teamviewer. <br/>

Existing customers can access our document repository presented in your welcome email.

    </p>






    <Footer/>
    </div>
  )
}

export default page
