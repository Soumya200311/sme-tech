import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
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
        Internet Access
      </div>

    </div>

   
    <div style={{ padding: '50px', paddingLeft: '400px', lineHeight: '1.1', paddingRight: '450px', display: 'flex', alignItems: 'center' }}>
      <div>
        <a href="#" style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>Ultrafast Fibre</a>
  
        <p style={{ fontSize: '20px' }}>
         <br/> Frustrated with an inconsistent experience and variable data rates on your DSL connection?
        </p>
        <br />
        <div style={{ color: 'darkslategrey' }}>
          <p>
            Via the government's Fibre To The Premise initiative, you can now switch to this new UFB fibre network which is currently being rolled out across New Zealand. Do so and enjoy:
          </p>
          <ul style={{ listStyleType: 'circle', paddingLeft: '40px', paddingTop: '20px' }}>
            <li>Higher bi-directional burst rates</li>
            <li>A stable online experience</li>
            <li>Greater reliability</li>
            <li>Greater scalability</li>
            <li>Future-proofing your internet connection</li>
            <li>Enable your reliable cloud access</li>
            <li>Cheaper voice calls by moving to VoIP</li>
            <li>Being high-definition (HD) video capable NOW</li>
          </ul>
          <br />
          <p>
            Additional and relevant material on UFB can be found <a href="#">here</a>.
          </p>
          <br />
          <p>
            The SME Tech team is standing by to personally chaperone the installation and connection process.
          </p>
          <br />
          <p>
            UFB is but one access technology we provide – and of course, it is still a shared service. Our dedicated internet services include HSNS, HSNS Lite, and Premium fibre connects. Hybrid WAN options may be better suited to your needs. Contact us to inquire and explore the service appropriate to you.
          </p>
          <br />
          <p>
            Our team will keep you totally informed as to the process and implications of installation and commit to not acting without your consent.
          </p>
        </div>
      </div>
      <div style={{ marginLeft: '40px' }}>
        <img
          src="/internet.png"
          alt="Logo"
          width={720}
          height={700}
        />
      </div>
    </div>


    <div style={{ padding: '50px', lineHeight: '1.5', backgroundColor:'whitesmoke' , textAlign:'center'}}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontWeight: 'bold' , fontSize:'33px' }}>Ultrafast Fibre Products</h1>
             </div>
      <p  style={{ fontSize:'19px' ,color:'darkslategray' }} >
        To access UFB, a fibre-capable modem/router is required, so your current broadband modem/router may not be sufficient.
      </p>
      <div style={{ padding: '20px', textAlign: 'left', paddingLeft:'380px' , paddingRight:'350px'}}>
      <h2 style={{ fontWeight:'bold' , fontSize:'25px'}} >What choice do you have ?</h2>
      <p style={{ color:'darkslategrey', fontSize:'15px'}}>
        At SME Tech, we pride ourselves in tailoring solutions to better meet our clients' needs if one of our standard options does not do so. We provide a range of products from 30/10 residential circuits through to 1Gbps business-grade options. Whilst UFB is not available everywhere and connection/setup fees may apply, contact us now, leap into the digital future, and discover how we can bring superior access to your door.
      </p>
    </div>
    </div>


    <div style={{ padding: '60px' , textAlign:'center', fontSize:'28px', fontWeight:'revert'}}>
      <p>Questions? <a href="mailto:your.email@example.com"  style={{ color: 'blue' }}   >Contact us today</a>.</p>
    </div>
       <Footer/>
    </div>
  )
}

export default page
