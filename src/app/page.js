import Image from 'next/image';
import Link from 'next/link';
import { Emoji } from 'emoji-mart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
const Page = () => {
  return (


    <div className='bg-white'>
    <div className='  bg-slate-50'>


     

<Navbar/>     
 <div style={{ position: 'relative', marginTop:'0px',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="/homee.png"
        alt="home"
        width={1950}
        height={300}
        style={{ opacity: 0.4 }}
      />
    </div>
    </div>

<h1 style={{ textAlign: 'center '  , fontSize:'40px', paddingTop:'50px' }} >WELLCOME TO SME TECH</h1>
<div className="container mx-auto px-5 py-24">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        <Card subtitle="REMOTE WORKING" description="Specialist Support enable secure remote access" image="/1.png" />
        <Card subtitle="INTERNET" description="Select the best internet service for your needs" image="/2.png" />
        <Card subtitle="ICT LANDSCAPE" description="Total IT Audit, Service, Support" image="/3.png" />
        <Card subtitle="CYBER SECURITY" description="Delivering SOPHOS comprehensive security portfolio" image="/4.png" />
        <Card subtitle="UNIFIED COMMUNICATION" description="Converged Voice, Video, Chat, Messaging, Mobility" image="/5.png" />
        <Card subtitle="CONTACT US" description="Contact us today with any of your enquiries" image="/6.png" />
      </div>
    </div>
  <Footer/>
    </div>
  );
};

export default Page;
