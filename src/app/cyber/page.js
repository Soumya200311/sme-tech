import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
   <div  style={{ padding:'60px', paddingLeft:'390px', paddingRight:'400px'}} >
  <p>
  The modern world we live in is dynamic and constantly changing.
</p>
<br/><p>
This change means that “old-school”  techniques based on static defence are no longer adequate.
</p>
<br/>
<p>
What the modern business (large or small) needs is a layered, highly responsive, adaptive and comprehensive security solution which not only provides firewalls, but also pro-actively defends against denial of service attacks, offers a unified threat management service, includes anti-virus and malware detection, provides data loss prevention services, email security.  In all, a comprehensive security suite to uniformly encompass and secure your business assets and IP.
</p>
<br/>
<p>
Backed by one of the leading security services providers internationally, SME Tech can deliver your business security suite (or elements of it) through either a dedicated on-site solution, or our Sophos Managed Security platform which means your security monitored 24/7 – automated intervention means we’ll remediate issues before you even know that they (were) there.  Read our blog here.

  </p>


   </div>

    <Footer/>
    </div>
  );
}

export default page;
