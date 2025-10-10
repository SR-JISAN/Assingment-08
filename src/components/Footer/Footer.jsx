import { Instagram,Facebook, Twitch, Twitter, Youtube, MapPinHouse,Pin,Mail, Phone } from 'lucide-react';
import { Link } from 'react-router';

import React from 'react';

const Footer = () => {
    return (
<div>
     <footer className="bg-gradient-to-r from-[#320c8a]  to-[#6938ad] text-white px-16 py-10 ">
         <div className="lg:flex justify-between  ">
            <div>
                <h1 className='text-4xl font-bold'>Hero.IO</h1>
                <div className="mt-10 flex gap-4 items-center">
                    <Facebook  />
                    <Instagram />
                    <Twitter></Twitter>
                    <Youtube></Youtube>
                </div>
            </div>
            <div className='mt-6'>
                <h2 className='text-2xl  '>Contact Info</h2>
                <div className='flex items-center gap-2'>
                    <MapPinHouse className='mt-3' color="#ffffff"></MapPinHouse>
                    <p>1/A Road,2 Uttara</p>
                </div>
                <div className='flex items-center gap-2'>
                  <Pin color="#ffffff" className='mt-3'/>
                  <p>Dhaka</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Mail color="#ffffff" className='mt-3' />
                    <p>Hero.IO@gmail.com</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Phone color="#ffffff" className='mt-3' />
                    <p>01212332154</p>
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='text-2xl'>Support And Download</h1>
                <div className="flex lg:justify-center my-10 gap-4 items-center">
                    <Link to={"https://play.google.com/store/apps?hl=en"}>
                    <button className='btn bg-transparent border-[#D2D2D2] '><img src="/src/assets/playStore.png" alt="playStore" />Google Play</button></Link>
                    <Link to={'https://www.apple.com/store'}>
                    <button className='btn bg-transparent border-[#D2D2D2]'><img src="/src/assets/appStore.png" alt="appStore" />App Store</button>
                    </Link>
                </div>
                
            </div>
            <div className=" flex items-end ">
                    <p className='text-lg hover:text-blue-400'>@2025_Privacy Policy</p>
                </div>

         </div>
     </footer>
</div>
    );
};

export default Footer;