import React from 'react';
import { Link } from 'react-router';


const Error404 = () => {
    return (
        <div>
            <div className='p-20'>
                <img className='w-full lg:w-[40%] mx-auto' src="/src/assets/error-404.png" alt="Error-400" />
                <h1 className='text-center mt-4 text-4xl text-[#001931] font-semibold'>Oops, page not found!</h1>
                <p className='text-center mt-3 text-[#627382] text-base'>The page you are looking for is not available.</p>
                <div className='text-center mt-5'>

                <Link to="/"><button className='btn bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] py-4 px-10 border-0 shadow-sm rounded-lg shadow-gray-400'>Go Back</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Error404;