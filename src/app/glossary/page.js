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
     Glossary
      </div>

    </div>

    <div style={{ padding: '120px', paddingLeft:'390px', paddingRight:'420px' }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>60+1 Second (or Per Second) Billing Increments</h1>
        <p style={{ fontSize: '15px' }}>Call costs are calculated (in part, at least) using the number of seconds, multiplied by the billing rate. 60 + per second billing increment phone plans typically save approximately 30-50% compared to a 60+60 sec billing increment plan.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>60+60 Second Billing Increments</h1>
        <p style={{ fontSize: '15px' }}>Call costs are calculated (in part, at least) by finding the number of billing increments used (in this case 60 seconds), and multiplying by the billing rate per increment. For example: 60 second billing increment phone plans will charge the same amount for call durations 6 sec, 14 sec, and 30 sec. They will also charge the same for calls which are 31 sec, 44 sec, and 60 seconds.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Access Fee</h1>
        <p style={{ fontSize: '15px' }}>Monthly charge from a service provider for provision of that service. Call charges are additional to this charge. Also may be referred to as a Service Fee or Connection Fee. Distinct from a Connection Charge, which is the charge for connection of an individual call.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ADSL</h1>
        <p style={{ fontSize: '15px' }}>Asymmetric Digital Subscriber Line (ADSL) is a form of DSL, a data communications technology that enables faster data transmission over copper telephone lines.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ADSL2+ – Asymmetric Digital Subscriber Line Two</h1>
        <p style={{ fontSize: '15px' }}>A technology for the delivery of faster ADSL. Exchanges must be ADSL2+ enabled. Speeds available start at 24000/3000 kbps and reduce with distance from the exchange, hardware used, quality of the copper pair used, etc.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Agent</h1>
        <p style={{ fontSize: '15px' }}>A representative who acts on behalf of other persons or organizations. Or, a businessman who buys or sells for another in exchange for a commission. In telecommunications, an agent is typically a person or company who has a contractual agreement with a Service Provider, whereby they will obtain a commission or similar for bringing new customers to that provider.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Analog</h1>
        <p style={{ fontSize: '15px' }}>The technology originally used to transmit radio (including mobile phone) and TV communications. Superseded in many communications areas today. Digital communications are now being used in mobile telephony, and TV delivery is broadcast using both analog and digital methods.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Area Code</h1>
        <p style={{ fontSize: '15px' }}>Prefix added to a phone number to denote the location of that number. In New Zealand, regional & national calling often requires an area code.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Authentication</h1>
        <p style={{ fontSize: '15px' }}>Verification of the identity of a user to a network, or a network to the user. Passwords, digital certificates, smart cards, and biometrics can be used to authenticate a user. In the case of mobile phones, a user may be authenticated to the network to ensure that they are 'activated' – with an account and credit on that network. Conversely, Mobile networks may authenticate themselves to a user's mobile phone to ensure that the phone is locked to their network.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>B2B – Business to Business</h1>
        <p style={{ fontSize: '15px' }}>Commercial term meaning Business-to-Business commerce, as distinct from Business-to-Consumer or Retail Business.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Backbone Network</h1>
        <p style={{ fontSize: '15px' }}>The electronic 'spine' of a telecommunications network which joins slower and dispersed network elements. A common telecommunications backbone in New Zealand carries network traffic between Auckland and Wellington and is a private, managed network. Telecom and TelstraClear all have such networks.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>BAN – Billing Account Number</h1>
        <p style={{ fontSize: '15px' }}>The account number attached to a service(s). Most often a customer will only have a single BAN from a service provider. However, customers may elect to have several BANs; to designate between sites, for example.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bandwidth</h1>
        <p style={{ fontSize: '15px' }}>Refers to the amount of data that can be transmitted in a fixed amount of time. For digital devices, the bandwidth is usually expressed in bits per second (bps) or bytes per second.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Billing Codes</h1>
        <p style={{ fontSize: '15px' }}>These are the letters, which appear on your bill beside the calls you have made, e.g., O for off-peak and P for peak.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bit</h1>
        <p style={{ fontSize: '15px' }}>The smallest unit of information on a computer, a bit, is expressed by a 1 or a 0. A kilobit equals 1,000 bits. A megabit, 1 million bits.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Blackberry</h1>
        <p style={{ fontSize: '15px' }}>The BlackBerry from RIM Corporation is a handheld wireless device providing e-mail, telephone, text messaging and web browsing and other wireless data access. In New Zealand, BlackBerry operates mostly on the GPRS, CDMA, and 3G networks. However, BlackBerry will begin operating at higher speeds as networks are upgraded.</p>
      </div>
      <br />

      
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>60+1 Second (or Per Second) Billing Increments</h1>
        <p style={{ fontSize: '15px' }}>Call costs are calculated (in part, at least) using the number of seconds, multiplied by the billing rate. 60 + per second billing increment phone plans typically save approximately 30-50% compared to a 60+60 sec billing increment plan.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>60+60 Second Billing Increments</h1>
        <p style={{ fontSize: '15px' }}>Call costs are calculated (in part, at least) by finding the number of billing increments used (in this case 60 seconds), and multiplying by the billing rate per increment. For example: 60 second billing increment phone plans will charge the same amount for call durations 6 sec, 14 sec, and 30 sec. They will also charge the same for calls which are 31 sec, 44 sec, and 60 seconds.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Access Fee</h1>
        <p style={{ fontSize: '15px' }}>Monthly charge from a service provider for provision of that service. Call charges are additional to this charge. Also may be referred to as a Service Fee or Connection Fee. Distinct from a Connection Charge, which is the charge for connection of an individual call.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ADSL</h1>
        <p style={{ fontSize: '15px' }}>Asymmetric Digital Subscriber Line (ADSL) is a form of DSL, a data communications technology that enables faster data transmission over copper telephone lines.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ADSL2+ – Asymmetric Digital Subscriber Line Two</h1>
        <p style={{ fontSize: '15px' }}>A technology for the delivery of faster ADSL. Exchanges must be ADSL2+ enabled. Speeds available start at 24000/3000 kbps and reduce with distance from the exchange, hardware used, quality of the copper pair used, etc.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Agent</h1>
        <p style={{ fontSize: '15px' }}>A representative who acts on behalf of other persons or organizations. Or, a businessman who buys or sells for another in exchange for a commission. In telecommunications, an agent is typically a person or company who has a contractual agreement with a Service Provider, whereby they will obtain a commission or similar for bringing new customers to that provider.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Analog</h1>
        <p style={{ fontSize: '15px' }}>The technology originally used to transmit radio (including mobile phone) and TV communications. Superseded in many communications areas today. Digital communications are now being used in mobile telephony, and TV delivery is broadcast using both analog and digital methods.</p>
      </div>
      <br />
      {/* Add more div blocks with headings and paragraphs followed by line breaks */}
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bluetooth</h1>
        <p style={{ fontSize: '15px' }}>Bluetooth® complements wireless LAN perfectly by providing a quick and easy way of connecting one Bluetooth®-enabled device to another without going through your network. For example, you could print a document at a satellite office from your laptop to any Bluetooth®-enabled printer within range (Bluetooth®, products work over shorter distances than wireless networks – approximately 10 meters). In addition, by creating a temporary network, (also known as a personal area network – PAN) you can exchange files at informal meetings – say, around a client's conference table. Put simply, Bluetooth®, provides the opportunity for flexible, spontaneous working, especially if you don't have the time to connect to a fixed or wireless network.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>BPS</h1>
        <p style={{ fontSize: '15px' }}>Bits per Second. A measurement of data transfer speed. Rates are the number of bits that are transmitted per second. See also Kbps.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Broadband Phone</h1>
        <p style={{ fontSize: '15px' }}>See VoIP.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Broadband telephony</h1>
        <p style={{ fontSize: '15px' }}>See VoIP.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Browser</h1>
        <p style={{ fontSize: '15px' }}>A software application which facilitates interaction with the World Wide Web. A browser uses HTTP to interact with Web servers online. Also called a Web Browser.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bundling</h1>
        <p style={{ fontSize: '15px' }}>Combining any or all telecommunication services from a single provider. Bundled offers usually confer a discount on one or more services.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Byte</h1>
        <p style={{ fontSize: '15px' }}>A byte consists of 8 bits, the smallest unit of information on a computer, expressed as either a 1 or a 0. The expression 01001101 is equal to one byte of information. A kilobyte is 1,000 bytes of information. A megabyte is 1 million bytes.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Cable Broadband</h1>
        <p style={{ fontSize: '15px' }}>Use of a coaxial cable (the same used for pay-TV connections) to deliver internet connections at up to 10 Mbps.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Call Barring</h1>
        <p style={{ fontSize: '15px' }}>The barring of outgoing calls, to selected numbers or groups of numbers, may be applied to both mobile phones and fixed services. This is a network feature.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Call Centre</h1>
        <p style={{ fontSize: '15px' }}>A call centre (or Call Center) is a business unit whose purpose is to handle inbound/outbound telecommunications traffic for a company. A Contact Centre is more highly integrated and such a unit might handle various forms of correspondence between the company and its customers.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Call Congestion</h1>
        <p style={{ fontSize: '15px' }}>The saturation of the available simultaneous connections on a communications channel by users. Applies to both Fixed Lines services and Wireless services (including Mobile services).</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Call Divert</h1>
        <p style={{ fontSize: '15px' }}>Often also called Call Forward, Call Divert is the ability to divert an incoming call to a designated number or service. Usual call charges often apply (however some of these charges might be reduced or removed by some Mobile service providers). Available to both Mobile and Fixed Line services. Call diversion products typically offer many conditional options (e.g., Divert All Calls, Divert on No Answer, Divert on Unreachable, Divert on Busy, etc.).</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Call Minder (brand name)</h1>
        <p style={{ fontSize: '15px' }}>Telecom product brand name for a voicemail service. For landlines: Callers can be directed to Call Minder when their call is unanswered or if the phone is busy. You can check your messages from any phone by calling your Call Minder (by dialing 083210) and entering your secret PIN. There is a monthly fee added to your phone bill for this service.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Call Waiting</h1>
        <p style={{ fontSize: '15px' }}>The ability to alert the user to the presence of a second incoming call to their current connection. The user has the option to retrieve the second call, while maintaining their initial connection. Either party may then be disconnected by the user, at their discretion. This feature is available for both Fixed Services (although not all types of Fixed Services) and for Mobile Services.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Caller ID</h1>
        <p style={{ fontSize: '15px' }}>Also referred to as CID. This feature provides the caller's telephone number information whilst the call is ringing. The CID information is usually contained between the first and second ringing tone. CID may be blocked (on landlines) by the caller or by requesting a permanent block from the service provider. This information is obtained by using the relevant parts of CLI (Caller Line Identification) information.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Carriage Service Provider</h1>
        <p style={{ fontSize: '15px' }}>Often referred to as Rebillers or Resellers of telecommunications services. These are service providers who are not carriers themselves.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Carrier</h1>
        <p style={{ fontSize: '15px' }}>Telecommunications Carriers are the owners/maintainers of a telecommunications network (either Mobile or Landline). Not all Telecommunications Providers are Telecommunications Carriers; some are resellers of a Carrier's network.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>CDMA</h1>
        <p style={{ fontSize: '15px' }}>CDMA (code-division multiple access) refers to any of several protocols used in so-called second-generation (2G) and third-generation (3G) wireless communications.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Churn</h1>
        <p style={{ fontSize: '15px' }}>Term to denote the switch of a customer between telecommunications service providers.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>CLI – Calling Line Identification</h1>
        <p style={{ fontSize: '15px' }}>The provision of the calling party's number, called party's number, time of call, routing information, duration, and other minor information between service providers. Often billed as CLIP – Calling Line Identification Presentation. Part of this information may be used to provide CND (Calling Number Display) to the called party.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>CND – Calling Number Display</h1>
        <p style={{ fontSize: '15px' }}>The display of the calling party's number as the call is ringing. CND is typically sent (as an inaudible signal) between the first and second dial tones of a call. The caller may elect to have their CND information blocked on a per-call basis (by prefixing the called number by 1831) or permanently blocked through their service provider. Also called Calling Name Display, Caller ID (or CID) and CNI (Calling Number Identification). CLI differs from CND and the others. See also CLI (Caller Line Identification).</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Coded Access</h1>
        <p style={{ fontSize: '15px' }}>Each service provider has its own four-digit override code. Calls to domestic or international destinations may be made through a provider by dialing their code before the required number. Override codes may be used on a call-by-call basis. (The user should also have an account with that provider, otherwise the call may be blocked.) Pre-programming a PABX to use override codes for certain call types is one form of LCR (Least Cost Routing).</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Connection Fee</h1>
        <p style={{ fontSize: '15px' }}>A one-time fee for the setup of your phone service.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Convergence</h1>
        <p style={{ fontSize: '15px' }}>For Telecommunications: As communications transmission and storage have become digitized, consolidation of various forms of communications (e.g., voice, data, and video) has become a possibility. Convergence is the likely joining of two or more communications forms into a single user product. The advantages for consumers are convenience and cost savings. The advantages for service providers are cost savings (through reduced operational expenses and capital expenditure) and increased customer loyalty.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Copper (Wire) Network</h1>
        <p style={{ fontSize: '15px' }}>The New Zealand telecommunications network mostly remains a simple copper network. Also known as POTS (Plain Old Telephone Service) This describes copper lines connected to premises from local exchanges and then switched through other exchanges, for ultimate delivery to another premises. Telecommunications transmissions travel over these lines. Today, there are other methods of telecommunications transmissions such as IP networks, satellite networks, wireless networks (including Mobile Phone Networks).</p>
      </div>
      <br />
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>CSP – Carriage Service Provider</h1>
        <p style={{ fontSize: '15px' }}>Often referred to as Rebillers or Resellers of telecommunications services. These are service providers who are not carriers themselves.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Cutover</h1>
        <p style={{ fontSize: '15px' }}>The moment when a service, or element of infrastructure, is moved from one service provider to another. See also Port, for mobile phones, and see ULL, for fixed services.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>DA – Directory Assistance</h1>
        <p style={{ fontSize: '15px' }}>Operator-assisted (or possibly a CVR-assisted) telephone directory service which provides the user the phone number of a residence or business. Number must be listed in the telephone directory.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Dial-up</h1>
        <p style={{ fontSize: '15px' }}>A non-broadband internet connection to an ISP. The connection is made by a modem dialling the ISP through the traditional PSTN network.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>DDI – Direct Dial-In</h1>
        <p style={{ fontSize: '15px' }}>The use of a 100 InDial Range with a PABX, which allows an outside caller to dial a phone number that will ring directly to a specific party instead of calling a main phone number. The PABX must be programmed to assign that number to a specific extension.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Digital</h1>
        <p style={{ fontSize: '15px' }}>The representation of information using discrete elements called binary code. In everyday use (especially in voice communications) digital signals are used to represent analog information. Digital signals are useful because they can represent analog signals, can be easily handled by computer systems and networks (themselves, digital systems), can be compressed, and do not degrade with reproduction.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Digital Subscriber Line</h1>
        <p style={{ fontSize: '15px' }}>Use of an existing `subscriber line` (traditional phone line) to deliver digital data at broadband speeds. The local exchange (where the copper loop telephone line is connected) must be `enabled` with DSL technology.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Direct Dialling</h1>
        <p style={{ fontSize: '15px' }}>Previously direct dialling was the event of dialling an intended party without the aid of an operator. Nowadays, Direct Dialling is still commonly used in two circumstances. IDD (International Direct Dialling) is connection to an international destination without the aid of an operator. IDD is still in use in vernacular because pricing structures quote IDD rates. The second common use for Direct Dialling is for Direct In Dialling (called `Direct Dialling In` by the Brits). Direct In Dialling is where a phone system (PABX) can recognize an incoming dialed number, bypass the main answering point (e.g., the receptionist), and pass the call directly to the correct extension. DID usually requires a 100 number range.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Directory Assistance</h1>
        <p style={{ fontSize: '15px' }}>Operator-assisted (or possibly a CVR-assisted) telephone directory service which provides the user the phone number of a residence or business. Number must be listed in the telephone directory.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>DNS – Domain Name Server</h1>
        <p style={{ fontSize: '15px' }}>A server which translates the URL of a website into its actual numeric IP address. When a browser requests a web page, the domain name server is consulted for the actual IP address. Humans use words to define web addresses, computers use numeric IP addresses.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Domestic Call</h1>
        <p style={{ fontSize: '15px' }}>A call within New Zealand.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Drop Out</h1>
        <p style={{ fontSize: '15px' }}>The accidental disconnection of a phone call. Applies to both Fixed Line services (including VoIP) and Mobile Services. VoIP users also call partially missing words a `drop-out`.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>DSLAM – Digital Subscriber Line Access Multiplexer</h1>
        <p style={{ fontSize: '15px' }}>Also called a Digital Subscriber Line Access Module or a Mux. This is a hardware interface between DSL lines and a network `backbone`. DSLAMs are located in the local exchange. DSLAMs also provide the interface for ULL supply of voice/internet connections – these internet connections are usually faster than normal ADSL connections.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Duplex</h1>
        <p style={{ fontSize: '15px' }}>The ability for both ends of a communication to send and receive data. Telephones are a Duplex communication because both parties can talk at the same time; 2-way radios are half-duplex because only one party can talk at any one time.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>E-mail – Electronic Mail</h1>
        <p style={{ fontSize: '15px' }}>Mail composed and transmitted on a computer system or network. Email is technically merely text, but multimedia attachments often accompany it.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>EAP – Extension Authentication Protocol</h1>
        <p style={{ fontSize: '15px' }}>Designed to extend the PPP (Point to Point Protocol), the EAP incorporates traditional passwords, token keys, digital certificates and public-key authentications.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Email</h1>
        <p style={{ fontSize: '15px' }}>E-mail (electronic mail) is the exchange of computer-stored messages by telecommunication. Generally text messages, non-text files such as graphic images and sound files can be sent as attachments. E-mail was one of the first uses of the Internet and is still the most popular use. A large percentage of the total traffic over the Internet is e-mail. A popular protocol for sending e-mail is Simple Mail Transfer Protocol (SMTP) and a popular protocol for receiving it is POP3. Both Netscape and Microsoft include an e-mail utility with their Web browsers.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Emergency Numbers</h1>
        <p style={{ fontSize: '15px' }}>Telephone numbers for the Emergency Services: Police, Fire & Ambulance. These numbers are free to call and should only be used in situations which are life-threatening or there is imminent risk to either property or the environment. Related: 111 – Emergency, 112 – Emergency for Mobiles</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>EMR – Electromagnetic Radiation</h1>
        <p style={{ fontSize: '15px' }}>Energy transfer in the form of electric and magnetic field fluctuations. These waves or particles propagate through space at the speed of light.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>EMS – Electromagnetic Spectrum</h1>
        <p style={{ fontSize: '15px' }}>Term for the entire range of electromagnetic radiation types. The spectrum is divided into seven sections; from the longest wavelengths to the shortest: radio, microwave, infrared, visible, ultraviolet, x-ray, and gamma-ray radiation. Mobile phones operate in the radio section.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Encryption</h1>
        <p style={{ fontSize: '15px' }}>The process of encoding data. Data is often encrypted before it is transmitted over an unsecure medium, then decrypted at its destination using a process or key for that purpose.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ESN</h1>
        <p style={{ fontSize: '15px' }}>All CDMA phones have a unique Electronic Serial Number (ESN). When you activate the phone on the CDMA network, the ESN is linked to the CDMA service and phone number.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ESN – Electronic Serial Number</h1>
        <p style={{ fontSize: '15px' }}>The unique hexadecimal serial number of a CDMA phone (and previously, analog mobile phones). The ESN is registered with a service provider as part of a mobile`s activation process. See also IMEI.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ETC – Early Termination Charge</h1>
        <p style={{ fontSize: '15px' }}>The amount charged by a service provider for the early termination of a contract. For Mobiles, this is usually the number of months remaining on the contract multiplied by the minimum monthly commitment of that contract. For Landlines, this is often the repayment of any previously granted bonuses and the payment of a nominated monthly amount multiplied by the remaining months of the contract period. Also called a Cancellation Fee, Contract Cancellation Fee, Contract Termination Charges, etc.</p>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Ethernet</h1>
        <p style={{ fontSize: '15px' }}>Ethernet is the most widely-installed local area network (LAN) protocol. Officially, Ethernet (at up to 10Mbps) and Fast Ethernet (at up to 100Mbps) are the two grades. Now the term Ethernet generally refers to Fast Ethernet, due to this being the prevalent type used. Ethernet is generally transferred using CAT-5 or CAT-5e cables (`the blue computer cables`), or over a wireless LAN link.</p>
      </div>
      <br />
      <div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Exchange</h1>
  <p style={{ fontSize: '15px' }}>Premises for the switching equipment which allows for connection of calls. Switching occurs for local, STD, calls to mobiles and international calling. Also called, Telephone Exchange.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Extended Zones Agreement</h1>
  <p style={{ fontSize: '15px' }}>Special regional zone which allows for untimed local calls to neighboring zones and to a community service town various community services are accessed.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>External IP Address</h1>
  <p style={{ fontSize: '15px' }}>IP address of a computer on an external network – most commonly the internet. Computers use IP addresses to identify one another. Websites are held on servers, and are assigned a unique IP address. Mail servers also have a unique IP address. External IP addresses may also be called Public IP addresses.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Facsimile</h1>
  <p style={{ fontSize: '15px' }}>Called a fax in common use. The digitisation of an image and then transmission of that image. Superseded the Telex.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Fax/Data Facility</h1>
  <p style={{ fontSize: '15px' }}>Feature of a mobile phone which allows data to be sent and received as per fax protocols.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Faxability (brand name)</h1>
  <p style={{ fontSize: '15px' }}>Telecom product. Faxability refers to the addition of a second line which shares the same telephone line as an existing service. Faxes may still be received while the line is busy, and are queued at the exchange until the line is free. Faxability has become a valuable tool for many small businesses.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>FCC – Federal Communications Commission (USA)</h1>
  <p style={{ fontSize: '15px' }}>US body for the Regulation of interstate communications: licenses, rates, tariffs, standards, limitations, etc.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>FDDI – Fibre Distributed Data Interface</h1>
  <p style={{ fontSize: '15px' }}>A high-speed (up to 100Mbps) LAN ANSI standard for a fibre optic connection.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>FDM – Frequency Division Multiplexing</h1>
  <p style={{ fontSize: '15px' }}>Multiplexing protocol where the available transmission frequency range is divided into separate channels. Data is segmented and transmitted over these various channels. Data is reconstructed at the destination.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Fibre Optic Cable</h1>
  <p style={{ fontSize: '15px' }}>Grouped glass, plastic or hybrid fibres which are used to transmit digital pulses of light for data transmission. High bandwidth solution which may carry voice, video and data. Commonly called `Cable`.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>FireWalls</h1>
  <p style={{ fontSize: '15px' }}>Hardware and/or software designed to prevent unauthorized access to (or from) a private network. Firewalls are commonly positioned between the internet and all internal infrastructures (PCs, LAN, Intranet, etc.).</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Find me Follow me</h1>
  <p style={{ fontSize: '15px' }}>Delivery of calls to a user through multiple numbers at the same time such as desk phone, mobile phone and home phone simultaneously allowing the customer to pick up the call regardless of location.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Follow-Me Roaming</h1>
  <p style={{ fontSize: '15px' }}>Delivery of calls to a user through an alternate network (while that user is out of range from their pre-selected network or whilst that user has requested the routing). See also Roaming.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Frame Relay</h1>
  <p style={{ fontSize: '15px' }}>Typically used for LAN to LAN data connection over distances, frame relays are prescribed connection paths. The end user experience is a (virtual) permanent connection between LAN sites. Frame relay is a protocol for variable-length packet transmission of data. Designed for use as a low-noise connection, redundant- and dark- data are not generally used, which leads to high transmission rates. Frame relays may transmit bursts of data at up to 45Mbps. Due to its transmission burst nature, frame relays are not ideal for transmission of continuous signals such as voice and video.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>FreeCall Number</h1>
  <p style={{ fontSize: '15px' }}>Toll Free Number. A FreeCall number is a Toll-Free number but with no connection charges. The call is charged to the owner of the number. As with all toll-free numbers, the call is routed to a nominated answering point. The answering point itself may be dynamic; it may be dependent on time of day (TOD), caller location, or calling traffic overflows.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>FTP – File Transfer Protocol</h1>
  <p style={{ fontSize: '15px' }}>Process for transferring files over the internet or another TCP/IP network. FTP is also often used to describe the software interface used for transfers. Files available to be shared are held on a server. Users may be required to logon to the server using either a secured username and password or by an `anonymous` logon (an unsecured and generic logon). Files may then be downloaded from the server (or uploaded, if permitted).</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Global Roaming</h1>
  <p style={{ fontSize: '15px' }}>The ability to use a mobile phone overseas. Tri-band and Quad-band phones allow roaming through the USA. GSM and GPRS phones will provide roaming throughout most of the international community. CDMA phones do not (practically) offer international roaming. Roaming charges are substantial.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>GPRS</h1>
  <p style={{ fontSize: '15px' }}>GPRS stands for General Packet Radio Service, this standard allows packet rather than circuit switch connections on cellular networks. This allows high-speed mobile access and the ability to connect to the mobile network when Internet access is required.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>GPS</h1>
  <p style={{ fontSize: '15px' }}>GPS is short for Global Positioning System, GPS refers to satellite-based radio positioning systems that provide 24 hour three-dimensional position, velocity and time information to suitably equipped users anywhere on or near the surface of the Earth (and sometimes off the earth). GPS technology is used in a wide range of applications, including maritime, environmental, navigational, tracking and monitoring.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>GST</h1>
  <p style={{ fontSize: '15px' }}>Goods and Services Tax (GST) is a Government initiative and is a 12.5% tax on most goods and services supplied. Every business that supplies goods and services collects GST for the IRD. This means that the price of their goods and services include a GST amount.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Handset</h1>
  <p style={{ fontSize: '15px' }}>Overall, a handset is any hand-held device which is used to make and receive phone calls. Refers to mobile phones, cordless phones or landline handsets. However, usually refers to a mobile phone handset. Also called a mobile, cell, cell phone or cellular phone. Cordless handsets are also called portable phones, DECT phones (common-use language) or wireless phones. Landline handsets may refer to a stand alone handset directly connected to a socket or to a handset which is part of a phone system (eg. a handset connected to a PABX).</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Handset Included</h1>
  <p style={{ fontSize: '15px' }}>Mobile phone handset, which is included in the offer of a mobile phone contract. The handset may be subsidised, free or $0. Subsidised handsets may be bought outright or included as a monthly charge. Free handsets are free, with `no strings attached`. $0 (called `zero-dollar`) handsets are offered at no charge, so long as the customer remains in contract with the provider. After the contract period is finished, a $0 handset is owned by the customer.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Handsfree</h1>
  <p style={{ fontSize: '15px' }}>The ability to converse on a mobile phone without using one`s hands to hold the handset.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Handshake</h1>
  <p style={{ fontSize: '15px' }}>Signals between two network nodes (eg. a mobile handset and a base station, a wireless laptop and a wireless router, etc.) which precede interoperation. Often a handshake will incorporate security authorisation.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>HDSL – High Capacity Digital Subscriber Line</h1>
  <p style={{ fontSize: '15px' }}>Symmetric DSL which usually has a slower maximum download speed than an ADSL over the same connection. Useful for high levels of data being sent and for VoIP applications.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>HFC – Hybrid Fibre Coaxial (Cable)</h1>
  <p style={{ fontSize: '15px' }}>A description of the Cable TV and Cable Internet network in New Zealand. Optical fibre is used in all exchanges and hubs, and coaxial cables run from the hubs to customer premises.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Hotspots</h1>
  <p style={{ fontSize: '15px' }}>Hotspots are public WLANs located in airports, hotels, conference centres and other public areas across the UK and the rest of Europe. (You may have seen the logo in your local Starbucks Coffee Shops.) When you`re within range of a Hotspot, you can connect wirelessly to the Internet via your laptop or PDA. Presently there are hundreds of Hotspots throughout the UK and the rest of Europe, with many more planned for the very near future.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>HTML – Hypertext Markup Language</h1>
  <p style={{ fontSize: '15px' }}>The authoring software for webpages. Web Browsers read HTML code to present webpages as they are intended.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>HTTP – Hypertext Transfer Protocol</h1>
  <p style={{ fontSize: '15px' }}>Protocol for the operation of the internet. Webpages consist of text, images, etc. and HTTP is the protocol for their transfer between users and servers.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Hz – Hertz</h1>
  <p style={{ fontSize: '15px' }}>Frequency rate measurement as cycles per second. Typically, Hz are used when quantifying wave transmissions such as EMR (eg. light, x-rays, UV, radio (including mobile phone transmissions), television, electrical current, etc.) and sound.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IAP – Internet Access Provider</h1>
  <p style={{ fontSize: '15px' }}>Wholesaler of internet bandwidth to ISPs. See ISPs (Internet Service Providers).</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ICANN – Internet Corporation for Assigned Names and Numbers</h1>
  <p style={{ fontSize: '15px' }}>Non-profit organisation which is the worldwide central body for administration of IP addresses and domain names used on the internet.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IDD – International Direct Dialling</h1>
  <p style={{ fontSize: '15px' }}>Connection of a call to an international destination number without the aid of an operator. IDD is still in common use because it is used to quote international calling rates. IDD can be done from fixed lines or from mobiles. Not to be confused with international roaming calls, see below.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IMT2000</h1>
  <p style={{ fontSize: '15px' }}>Global standards for 3G mobile network performance, from the ITU (International Telecommunications Union).</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>In-place Service</h1>
  <p style={{ fontSize: '15px' }}>Alternately called an in-place number or an in-place line. The service may be reconnected without a technician site visit. A service is in-place if there has been a previous connection at the address and the line remains in-place. A phone line with a dial tone is an in-place service, and in some cases a line without a dial tone may be considered in-place.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Included Calls</h1>
  <p style={{ fontSize: '15px' }}>The cost of calls, messages and other uses which the minimum monthly cost allows. May apply to mobiles or to landline phone services. Most often, the included calls match the minimum monthly spend. Included calls may be measured in minutes or in dollar value.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Infrared</h1>
  <p style={{ fontSize: '15px' }}>Infrared is similar to Bluetooth in that it`s another method of peer-to-peer networking. Here data is transmitted via radio waves across short distances from device to device. (The range data can be sent using infrared is shorter than with Bluetooth.) You could, for instance, send a text document to a colleague by bringing your notebooks close together and exchanging the data via each device`s infrared port.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Inmarsat – International Maritime Satellite Organisation</h1>
  <p style={{ fontSize: '15px' }}>The providers of coverage for some satellite phones. This satellite network provides coverage to 100% of New Zealand. Sat Phones are often kept for emergency use in remote areas.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Interactive Services</h1>
  <p style={{ fontSize: '15px' }}>Video, voice or data interaction over a communications channel. Inputs may be from either party.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Interconnection Fee</h1>
  <p style={{ fontSize: '15px' }}>Fee charged for routing a mobile phone call to a landline.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Internal IP Address</h1>
  <p style={{ fontSize: '15px' }}>IP address of a computer on an intranet. Computers use IP addresses to identify one another. (Not to be confused with an External IP address.)</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>International Call</h1>
  <p style={{ fontSize: '15px' }}>Calls that originate in one country and terminate in another. The call may be either operator assisted or direct dialled (eg. IDD calls). Applies to both mobile phones and to landlines.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>International Roaming</h1>
  <p style={{ fontSize: '15px' }}>Allows a mobile phone to be used overseas when a roaming agreement exists between the user`s New Zealand mobile phone company and a mobile phone company overseas. See also Roaming.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>International Switched Transit</h1>
  <p style={{ fontSize: '15px' }}>Process of routing a telecommunications connection between two countries through an intermediary country.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Internet</h1>
  <p style={{ fontSize: '15px' }}>The global network of computer networks, which provides access to millions of resources. Information is transferred using the TCP/IP protocols. Simple user interfaces which</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Internet telephony</h1>
  <p style={{ fontSize: '15px' }}>See VoIP</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Intranet</h1>
  <p style={{ fontSize: '15px' }}>A private IP network. (Not to be confused with the internet.)</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IP – Internet Protocol</h1>
  <p style={{ fontSize: '15px' }}>Protocol for data packet transfers. Forms the basis for most networks, including the internet. IP packets are data packets consisting of a header and attached data. Packets are often sent using a TCP (Transfer Control Protocol) to aid delivery. At the terminus of the data transmission, IP packets are reassembled into the original data form.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IP Address</h1>
  <p style={{ fontSize: '15px' }}>A numeric IP address, which often can be translated into a webpage address (External IP Address) or a computer`s address in an intranet (Internal IP Address). Computers use IP addresses as identifiers.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IP Telephony</h1>
  <p style={{ fontSize: '15px' }}>See VoIP</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IR – Infrared</h1>
  <p style={{ fontSize: '15px' }}>Non-visible part of the EMS (Electromagnetic Spectrum) which can be used as a wireless communications medium. Line-of-sight is required between the sending and receiving devices. Most commonly used for remote control units for TV sets, DVD players, etc.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IRD – Inland Revenue Department</h1>
  <p style={{ fontSize: '15px' }}>Government department responsible for the collection of taxes. In New Zealand, the GST is collected by the IRD.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ISDN – Integrated Services Digital Network</h1>
  <p style={{ fontSize: '15px' }}>Digital transmission over a phone line. Provides a single connection for multiple uses, eg. voice, video and data. An ISDN line may connect to one or more BRI (Basic Rate Interface) devices. These devices may be PABX, digital phones, video cameras, fax machines, etc.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ISP – Internet Service Provider</h1>
  <p style={{ fontSize: '15px' }}>Provider of internet access. May be dial-up, broadband or wireless. ISPs may also provide webhosting, email and domain name services.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>IT – Information Technology</h1>
  <p style={{ fontSize: '15px' }}>The use of computer-based systems to capture, store, manipulate, analyse and/or display information. IT includes telecommunications, hardware and software.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>ITU – International Telecommunication Union</h1>
  <p style={{ fontSize: '15px' }}>UN agency that provides the shared global standards to enable telecommunication networks and services, including satellite orbits.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>JavaScript</h1>
  <p style={{ fontSize: '15px' }}>Scripting language used in websites and applications. Used for dynamic content and interactive web features.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Java Applet</h1>
  <p style={{ fontSize: '15px' }}>A small program embedded within a webpage, which can be executed by a web browser with a Java Virtual Machine (JVM). Applets are typically used for interactive features on web pages.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Jitter</h1>
  <p style={{ fontSize: '15px' }}>Variation in the arrival times of data packets, which can affect the quality of real-time communication such as VoIP calls.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>JPEG – Joint Photographic Experts Group</h1>
  <p style={{ fontSize: '15px' }}>File format commonly used for images and photographs on the web. JPEG files use lossy compression to reduce file size while retaining a reasonable image quality.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Keyline</h1>
  <p style={{ fontSize: '15px' }}>A sequence of tones sent to establish an outgoing call. Required by some switchboards before a call may be placed. Keylines are also used in phone systems for outgoing dial tone.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>LATA – Local Access and Transport Area (USA)</h1>
  <p style={{ fontSize: '15px' }}>Defined service area of a telephone exchange. A LATA contains one or more area codes.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>LAN – Local Area Network</h1>
  <p style={{ fontSize: '15px' }}>Computers connected in a small geographic area. LANs are often connected via Ethernet cabling, but can also use wireless technology.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Landline</h1>
  <p style={{ fontSize: '15px' }}>A fixed-line telephone service that uses wires to connect to the telephone network. Landlines are contrasted with mobile or cell phones.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Landline Excludes</h1>
  <p style={{ fontSize: '15px' }}>Excludes some or all landline calling costs from a capped plan.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Last Number Redial</h1>
  <p style={{ fontSize: '15px' }}>Redialling the last phone number dialled with one keypress.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>LCD – Liquid Crystal Display</h1>
  <p style={{ fontSize: '15px' }}>Technology used for many phone and screen displays. Uses less power than cathode-ray tube (CRT) technology.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>LDAP – Lightweight Directory Access Protocol</h1>
  <p style={{ fontSize: '15px' }}>A protocol for accessing directory services in a network. LDAP is often used by email clients and applications to access address books and user information.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Leased Line</h1>
  <p style={{ fontSize: '15px' }}>A dedicated communications line between two points. Leased lines are typically used for data, internet access, and private network connections.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Least Cost Routing</h1>
  <p style={{ fontSize: '15px' }}>Automatic selection of the cheapest route for a call based on preset criteria such as time, distance, or carrier rates.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Local Call</h1>
  <p style={{ fontSize: '15px' }}>A telephone call made within a local area, typically without additional charges beyond the standard monthly fee.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Local Service Provider</h1>
  <p style={{ fontSize: '15px' }}>A telecommunications provider that serves a specific local area, such as a regional ISP or telephone company.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Location-Based Services</h1>
  <p style={{ fontSize: '15px' }}>Services that utilize a device's geographical location, such as GPS-based navigation or location-aware advertising.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Local Loop</h1>
  <p style={{ fontSize: '15px' }}>The final connection between the local exchange and the customer's premises in the telephone network.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Local Rate</h1>
  <p style={{ fontSize: '15px' }}>A calling rate applied to calls within a local area, usually defined by geographical boundaries.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Location-Based Billing</h1>
  <p style={{ fontSize: '15px' }}>Billing charges based on the user's location, often used for mobile services that vary rates by region.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Login</h1>
  <p style={{ fontSize: '15px' }}>Credentials used to access a computer system or online service, often involving a username and password.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Low Light Camera</h1>
  <p style={{ fontSize: '15px' }}>A camera with enhanced capabilities for taking pictures or video in low light conditions.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mbps – Megabits per Second</h1>
  <p style={{ fontSize: '15px' }}>A measure of data transfer speed equal to one million bits per second.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>M-commerce – Mobile Commerce</h1>
  <p style={{ fontSize: '15px' }}>Commercial transactions conducted through mobile devices such as smartphones or tablets.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>MDA – Mobile Data Association</h1>
  <p style={{ fontSize: '15px' }}>Trade association representing the mobile data industry in the UK, promoting mobile content and services.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>MMS – Multimedia Messaging Service</h1>
  <p style={{ fontSize: '15px' }}>A messaging service that allows users to send multimedia content such as images, videos, and audio files via mobile devices.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Modem</h1>
  <p style={{ fontSize: '15px' }}>A device that enables computers to transmit data over telephone or cable lines, typically converting digital data to analog for transmission and vice versa.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mobile</h1>
  <p style={{ fontSize: '15px' }}>A term commonly used to refer to mobile phones or cellular phones.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mobile Broadband</h1>
  <p style={{ fontSize: '15px' }}>Internet access using mobile networks such as 3G, 4G, or 5G, typically via a smartphone, tablet, or mobile hotspot device.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mobile Email</h1>
  <p style={{ fontSize: '15px' }}>Email services accessible via mobile devices, often synchronized with desktop or webmail accounts.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mobile Internet</h1>
  <p style={{ fontSize: '15px' }}>Accessing the internet via mobile devices such as smartphones, tablets, or mobile hotspots.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mobile Network</h1>
  <p style={{ fontSize: '15px' }}>A network specifically designed for mobile communications, enabling services such as voice calls, SMS, MMS, and internet access.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mobile Phone</h1>
  <p style={{ fontSize: '15px' }}>A portable telephone that connects to a cellular network, allowing users to make and receive calls as well as access various services such as messaging, internet, and apps.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mobile Service</h1>
  <p style={{ fontSize: '15px' }}>Services provided by a mobile phone network, including voice calls, messaging, data access, and value-added services such as content subscriptions.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Mobile to Mobile</h1>
  <p style={{ fontSize: '15px' }}>Calls or communications between mobile phones, typically within the same mobile network.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Modem</h1>
  <p style={{ fontSize: '15px' }}>A device that enables computers to transmit data over telephone or cable lines, typically converting digital data to analog for transmission and vice versa.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Modulation</h1>
  <p style={{ fontSize: '15px' }}>The process of varying a carrier signal's properties (amplitude, frequency, or phase) to transmit information.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>MPEG – Moving Picture Experts Group</h1>
  <p style={{ fontSize: '15px' }}>A group that develops standards for digital audio and video compression, including formats such as MPEG-2, MPEG-4, and H.264.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Multimedia</h1>
  <p style={{ fontSize: '15px' }}>Content that combines multiple forms of media such as text, images, audio, video, and interactive elements.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Multimedia Messaging Service</h1>
  <p style={{ fontSize: '15px' }}>A messaging service that allows users to send multimedia content such as images, videos, and audio files via mobile devices.</p>
</div>
<br />
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>MNP – Mobile Number Portability</h1>
  <p style={{fontSize:'15px'}}>The ability for a customer to retain their existing mobile number when changing mobile service providers. Mobile numbers are assigned to SIM cards and a mobile number port occurs like this: Usually a new SIM is issued, with a temporary mobile number imprinted on it. Then, when `the port` happens, the existing number is written over the new SIM`s temporary number and the old SIM is left inactive. During the mobile number porting, the mobile number is unreachable through either carrier for approximately 15 minutes.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Mobile Coverage</h1>
  <p style={{fontSize:'15px'}}>The locations in which a user can connect to and use a mobile service from a nominated mobile phone network. The New Zealand carriers all supply generalised Coverage Maps of their coverage areas.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Mobile to Mobile Call</h1>
  <p style={{fontSize:'15px'}}>A call type denoting a domestic call made from one mobile to another. For the purposes of billing, call rates between mobiles are often charged at a different rate to other call types. (Sometimes mobile to mobile call rates are segregated further; according to OnNet calls and OffNet calls.)</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Modem</h1>
  <p style={{fontSize:'15px'}}>Amalgamating the terms: MOdulator and DEModulator, a Modem is a hardware device used to convert communications signals between analog and digital, or to modify digital signals between two parts of a network. Modems are commonly used to connect a PC to the internet.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Monophonic Ringtones</h1>
  <p style={{fontSize:'15px'}}>Simplistic ringtones which are made up of monophonic beeps. Monophonic means: Capable of producing only one note at a time.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Monthly Access Fee</h1>
  <p style={{fontSize:'15px'}}>A set fee paid for available connection to a network. May apply to both mobiles (see Minimum Monthly Spend) and landline connections (see Line Rental). Separate to usage charges.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>MSD – Mass Service Disruption</h1>
  <p style={{fontSize:'15px'}}>Occurs when normal operations of a carriage service provider are significantly disrupted by circumstances beyond that carrier’s control.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>MSN</h1>
  <p style={{fontSize:'15px'}}>Mobile Service Number- the number associated with your phone and account.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>MTSO – Mobile Telephone Switching Office</h1>
  <p style={{fontSize:'15px'}}>The CO (Central Office) that controls the activities in a mobile phone network. A computerised system which maintains mobile calls, defines the current base-station for all its mobile devices, coordinates handoffs, notes drop-outs and provides billing information.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Multiplex</h1>
  <p style={{fontSize:'15px'}}>Method used to transmit data from several sources along a single communications path, and be able to retrieve the intact information from any point along the path also.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>MVNO – Mobile Virtual Network Operator</h1>
  <p style={{fontSize:'15px'}}>Distinct from a mobile service provider who acts as a reseller of mobile network services, a MNVO buys wholesale capacity from a mobile network carrier and retails its own services.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>NAP – Network Access Point</h1>
  <p style={{fontSize:'15px'}}>Internet infrastructure element where IAPs connect to other IAPs, or where IAPs connect to their ISPs. NAPs are major connection nodes of the internet. Often a point of congestion, an efficient NAP leads to a faster service.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Narrowband</h1>
  <p style={{fontSize:'15px'}}>As compared to Broadband, which uses a broad bandwidth for signal transmission, Narrowband uses a much narrower bandwidth and is therefore unable to carry information at broadband rates.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>National Broadband Strategy</h1>
  <p style={{fontSize:'15px'}}>Policy framework for broadband development in New Zealand, agreed by all levels of government. Overseen by the National Broadband Strategy Implementation Group.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>NDD – National Direct Dialling</h1>
  <p style={{fontSize:'15px'}}>Term used for both landline calls and mobile calls. Landline: See National. Mobiles: Any call to a domestic fixed line which is not a service number or premium number.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Network</h1>
  <p style={{fontSize:'15px'}}>Telecommunications: Network is a telecommunications connections infrastructure which enables telecommunications between two or more devices. Computers: Network is a data communications connections infrastructure between three or more computers.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>New Service</h1>
  <p style={{fontSize:'15px'}}>Mobiles: New Service is the connection of a new mobile phone to a network, with a new number applied. Porting of a service to a new carrier is not considered a new service. Landlines: New Service is the new connection between a customer`s premises and the local exchange. Activating an in-place number is not considered a new service even though that customer may be new. A new service will involve at least some physical work between premises and exchange. Sometimes a new service will involve trenching a new group of copper lines onto the premises site.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>No Answer Transfer</h1>
  <p style={{fontSize:'15px'}}>Diversion of an unanswered call to another number or a message service. The number of rings before a call diverts can be set by the service provider. See also Call Divert.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>No Service</h1>
  <p style={{fontSize:'15px'}}>A mobile phone which is out of range of its service provider`s coverage area (and any associated roaming service providers` coverage areas also) is said to be in a No Service area. Remote regional areas are No Service areas for most providers. See also Coverage Maps, for No Service areas from each mobile carrier.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Non-Coded Access</h1>
  <p style={{fontSize:'15px'}}>Each service provider has its own four digit override code. Calls to domestic or international destinations may be made through a provider by dialling their code before the required number. This code is programmed on the customers line to enable all calls to be routed via their service provider. Pre-programming a PABX to use coded access for certain call types is one form of LCR (Least Cost Routing).</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>NRF – Network Reliability Framework</h1>
  <p style={{fontSize:'15px'}}>Each USO provider is required to report regularly to the ACMA (incorporates the former the ACA) on the performance of its network at a the FSA, ESA and individual phone services level. The ACMA may issue directions requiring the USO provider to remedy individual services.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>NRS – National Relay Service</h1>
  <p style={{fontSize:'15px'}}>A telephone access service for communications to or from hearing or speech impaired individuals. Relay may be through a live operator or through direct means such as TTY services. See also ACE.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Number Portability</h1>
  <p style={{fontSize:'15px'}}>The ability for a customer to retain their existing phone number when changing service providers. Term applies to both Local Number Portability and Mobile Number Portability.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Off Peak Rate</h1>
  <p style={{fontSize:'15px'}}>Rate plan feature from Service Providers. Off Peak rates are discounted rates designed to encourage the use of a service provider`s communications services at a time which is convenient to them – their off-peak traffic times. Off Peak times are generally nighttimes and weekends. See also Economy Rates.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>One-way Satellite</h1>
  <p style={{fontSize:'15px'}}>Internet connection using a satellite download link and a landline for the upload link. Often used in conjunction with the an ISDN2 connection to provide a 64kbps or 128kbps upload link. This connection has generally become superseded in regional areas, with the introduction of the Two-way Satellite connections (offering 256kbps uploads, for example, without the monthly connection costs).</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Online Access Centres</h1>
  <p style={{fontSize:'15px'}}>Public areas which provide user internet access, with user equipment supplied. Libraries are a good example of an Online Access Centre.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>OnNet Calls</h1>
  <p style={{fontSize:'15px'}}>Phone calls which are made between users of the same network.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Optical Fibre</h1>
  <p style={{fontSize:'15px'}}>Glass, plastic or hybrid fibres which are used to transmit digital pulses of light for data transmission. High bandwidth, high integrity (low data loss) solution which is used carry voice, video and data signals.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>OPX – Off Premises Extension</h1>
  <p style={{fontSize:'15px'}}>An extension which is located remotely from a PABX. OPX was an expensive service offered by service providers and was little used in the past. OPX is gaining great interest with the introduction of IP telephony and VoIP. OPX allows secondary office phones (and employees at home) to use their handset as though they are connected to the PABX. Extension dialling, call transfers, etc. become available with OPX.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Outbound Call</h1>
  <p style={{fontSize:'15px'}}>Telephone call to an external party.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PABX – Private Automatic Branch Exchange</h1>
  <p style={{fontSize:'15px'}}>A phone system which allows not only onsite/offsite connections (eg. incoming and outgoing calls) but also onsite/onsite connections (eg. calls to extensions, call transfers, etc.). A PABX (sometimes called a PBX) is the actual phone system box. The handsets are the extensions. Common features of a PABX are: extension dialling, call transfer, call holding, conference calling, DID (Direct In Dialling), CND (Calling Number Display) overwriting, CID (Caller ID) pass-through, and LCR (Least Cost Routing). PABXs superseded KTSs (Key Telephone Systems).</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Packet Networks</h1>
  <p style={{fontSize:'15px'}}>Usually IP networks, data travels over the communications links as data packets. This enables links to be shared (carrying packets from multiple sources). IP networks can often show reduced network (switching) errors, but may introduce delays to packets when the communications channels are congested.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Packet Protocols</h1>
  <p style={{fontSize:'15px'}}>These protocols, of which the IP is the most common, are rules for formatting the breakdown of data into discrete packages, called packets. A data packet is composed of a header and a small part of the data. The header is generated by the protocol and contains the address of the packet`s destination. Packet switching is very efficient because at each stage of routing only the address (or part of the address) is read and not the entire data packet. (A useful analogy is a mail sorting room: the letter (data) is not read, just the relevant part of the address.) Because packets all have an address, they may be sent via any available communications channel and data from multiple sources may be sent via the same communications channel. This is another efficiency gain.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Packet Switching</h1>
  <p style={{fontSize:'15px'}}>The act of routing a data packet and also deciding Most commonly, the act of routing IP packets through the internet. Packet switching not only includes the act of redirection of each packet, but also manages the decision making of each routing node.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Paging</h1>
  <p style={{fontSize:'15px'}}>Mobile Technology: Largely superseded technology whereby a wireless device could receive text messages to a small device called a pager. SMS allows two-way text messaging, and has largely replaced Paging. Additional feature of some PABX systems which allows</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PBX – Private Branch Exchange</h1>
  <p style={{fontSize:'15px'}}>See PABX</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PCS – Personal Communication Services</h1>
  <p style={{fontSize:'15px'}}>Early version of PDAs. See PDA.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PDA</h1>
  <p style={{fontSize:'15px'}}>A small mobile hand-held device that provides computing and information storage and retrieval capabilities for personal or business use, often for keeping schedule calendars and address book information handy.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PDA – Personal Digital Assistant</h1>
  <p style={{fontSize:'15px'}}>Hand-held mobile device which not only acts as a mobile phone, but may also have features such as: email capable, organiser, diary, web enabled (either through WAP or HTML), SMS capable, etc. PDAs use QWERTY keyboards or other.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Peak Period</h1>
  <p style={{fontSize:'15px'}}>The times of day and days of the week, when communications traffic is expected to be high, when compared with other times.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Peak Rates</h1>
  <p style={{fontSize:'15px'}}>Rates applied during Peak Periods. Normal rate plan pricing from Service Providers. Peak rates are only implicitly referred to through the use of terms such as Off Peak and Economy rates.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PGS – Pair Gain System</h1>
  <p style={{fontSize:'15px'}}>Use of a system (often involving multiplexors) which use less copper pairs than other systems to create the same telecommunications capacity. For instance, 16 customers may be able to make a phone call using 16 copper pairs. A PGS may be able to provide 16 customers with the ability to make a phone call using only 8 copper pairs. Common PGSs in use are: RIM, HiSS and CMUX.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Phone Card</h1>
  <p style={{fontSize:'15px'}}>Typically this is a prepaid charge card, which allows calls to be made from most Landline services. Also called a Calling Card. Distinct from a TeleCard, which is not prepaid and will be billed back to the selected fixed service account.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Phone Plan</h1>
  <p style={{fontSize:'15px'}}>The agreed service provided to a mobile or landline subscriber. Includes call rates, monthly access fees, included calls and special offers.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PING – Packet Internet Groper</h1>
  <p style={{fontSize:'15px'}}>Utility for testing if a particular network destination is available on a network connection. It sends an ICMP (Internet Control Message Protocol) echo request and waits for a response. PING tests are commonly used to debug network connections. (A convenient analogy is from submarine use; where a submarine might send a sonar pulse (a ping) towards a target and wait for an echo. A sonar echo provides targeting information.)</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Pixel</h1>
  <p style={{fontSize:'15px'}}>Amalgamating the terms Pictures (PIX) and Element (EL). Images and video may be digitised and the smallest element is called a Pixel. Image resolution is defined as Pixels per inch.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Plan Type (Mobile Phone)</h1>
  <p style={{fontSize:'15px'}}>Defined by billing method, Plan Types is a common usage term. Plans may be Prepaid or Post-paid. Prepaid mobile phone plans typically are casual plans, with higher rates and credit must be paid up-front. Buying of mobile usage credit can be done with credit card or cash: online, in shops or over the phone. Post-paid mobile accounts are typically mobile phone accounts under contract, with lower rates and are paid on invoicing of usage. Post-paid plans may be paid by direct debit, credit card or ‘on account’.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Polyphonic Ringtones</h1>
  <p style={{fontSize:'15px'}}>Incoming call alert (also used for incoming SMS and email alerts) polyphonic ringtones produce a more `natural` sound than their predecessor monophonic ringtones. Polyphonic ringtones (often use MIDI files to) produce up to 24 simultaneous notes. This blending of notes creates a more natural sound.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>POP – Point Of Presence</h1>
  <p style={{fontSize:'15px'}}>Landlines: Location where a carrier provides connection into a local exchange. Often in use in New Zealand, where Telecom commonly provides the Last Mile connection (from the premises to the exchange) but another provider carries the communications from the local exchange.<br/>Internet Connection: Location where a carrier provides connection into a local exchange. A PoP for dial-up internet is described as a connection which is available within a local call area. (See also MegaPoPs.) For broadband, a PoP is defined as a network node, which is available in the local exchange.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>POP – Post Office Protocol</h1>
  <p style={{fontSize:'15px'}}>Email term to denote the protocol for the retrieval of email from a server. POP3 denotes POP version three. See also IMAP – another email retrieval protocol.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Post-paid Mobile Phone Contracts</h1>
  <p style={{fontSize:'15px'}}>Post-paid mobile phone contracts are typically mobile phone accounts under contract, with lower rates than their prepaid counterparts, and are paid on invoicing of usage. Post-paid plans may be paid by direct debit, credit card or `on account`. On account means payment is not automated, but rather is invoiced for payment.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>POTS – Plain Old Telephone Service</h1>
  <p style={{fontSize:'15px'}}>Traditional switched telephone system using copper lines.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PPP – Point to Point Protocol</h1>
  <p style={{fontSize:'15px'}}>Protocol for connection to a TCP/IP network. The internet is a TCP/IP network.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PPTP – Point to Point Tunnelling Protocol</h1>
  <p style={{fontSize:'15px'}}>Early protocol for creation of VPNs (Virtual Private Networks). Flawed security. Extended by introduction of L2TP, which incorporated Microsoft`s PPTP and Cisco`s L2FA technology.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PRA – Primary Rate Access for ISDN</h1>
  <p style={{fontSize:'15px'}}>See PRI.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Predictive Text</h1>
  <p style={{fontSize:'15px'}}>A mobile handset feature which selects the possible words from the combination of keystrokes used. Alternatives may then be picked until the correct word is found. Example: When typing EARN, the keystrokes would be 3276, and the suggested word for those keystrokes may be FARM, then by scrolling through alternative words which use those keystrokes EARN can be selected. Most words are automatically suggested correctly the first time, which dramatically decreases the time needed to type a text message.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Prepaid Mobile Phone Contracts</h1>
  <p style={{fontSize:'15px'}}>Prepaid mobile phone plans typically are casual plans, with higher rates and credit must be paid up-front. Buying of mobile usage credit can be done with credit card or cash: online, in shops or over the phone. (Technically, Prepaid is a contract. It is merely a rolling contract per month and the only penalty for leaving early might be the loss of remaining credits.) See also Post-paid Mobile Contracts.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Preselection</h1>
  <p style={{fontSize:'15px'}}>The routing of domestic long distance calls, calls to mobiles and international calls through a default (preselected) service provider. Alternate providers may be selected on a call-by-call basis, through use of override codes. Often a customer will nominate their preselected service provider to also bill their local calls and service charges, called Rebilling.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PRI – Primary Rate Interface</h1>
  <p style={{fontSize:'15px'}}>Also called ISDN10/20/30, this is a conversion of a single copper pair (ordinary telephone line) into thirty 64 kbps `B` channels which may be used for voice or data. There is an additional 64kbps `D` data signal channel created also.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Private Network</h1>
  <p style={{fontSize:'15px'}}>Network which is not accessible to unauthorised persons. An example of a private network is a company intranet, where users may access external networks (including the internet) but external users cannot access the company’s intranet.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Protocol (Communications)</h1>
  <p style={{fontSize:'15px'}}>The rules which define communications formats. Without proper formatting, communications between computer systems would be meaningless.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Provisioning (Telecommunications Services)</h1>
  <p style={{fontSize:'15px'}}>Providing a telecommunications service to a customer upon request. Provisioning includes ordering, authorisation and implementation.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Proxy Servers</h1>
  <p style={{fontSize:'15px'}}>Server placed between a ‘client’ and a web server and represents itself to each end as being the other. It can be used in two ways. For the web server it can cache frequently accessed pages to reduce the web-server`s traffic. For security of the LAN clients it can present a single IP address to the Internet and prevent direct access to the rest of the LAN. [MicroUK]</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PSTN – Public Switched Telephone Network</h1>
  <p style={{fontSize:'15px'}}>Traditional switched telephone system using copper lines. PSTN services are used worldwide. Twisted pairs of copper telephone lines are connected from the customer premises to the local exchange. (These are also called local loops.) At the exchange the communications are electronically switched, in accordance with their destination. The network of these physical and switched connections are collectively called the Public Switched Telephone Network.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Public Telephone</h1>
  <p style={{fontSize:'15px'}}>Also called Payphones, they are publicly available telephones which accept coins, debit cards or credit cards, and can be used for calling domestically and internationally. Call rates are high, compared to other telephones.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PUK</h1>
  <p style={{fontSize:'15px'}}>SIM Cards have a number of security features to prevent unauthorised use. One of these is the requirement to enter a PIN code (if enabled) into a phone when it is turned on. The PIN number is determined and set by the user of the SIM and only persons provided the PIN number are able to access the SIM. If the PIN code is entered incorrectly three times in succession, the phone will display “Enter PUK Code” or “SIM Blocked”. The PUK (Personal Unblocking Key) Code is required to unblock the SIM to allow use. Each SIM has a unique 8 Digit PUK code.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>PUK – Personal Unblocking Key</h1>
  <p style={{fontSize:'15px'}}>Also called a Pin Unblocking Key. An 8-10 digit code used to unblock a SIM card which has been blocked. Service providers retain records of PUK codes.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Pulse Dialling</h1>
  <p style={{fontSize:'15px'}}>The conversion of keystrokes on the handset into discrete pulses which represent dialled numbers. The direct current is interrupted for a certain number of intervals in accordance with the dialled number. This allows the carrier`s switching centre to connect the call to the chosen number. Pulse dialling has been superseded by tone dialling for efficiency reasons.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>QOS – Quality of Service (General)</h1>
  <p style={{fontSize:'15px'}}>The service quality of a carrier`s network, including fault rates, connection times and call centre response times.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>QoS – Quality of Service (VoIP)</h1>
  <p style={{fontSize:'15px'}}>Generally, QoS in VoIP refers to the quality of a call connection, when compared to a traditional service. QoS is also a feature of modems and routers which enables IP traffic to be prioritised. Voice IP traffic is prioritised above all else, to reduce delays in the voice signals. A QoS router will greatly increase the quality of VoIP calls through an internal network. See VoIP also.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>QWERTY (Keyboard)</h1>
  <p style={{fontSize:'15px'}}>An english language keyboard (QWERTY are the first 6 letters on an english language keyboard). PDAs and other compact electronic devices often advertise whether they have a QWERTY keypad (QWERTY keyboard) as a feature, or use another type.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Residential Customer</h1>
  <p style={{fontSize:'15px'}}>Telephone user who is not a business customer.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Residential Phone Lines</h1>
  <p style={{fontSize:'15px'}}>A residential premises typically has only two phone lines installed. More phone lines may be installed at the cost of the customer.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>RF – Radio Frequency (Telecommunications)</h1>
  <p style={{fontSize:'15px'}}>Wireless communication technology using the radio band of the EMS (Electromagnetic Spectrum).</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Ringtone</h1>
  <p style={{fontSize:'15px'}}>Sound alert to signal an incoming alert or message. See also Monophonic Ringtones and Polyphonic Ringtones. Not to be confused with a Ringing Tone, above.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Roaming</h1>
  <p style={{fontSize:'15px'}}>Roaming refers to the ability of a wireless user to move freely, or “roam”, within a building, campus or large complex while maintaining an unbroken wireless connection to the wireless local are network (WLAN). This is achieved by using a number of strategically positioned access points. As a user moves beyond the range of one access point, they are automatically handed over to the next one.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Roaming Agreement</h1>
  <p style={{fontSize:'15px'}}>The agreement between two wireless carriers. The agreement defines roaming service capabilities and the charging structure for roaming service.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Router</h1>
  <p style={{fontSize:'15px'}}>Device which directs data packet transfers along its available network paths. It examines the destination of a data packet and determines the most appropriate network point to which a data packet should be sent next. Determination of the best routing path is aided by network information received and stored by the router. A router may be a hardware or software (less common) device.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>RVA</h1>
  <p style={{fontSize:'15px'}}>Recorded voice announcement- this is a pre-recorded announcement on the network indicating customers options, for example “telcoinabox regrets the number you have dialled is not contactable” “You cannot make outgoing calls. Please purchase a re-charge card and Dial 555” (Ding Dong) That number is not listed</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Satellite (Telecommunications)</h1>
  <p style={{fontSize:'15px'}}>Communications platform in orbit around the earth. These satellites send and receive communications signals. Satellites are very useful for their enormous coverage capabilities. There are three types, found at various heights above the earth: LEO (Low Earth Orbit, MEO (Medium Earth Orbit) and GEO (Geosynchronous Earth Orbit).</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Satellite Broadband</h1>
  <p style={{fontSize:'15px'}}>Internet connection using a satellite communications link. Two-way satellite broadband uses a satellite download link and upload link. One-way satellite broadband uses a satellite download link and a landline upload link (usually an ISDN2). Satellite broadband setup charges and running costs were subsidised in regional and rural areas through the HiBIS scheme, and are now subsidised using the Broadband Connect scheme.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Satellite Mobile Phones</h1>
  <p style={{fontSize:'15px'}}>Mobile phones which operate from satellites rather than land-based base stations. Coverage in remote areas is the primary use of these services, since usage costs are typically considered expensive. Also called Sat Phones. Sat Phones are often kept for emergency use in remote areas.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Screen Display Area (Mobile Handsets)</h1>
  <p style={{fontSize:'15px'}}>The size of the mobile phone or PDA handset`s screen area.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>SDSL</h1>
  <p style={{fontSize:'15px'}}>Symmetric Digital Subscriber Line (SDSL) is a Digital Subscriber Line (DSL) The main difference between ADSL and SDSL is that SDSL has the same upstream data transfer rate as downstream (symmetrical), whereas ADSL always has smaller upstream bandwidth (asymmetrical).</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>SDSL – Single-Line Digital Subscriber Line</h1>
  <p style={{fontSize:'15px'}}>Also called Symmetric DSL. Download and upload speeds match, unlike ADSL. Operation is over a single copper pair, like ADSL, unlike HDSL. Traditional voice communications are unavailable, unlike ADSL, but SDSL is becoming popular for VoIP communications.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Server</h1>
  <p style={{fontSize:'15px'}}>Computer hardware and software combined to `serve` information requests to its clients (PCs). Information might be data, files, emails, webpages, or other network services from client computers.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Service Address</h1>
  <p style={{fontSize:'15px'}}>The physical address where the services are connected. A Billing Address may differ from the service address.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Service Fee</h1>
  <p style={{fontSize:'15px'}}>Monthly charge from a provider for provision of service. Call charges are additional to this charge. See also Access Fee.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Service Plan</h1>
  <p style={{fontSize:'15px'}}>The contract between a mobile service provider and customer. The `service` being supplied is connection and access to a telecommunications network. The service plan should describe all rates, charges and fees.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Service Provider</h1>
  <p style={{fontSize:'15px'}}>A company which provides telecommunications connection and service to a customer. The telecommunications service provider may be the actual carrier or a reseller of those services.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>SFOA – Standard Form of Agreement</h1>
  <p style={{fontSize:'15px'}}>Prescribed terms and conditions which accompany a telecommunications service offer. Contains details of the service provider`s required conduct and a customer`s rights and obligations.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>SIM card – Subscriber Identity Module card</h1>
  <p style={{fontSize:'15px'}}>A SmartCard used (for mobile phones) to hold GSM encrypted security information and user information. The card holds the user`s phone number, PIN number, some or all phonebook contents and SMSs.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>SMS – Short Message Service</h1>
  <p style={{fontSize:'15px'}}>Communication of alphanumeric text messages from one mobile handset to another. (PC-to-SMS and email-to-SMS services are also available.)</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>SMTP – Simple Mail Transfer Protocol</h1>
  <p style={{fontSize:'15px'}}>SMTP – Simple Mail Transfer Protocol TCP/IP based protocol used to transfer e-mail messages over the internet. Often messages are finally retrieved from an email server using either POP or IMAP, because SMTP is not efficient at queuing emails.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>SOHO – Small Office, Home Office</h1>
  <p style={{fontSize:'15px'}}>Denotes a business run from a home or small office.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Spam</h1>
  <p style={{fontSize:'15px'}}>Unsolicited, bulk e-mails (or SMS messages). Also called Junk Emails.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Speed Dialling</h1>
  <p style={{fontSize:'15px'}}>Feature of a handset which dials a preprogrammed number automatically. Some handsets activate speed dial by use of a unique button on the handset, others use the prolonged holding of a button as their speed dial activation. Speed dialling is most often used for calling frequently used numbers. Emergency numbers may also be useful.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>SSC – Spread Spectrum</h1>
  <p style={{fontSize:'15px'}}>Telecommunications technique which segments a signal, sends the components over multiple frequencies, and then re-assembles the signal at the destination. Allows for higher data transmission rates and increased security capabilities.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Standby Time</h1>
  <p style={{fontSize:'15px'}}>Often used when describing mobile handsets and cordless handsets. This is the time a handset battery can maintain a standby status – without active use (making and receiving calls, accessing phonebooks, etc.).</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>STD Call – Subscriber Trunk Dialling Call</h1>
  <p style={{fontSize:'15px'}}>Direct-dialled long distance call. Also called NDD (National Direct Dialled) calls.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Streaming</h1>
  <p style={{fontSize:'15px'}}>Method of encoding and sending data such that it can be processed as a continuous stream. Streaming is used especially over the internet, where audio and video files may be played without the need to download the file fully first. Instead, the download can proceed while the file is being viewed.</p>
</div>
<br/>
<div>
  <h1 style={{ fontSize:'20px', fontWeight:'bold'}}>Subscriber Line</h1>
  <p style={{fontSize:'15px'}}>The copper lines between a customer premises and the local exchange. A Subscriber Loop describes the same. These lines are also called `twisted copper pairs` and can be thought of as a copper `loop` – one line to the premises and another line back to the exchange. Other names are PSTN line, telephone line, copper pair, standard telephone service line, POTS, etc.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>T1</h1>
  <p  style={{fontSize:'15px'}} >A dedicated phone connection supporting data rates of 1.544Mbits per second; consisting of 24 channels, operating at 64Kbits per second. Each channel can carry voice or data traffic.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Talk Time</h1>
  <p style={{fontSize:'15px'}} >Often used when describing mobile handsets and cordless handsets. This is the time a handset battery can maintain an active status (making and receiving calls, accessing phonebooks, etc.).</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>TBC </h1>
  <p style={{fontSize:'15px'}}  >   Total Business Connect </p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>TCP – Transfer Control Protocol</h1>
  <p  style={{fontSize:'15px'}}  >IP controls the data, TCP organises the transmission of the data and its assembly at the destination. Together TCP/IP control the movement of data across the internet.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>TDMA (Time Division Multiple Access)</h1>
  <p   style={{fontSize:'15px'}} >Splitting of customers` communications into varied frequencies and into different timeslots. Multiplexing of multiple signals onto a single channel on a single frequency. Used for GSM and some CDMA technologies.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Telco</h1>
  <p   style={{fontSize:'15px'}} >Amalgamating the terms: TELephone and COmpany, a Telco is a telecommunications service provider or wholesaler.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Teleconference</h1>
  <p style={{fontSize:'15px'}}    >Phone call where three or more parties are connected by an audio telecommunications link. Also called Conference Calls.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Termination Fee</h1>
  <p  style={{fontSize:'15px'}} >Fee applicable when a party to a contract terminates that contract. Generally this is the outstanding minimum amount agreed to in the contract.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>TDR – Telecommunication Dispute Resolution (TDR) service</h1>
  <p  style={{fontSize:'15px'}}   >Independent body for complaint resolution and arbitration from customers of telecommunications service providers.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>TOD (Time of Day) Routing</h1>
  <p style={{fontSize:'15px'}}   >Routing of incoming calls to selected destinations based on the current time of day. Most often used by call centres to direct call traffic according to economic reasoning.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Toll Calling Charges (Landline)</h1>
  <p   style={{fontSize:'15px'}}  >Charges beyond any Flagfall, connection fee or minimum call charges. These are usually per minute charges, billed in 1-second increments.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Toll-Free Calling Area</h1>
  <p  style={{fontSize:'15px'}}  >Local charging zone. Calls are toll-free because they have no charge in accordance with the duration of the call.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Toll-Free Services</h1>
  <p  style={{fontSize:'15px'}}   >0508 and 0800 services. They are defined as toll-free because the caller is not charged for the call.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Tone Dialling</h1>
  <p   style={{fontSize:'15px'}}  >Also called DTMF (Dual-Tone Multi-Frequency), is the conversion of keystrokes on the handset into discrete tones; one tone for each number dialled.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Total Cost of Contract</h1>
  <p    style={{fontSize:'15px'}} >     Minimum cost of a contract. Minimum monthly commitment multiplied by the remaining months.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Touch Tone Phone</h1>
  <p    style={{fontSize:'15px'}} >     Tone dialling handset.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Traffic (Telecommunications)</h1>
  <p  style={{fontSize:'15px'}}   >Amount of data or voice signals travelling through a communications channel at one time.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Transmission</h1>
  <p   style={{fontSize:'15px'}}  >Transfer of a communications signal from one point to another.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Trenching (Telecommunications)</h1>
  <p  style={{fontSize:'15px'}}  >Digging a narrow trench from the street (or pit) to a premises, to allow placement of phone lines or optic fibre.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Trunk Dialling</h1>
  <p style={{fontSize:'15px'}}   >  Typical term for Toll calling. The term trunk is used here to denote that the call has gone over a long-distance line (between exchanges) before being terminated.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Trunk Network</h1>
  <p  style={{fontSize:'15px'}}   >The main connections between exchanges.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Twisted Pairs</h1>
  <p  style={{fontSize:'15px'}}  >Twisted copper pairs (or Copper Pairs) are the physical connections of PSTN lines, between premises and exchange.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Two-way Satellite</h1>
  <p  style={{fontSize:'15px'}}  >Internet connection using a satellite for both the download and upload links.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>ULL – Unconditioned Local Loop</h1>
  <p style={{fontSize:'15px'}}   >A dedicated copper pair from the MDF at the customer`s premises to a MUX, or similar, in the local exchange.
</p>
</div>


<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>UMTS – Universal Mobile Telecommunications System</h1>
  <p style={{fontSize:'15px'}}   >Alternate name for 3G services. (The transmission standard is WCDMA.)</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Uplink</h1>
  <p style={{fontSize:'15px'}}   >Network connection terminology used to represent a link to a higher part of a network.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>UPS – Uninterruptible Power Supply</h1>
  <p   style={{fontSize:'15px'}}  >   A UPS is used as a backup supply of AC voltage. These discretionary supplies are most often used only for essential services. (DC battery supplies are commonly used in telephone systems.)</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>USB / USB 2.0</h1>
  <p  style={{fontSize:'15px'}}   >Short for Universal Serial Bus [connect the computer to external memory and peripherals], a USB is an external bus standard that allows the transfer of data at rates up to 12 Mbits per second and USB2 480Mbits per second. A USB port is used to connect peripheral devices, such as mice, printers and keyboards among others, to your computer.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>USP – Universal Service Provider</h1>
  <p   style={{fontSize:'15px'}}  >A carrier or Carriage Service Provider responsible for fulfilling the Universal Service Obligation (USO).</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Videoconference</h1>
  <p  style={{fontSize:'15px'}}   >Telecommunications where three or more parties are connected by a video telecommunications link. Also called a Video Conference.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>VoDSL – Voice Over DSL</h1>
  <p  style={{fontSize:'15px'}}   >Provision of voice communications over a DSL (Digital Subscriber Line) connection. Sometimes referred to as `Direct Connection` to a service provider's network, via use of a ULL. Typically, this connection can also supply a high-speed internet connection simultaneously.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Voice over Broadband</h1>
  <p  style={{fontSize:'15px'}}   >See VoIP</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Voicemail</h1>
  <p  style={{fontSize:'15px'}}   >A recorded message service where callers may be diverted. The caller is charged as though they are connected to the number called. For mobile services, the called party may also be charged.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Voicemail Box</h1>
  <p style={{fontSize:'15px'}}   >Part of the voicemail system where a user's messages are kept and managed. This may refer to a PABX voicemail system or to a mobile phone's voicemail facility.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>VoIP – Voice-over Internet Protocol</h1>
  <p  style={{fontSize:'15px'}}   >Is the transmission of telephone calls over a data connection.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>VPN</h1>
  <p  style={{fontSize:'15px'}}   >A virtual private network, or VPN, uses the Internet to connect users to their work or personal networks or servers through a secure `tunnel`.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>VPN – Virtual Private Network</h1>
  <p   style={{fontSize:'15px'}}  >A secure network connection between users of differing LANs.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>WAN – Wide Area Network</h1>
  <p  style={{fontSize:'15px'}}   >Data network where the distance between units prohibits the use of a LAN (Local Area Network) solution.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>WAP – Wireless Application Protocol</h1>
  <p   style={{fontSize:'15px'}}  >Set of protocols which enable mobile devices to access online content.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>WCDMA – Wideband CDMA</h1>
  <p   style={{fontSize:'15px'}}  >The 3G wireless communications standard which evolved from CDMA. Also called UMTS.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Web</h1>
  <p   style={{fontSize:'15px'}}  >The global network of servers on the internet, which allow access to html and other resources.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Web Browser</h1>
  <p    style={{fontSize:'15px'}}  >A user interface for interaction on the web.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Web Server</h1>
  <p   style={{fontSize:'15px'}} >A computer connected to the internet that stores webpages and other files.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Wi-Fi</h1>
  <p   style={{fontSize:'15px'}}  >Wi-Fi is a non-profit organization created to provide an interoperability certification for Wireless LAN products based on the 802.11 standard.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Wi-Fi – Wireless Fidelity</h1>
  <p   style={{fontSize:'15px'}}  >Specified as 802.11b by the IEEE (Institute of Electrical and Electronics Engineers), Wi-Fi is wireless technology for creating networks up to around 100m, at 2.4 GHz.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>Wireless Broadband</h1>
  <p   style={{fontSize:'15px'}}  >Broadband services which are non land-based (and non satellite-based).</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>WLAN</h1>
  <p  style={{fontSize:'15px'}}  >Wireless Local Area Networks or WLANs provide cable-free connection between notebooks, desktop PCs, printers, PDAs and your office network via wireless access points.</p>
</div>
<br/>
<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>WPA – Wi-Fi Protected Access</h1>
  <p  style={{fontSize:'15px'}}   >Data encryption specification for Wi-Fi networks. Higher security than WEP. It improves on WEP by using dynamic keys, EAP (Extensible Authentication Protocol) to secure network access, and an encryption method called Temporal Key Integrity Protocol (TKIP).</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>www – WorldWide Web</h1>
  <p   style={{fontSize:'15px'}}  >Information and communication network using the Internet to access hypertext documents. Hypertext documents (often webpages) contain text, images, video and other hypertext items.</p>
</div>
<br/>

<div>
  <h1 style={{fontSize:'20px' , fontWeight:'bold'}}>xDSL – x Digital Subscriber Line</h1>
  <p  style={{fontSize:'15px'}}   >Collective name for the various classes of digital subscriber lines. ADSL, SDSL and SHDSL (and the outmoded HDSL) are collectively referred to as xDSL products. See DSL.</p>
</div>
<br/>





    </div>
 

 


      <Footer/>
    </div>
  )
}

export default page
