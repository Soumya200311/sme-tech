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
      ICT Service
      </div>
    </div>

<div>
<div style={{ paddingLeft: '430px',  paddingTop:'50px', paddingBottom:'50px',fontSize:'15px', paddingRight:'350px',textAlign: 'left' }}>
  <p>
    The SME Tech ICT service suite provides an extensive framework to deliver a value-for-money service, tailored to your business and budget. We offer these services to astute businesses who value that a quality experience with security and flexibility defining pillars of our engagement.
  </p>
  <br />
  <p>
    SME Tech offers services ranging from:
  </p>
  <ul style={{ paddingLeft: '40px' , listStyleType:'circle' }}>
 
      <li>Hardware Procurement</li>
      <li>Software Procurement</li>
      <li>Asset Management</li>
      <li>Virus Prevention</li>
      <li>Software Patching</li>
      <li>Data Backup and Recovery</li>
      <li>Network Security</li>
      <li>Wireless Networks (secure corporate and guest networks, remote bridging)</li>
      <li>Unified Threat Management</li>
 
  </ul>
  <br />
  <p>
    The days of businesses operating their ICT capital in a reactive fashion are numbered. With the SME business market moving into demanding a proactive and preventative approach to ICT management, SME Tech offers a Remote Monitoring & Management framework to our customers. This framework makes provision for server/workstation management, mobile device management, managed security, device performance monitoring, anti-virus policies, data backup/recovery policies, network administration, remote hands support, OS/software patch management.
  </p>
</div>

</div>



<Footer/>

      
    </div>
 
  )
}

export default page
