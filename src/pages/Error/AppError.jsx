import React from 'react';
import NavBar from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Footer';

const AppError = () => {
    return (
         <div className="col-span-4">
            
            <div className='p-20'>
                <img className='w-full lg:w-[40%] mx-auto' src="/src/assets/App-Error.png" alt="Error-400" />
                <h1 className='text-center mt-4 text-4xl text-[#001931] font-semibold'>OOPS!! APP NOT FOUND</h1>
                <p className='text-center mt-3 text-[#627382] text-base'>The App you are requesting is not found on our system.  please try another apps</p>
                <div className='text-center mt-5'>

                <a href="/app"><button className='btn bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] py-4 px-10 border-0 shadow-sm rounded-lg shadow-gray-400'>Go Back</button></a>
                </div>
            </div>

        </div>
    );
};

export default AppError;