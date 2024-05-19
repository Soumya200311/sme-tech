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
      Unified Communication
      </div>
 </div>

<div style={{ textAlign:'left', padding:'70px', paddingLeft:'390px', paddingRight:'370px' ,   lineHeight:'16px'}} >
<p>  There is a lot of buzz about Unified Communication.  Well, what is it?  How do I get to understand whether this is a technology suite which can change the way I do business? How can I get on board with this?  </p>
<br/>
<p>  At its simplest, UC refers to a convergence of communication channels into one integrated platform.  We’re able to take Instant Messaging, online Presence, Voice Audio, Extension Mobility, Video, Conferencing, and roll all of these into one suite – hence unified.    No longer are these capabilities the realm of the enterprise – they’re accessible and available to the smaller enterprise, affordably.  If you need to make a paradigm shift in how your business collaborates, either internally or externally, then you may benefit from a UC solution.</p>
<br/>
<p>   Still confused?  Give us a call and we’ll take enormous pleasure in expanding further on this.</p>
<br/>
<p>   And the best thing is, you don’t need to use all of these capabilities if they don’t make sense to your business.  A UC system can easily scale to your business needs.</p>
<br/>
<p> An SME Tech deployed system is always deployed securely to give you peace of mind and confidence, whether this is our cloud-based offering or a on-premise solution.</p>
<br/>
<p>  If you want to make a difference to your business in terms of productivity, single infrastructure, work force mobility, and cost reduction, then please contact us to pursue further. </p>
</div>


<Footer/>
    </div>
  )
}

export default page
