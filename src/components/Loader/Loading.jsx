import React from 'react';

const Loading = () => {
    return (
         <div className='flex justify-center items-center  w-fit mx-auto py-56 '>
               <span className='text-8xl animate-ping font-extrabold bg-gradient-to-r from-[#301d5d]  to-[#9F62F2] inline-block text-transparent bg-clip-text'>L</span>
               <img className='w-[10%] animate-spin px-4' src="/src/assets/logo.png" alt="logo"/>
               <span className='text-8xl animate-pulse 
                font-extrabold bg-gradient-to-r from-[#200a54]  to-[#574078] inline-block text-transparent bg-clip-text'>ADING</span>
               <div className='flex items-end'>
               <span className='text-8xl animate-bounce font-extrabold bg-gradient-to-r from-[#200a54]  to-[#574078] inline-block text-transparent bg-clip-text'>.</span>
               <span className='text-8xl animate-bounce font-extrabold bg-gradient-to-r from-[#200a54]  to-[#574078] inline-block text-transparent bg-clip-text'>.</span>
               <span className='text-8xl animate-bounce font-extrabold bg-gradient-to-r from-[#200a54]  to-[#574078] inline-block text-transparent bg-clip-text'>.</span>
               </div>
            </div>
    );
};

export default Loading;