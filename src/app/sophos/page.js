import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
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
  Cyber Security
      </div>
</div>
<div style={{padding:'100px', paddingLeft:'390px', paddingBottom:'100px'}} > 
      <Image
      src='/sophos.png'
      width='300'
      height='200'
       />
       <br/>
    <p> As a Silver Partner, SME Tech is positioned to provide premium consulting support and service to bring your business security in line and keep ahead of the threat curve.  We bring SOPHOS technology to your doorstep.</p>
<ul style={{ listStyleType: 'circle', paddingLeft: '40px' }}>
          <li>Firewall</li>
          <li>Web</li>
          <li>Email</li>
          <li>Wireless</li>
          <li>Devices</li>
          <li>Encryption</li>
          <li>Servers</li>
          <li>Data</li>
        </ul>
        <br/>
<p>Our Managed Security platform delivers a cost-effective, comprehensive security suite to your business – and best of all, if you prefer to outsource your security portfolio, the SME Tech team can deliver.</p>
<br/>
<p> The SOPHOS showcase provides more product information.  Contact us for a comprehensive cyber security consultation for your business.  </p>
</div>  

<Footer/>
    </div>
  )
}

export default page
