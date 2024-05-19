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
        src="/main3cx.png"
      
        width={1950}
        height={50}
       
      />
<div style={{
        position: 'absolute',
        color: 'white', // Change this color if the text is not visible on the image
        fontSize: '3rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: adds a shadow to the text
        textAlign: 'center'
      }}>
     3CX
      </div>


    </div>

    <div style={{padding:'100px', paddingLeft:'390px', paddingBottom:'10px'}} > 
      <Image
      src='/3cx.png'
      width='300'
      height='200'
       />
    </div>

    <div style={{ paddingLeft: ' 390px', textAlign: 'left' , fontSize:'15px', paddingRight:'340px', lineHeight:'1.7', paddingBottom:'50px'}}>

      <div style={{ fontWeight: 'bold', paddingBottom: '10px' }}>Evolve Your Communications With 3CX Phone System</div>
      <div>
        3CX Phone System is a software-based PBX that works with SIP standard-based IP Phones, SIP trunks, and VoIP Gateways to provide a full PBX solution – without the inflated cost and management headaches of an ‘old style’ PBX. Used by more than 30,000 companies globally, 3CX has been recognized for its innovation and cutting-edge technology.
      </div>
      <br/>

      <p style={{ fontSize:'30px'}} >
        Easy Installation and Management<br /></p> 
      <p> 3CX is easily installed and managed and is preconfigured to work with popular IP Phones, VoIP Gateways, and SIP trunks, saving you the hassle of having to configure and manage these devices.
      </p>
      <ul style={{ listStyleType:'circle'  ,paddingLeft: '40px' }}>
        <li>No need for extensive telecom knowledge or training</li>
        <li>Open Standards – Vendor independent</li>
        <li>Central Control from the 3CX Management Console</li>
        <li>Choose from popular IP Phones, VoIP Gateways, SIP Trunks</li>
      </ul>
       <br/>
      <p style={{ fontSize:'30px'}} >
      Take your Extension Anywhere   <br /></p> 
      <p>
      3CX includes clients for smartphones and Mac or Windows laptops that allow users to use their office extension from anywhere, seamlessly integrated as if they were in the office. Not only are all calls to the office free of charge, but employees can leverage one single number and make a professional impression.
    </p>
    <ul style={{ paddingLeft: '40px', listStyleType:'circle' }}>
        <li>Take your extension everywhere you go</li>
        <li>All calls are free of charge – slash your mobile phone bills</li>
        <li>Increase productivity – work from anywhere</li>
        <li>One number – Don’t give out your personal mobile number</li>
      </ul>
       <br/>
      <p style={{ fontSize:'30px'}} >
      Halve your Telephone Bill and Increase Sales
 <br /></p> 
      <p> With 3CX, companies can reduce their telephone costs by up to 80%, by leveraging SIP trunks, WebRTC, free calling to remote extensions and offices and reducing the number of fixed telephony lines. With the CRM integration, agents get a customer name rather than a number.
</p>
<ul style={{ paddingLeft: '40px', listStyleType:'circle' }}>
        <li>Save on call costs by lowering mobile & customer service number bills</li>
        <li>Easily add and remove extensions – no per user license</li>
        <li>Know who’s calling with CRM integration - increase customer satisfaction</li>
        <li>Leverage existing hardware, wiring and low cost open standard hardware</li>
      </ul>
      <br/>
      <p style={{ fontSize:'30px'}} >
      Advantages of 3CX Phone System
 <br /></p> 
 <ul style={{ paddingLeft: '27px', lineHeight:'2' }}>
        <li>Software based: Easy to install & manage</li>
        <li>Inexpensive to buy and expand</li>
        <li>Work from anywhere with iOS & Android clients</li>
        <li>Leverage existing IT infrastructure & Server hardware</li>
        <li>Save on your phone bill with SIP Trunks & Mobile / Remote clients</li>
        <li>Integrated video conferencing using WebRTC</li>
        <li>Better customer service with advanced call queues</li>
        <li>Integrate with CRM & Accounting software</li>
        <li>Standards based – use popular IP Phones, SIP Trunks</li>
        <li>Click 2 Call from your website</li>
      </ul>
       <br/>
<p>  As a certified 3CX partner, trust SME Tech to deliver your on-premise or hosted 3CX service.  </p>
    </div>

<Footer/>


    </div>
  )
}

export default page
