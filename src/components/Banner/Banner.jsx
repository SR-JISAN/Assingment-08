import React from 'react';
import { Link } from 'react-router';
import playStore from "../../assets/playStore.png"
import appStore from "../../assets/appStore.png"
import hero from "../../assets/hero.png"

const Banner = () => {
    return (
        <div>
            <div>
                <h1 className='text-6xl text-[#001931] font-bold text-center'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text'>Productive</span> Apps</h1>
                <p className='w-[61%] text-[#627382] pt-4 text-center mx-auto'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex justify-center mt-10 gap-4 items-center">
                    <Link to={"https://play.google.com/store/apps?hl=en"}>
                    <button className='btn bg-transparent border-[#D2D2D2] text-[#001931]'><img src={playStore} alt="playStore" />Google Play</button></Link>
                    <Link to={'https://www.apple.com/store'}>
                    <button className='btn bg-transparent border-[#D2D2D2] text-[#001931]'><img src={appStore} alt="appStore" />App Store</button>
                    </Link>
                </div>
            </div>
            <div className='mt-10'>
                <div className="flex justify-center">
                        <img className='w-[100%] lg:w-[60%]' src={hero} alt="hero" />
                </div>
                <div className="py-20 bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-center text-white">
                        <h1 className='font-bold  text-4xl'>Trusted by Millions, Built for You</h1>
                        <div className='flex flex-wrap mt-10 justify-center items-center gap-10 lg:gap-20'>
                            <div>
                                <p>Total Downloads</p>
                                <h1 className='font-extrabold text-5xl py-4'>29.6M</h1>
                                <p>21% more than last month</p>
                            </div>
                            <div>
                                <p>Total Reviews</p>
                                <h1 className='font-extrabold text-5xl py-4'>906K</h1>
                                <p>46% more than last month</p>
                            </div>
                            <div>
                                <p>Active Apps</p>
                                <h1 className='font-extrabold text-5xl py-4'>132+</h1>
                                <p>31 more will Launch</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;