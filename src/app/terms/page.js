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
    Terms And Conditions
      </div>
       </div>

<div  style={{ padding:'70px', paddingLeft:'390px'}}  >
<h1 style={{ fontSize:'35px', fontWeight:'bold'}} >  Standard Form of Agreement  </h1>
<br/>
<h2  style={{  fontSize:'25px' }} >   Business – Standard Terms and Conditions </h2>
<br/>
<p style={{ fontWeight:'bold'}} > 1. These Terms </p>

 <ul style={{ listStyleType:'-moz-initial', paddingLeft: '40px' }}>
 <li>  These terms and conditions set out the basis on which we provide telephone and internet services to our business customers. If you use our telephone or internet services for residential purposes then our Residential Standard Terms and Conditions.
  </li> 
  <li>  Additional terms may apply to your use of some of our services. If there is any conflict between these terms and conditions and any additional terms, the additional terms will prevail. The additional terms shall be deemed to form part of these terms and conditions, so a breach by you of the additional terms shall be deemed to be a breach of these terms and conditions.
 </li>
</ul>
<br/>
<p style={{ fontWeight:'bold'}} > 2. Our Services </p>

 <ul style={{ listStyleType:'-moz-initial', paddingLeft: '40px' }}>
 <li> We are not obliged to provide services unless we accept your application. Acceptance only occurs when we communicate this in writing or when we supply services to you.  In either event, these terms and conditions shall constitute the agreement between us. We can decide whether or not to accept any application.
   </li> 
  <li>  We will be responsible for determining the manner in which the services are to be provided.
 </li>
<li> We will use all reasonable endeavors to make our services available to you at all times. However our services rely on us using networks and services owned by other people. As a result we cannot promise that our services will always be available or fully functioning. If our services are unavailable for any reason we will endeavor to restore service as soon as possible. If you need assistance in using our services please call Customer Support.
  </li>
 <li> While we take reasonable security precautions, due to the nature of telecommunications services we cannot guarantee the confidentiality of any calls or transmissions you make using our services. </li>
<li> We can suspend or restrict our services at any time if:<ul style={{listStyle:'-moz-initial'  ,paddingLeft:'20px'}}  >
    <li>  we consider it necessary to protect or maintain our network or anyone else’s network; or
 </li>
 <li>  we believe that you have breached any of our terms and conditions. </li>
</ul>
 </li>
<li> Network charges will still apply during the period of any suspension. In addition, if our services are suspended because of your breach, we can charge you a reconnection </li>
</ul>

</div>


      <Footer/>
    </div>
  )
}

export default page
