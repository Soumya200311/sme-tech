import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'


const ict = () => {
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
       ICT Service Landscap
      </div>

    </div>


    <div style={{paddingTop:'90px'  ,textAlign:'left' ,paddingLeft:'390px'  }}>

    Why would you have the knowledge depth of ICT when this is not your core business?  Do you feel you need an independent assessment of your ICT framework? <br/> The landscape of our ICT review includes:<br/>


    </div>
    
<div style={{   paddingLeft:'400px', container:'py-5px',paddingBottom:'60px' }}>

    <div style={{ display: 'inline-block', textAlign: 'left', maxWidth: '1000px' }}>
        <ul style={{ listStyleType: 'circle', paddingLeft: '50px', paddingTop:'20px' }}>

           

           <li>Telecomms</li>
            <li>WiFi footprint and services</li>
            <li>VoIP or SIP Services</li>
            <li>Mobile Devices (Phones, Tablets)</li>
            <li>Network Monitoring</li>
            <li>Office365 and Google Apps for Work</li>
            <li>IaaS</li>
            <li>Management of your Cloud Services/Solutions</li>
            <li>ICT Strategy</li>
            <li>Network Infrastructure and Segregation</li>
            <li>Internet Access Circuits</li>
            <li>Physical or Virtual Servers – On-Premise or in the Cloud</li>
            <li>Preventative Systems Monitoring (RMM)</li>
            <li>Patch Management (Operating System)</li>
            <li>Business Continuity Plan and Planning</li>
            <li>Backup and Disaster Recovery</li>
            <li>Security and Compliance (In Country Data Storage)</li>
            <li>Analysis of Current IT Challenges</li>
            <li>Workstation/Laptop/Notebook Security Policy and Checks</li>
            <li>Unified Threat Device Management</li>
            <li>Vendor Management</li>
            <li>VirCIO – your Virtual CIO</li>
            <li>Regular Technology Review(s)</li>
            <li>SLAs if any</li>
        </ul>
    
    </div>
</div>

<Footer/>

      
    </div>
  )
}

export default ict
