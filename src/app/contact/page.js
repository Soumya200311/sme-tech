import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Card from '../components/Card'
const page = () => {
  return (
    <div>
      <Navbar />
      <div style={{ position: 'relative', marginTop: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src="/keyb.png"
          alt="keybo"
          width={1950}
          height={100}
          layout="responsive"
        />
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          textAlign: 'center'
        }}>
          Contact
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', color: '#0d0d0d' }}>Contact Us Today with Your Enquiries</h1><br />
        <h2 style={{ fontSize: '20px', color: '#333333' }}>Our contact details can be found below. Alternatively, you can send us an email using the contact form.</h2>
      </div>
      <div className="flex justify-center" style={{ paddingTop: '60px' }}>
      <div className="flex flex-col items-center justify-around w-full md:flex-row md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-3/5">
        
           <div
            className="flex flex-col md:items-start space-y-4 w-full text-gray-700 mx-4 text-sm font-medium"
            style={{ height: '380px', maxWidth: '950px', fontSize: '16px' }}
          >
            <div className="text-2xl" style={{ fontWeight: 'bold' }}>SME Tech Ltd</div>
            <div className="font-bold">Address</div>
            <div>Rolleston, 7614, Canterbury, New Zealand</div>
            <div className="font-bold">Mailing Address</div>
            <div>10 Manor Drive, Shearalea, Rolleston, 7614, Canterbury, New Zealand</div>
            <div>Phone:</div>
            <a href="tel:+1234567890" style={{ color: 'blue' }}>705-784-3221</a>
            <div>E-mail</div>
            <a href="mailto:enquiries@smetecg.co.nz" style={{ color: 'blue' }}>enquiries@smetecg.co.nz</a>
          </div>

          <div className="text-gray-800 m-4 items-start border-gray-900 flex flex-col w-full space-y-3">
            <input placeholder="Name" className="border border-gray-400 px-2 py-1 w-full" />
            <input placeholder="Phone" className="border border-gray-400 px-2 py-1 w-full" />
            <input placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
            <textarea placeholder="Message" type="text" className="border border-gray-400 py-1 px-2 w-full h-20 md:h-40"></textarea>
            <button className="text-white px-5 font-medium hover:bg-gray-600 py-1 bg-blue-700">Send</button>
          </div>
        </div>
      </div>

      <div style={{ fontSize: '28px', textAlign: 'center', padding: '30px', paddingTop: '60px', paddingBottom: '50px' }}>
        Delivering to Rolleston, iZone, Selwyn, Christchurch, Canterbury and beyond.
      </div>

      

      <div>
        <section className="text-gray-600 body-font relative" style={{ paddingBottom: '90px' }}>
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: 'graycale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default page
