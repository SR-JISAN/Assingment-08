import { useState } from 'react';
import { Link } from 'react-router';
import { Github } from 'lucide-react';
import logo from "../../assets/logo.png"


const NavBar = () => {
const [style,setStyle]=useState(null)
const handelNav =(p)=>{
   setStyle(p)
}
    return (
      <div className="shadow">
      <div className="navbar  max-w-[1200px] mx-auto  ">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
               </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
               <Link to="/home">
                <li onClick={()=>handelNav(1)} className={`pt-5 px-5 ${style===1? "bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text border-b-2 border-[#632EE3] rounded-sm py-1  " :"" } `}>Home</li>
              </Link>
              <Link to="/app">
                <li onClick={()=>handelNav(2)} className={`py-3 px-5 ${style===2? "bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text border-b-2 border-[#632EE3] rounded-sm py-1  " :"" } `}>Apps</li>
              </Link>
              <Link to="/installation">
                 <li onClick={()=>handelNav(3)} className={`py-3 px-5 ${style===3? "bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text border-b-2 border-[#632EE3] rounded-sm py-1  " :"" } `}>Installation</li>
              </Link>
               </ul>
            </div>
       
              <a href="/" className='flex items-center'>
               <img className='w-10' src={logo} alt="logo" />
                 <h1  className="text-xl font-bold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text"> HERO.IO </h1> 
              </a>         
         </div>
         <div className="navbar-center hidden lg:flex">
             <ul className="menu menu-horizontal text-base font-medium gap-4 px-1">
              <Link to="/home">
                <li onClick={()=>setStyle(1)} className={`${style===1? "bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text border-b-2 border-[#632EE3] rounded-sm py-1  " :"" } `}>Home</li>
              </Link>
              <Link to="/app">
                <li onClick={()=>setStyle(2)} className={`${style===2? "bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text border-b-2 border-[#632EE3] rounded-sm py-1  " :"" } `}>Apps</li>
              </Link>
              <Link to="/installation">
                 <li onClick={()=>setStyle(3)} className={`${style===3? "bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text border-b-2 border-[#632EE3] rounded-sm py-1  " :"" } `}>Installation</li>
              </Link>
             </ul>
         </div>
         <div className="navbar-end">
          <Link to="https://github.com/SR-JISAN/Assingment-08" className="btn text-white py-3 px-4 border-0 rounded flex bg-gradient-to-r from-[#632EE3]  to-[#9F62F2]">
          <Github />
          Contribute</Link>
            
         </div>
      </div>
      </div>
    );
};

export default NavBar;