import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApp, removeFromLS } from '../../Utilityes/addToLocal';
import swal from 'sweetalert';
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"

const tApp = async ()=>{
    const pro = await fetch('appData2.json')
    const res = pro.json()
    return res
} 


const tData = tApp()


const Installation = () => {
const trend =use(tData)
const promise1 =useLoaderData()
const obj =[...trend,...promise1] 
const [install,setInstall]=useState([])
const [sort,setSort] =useState("")


useEffect(()=>{
   const dataOfLS = getStoreApp()
   const dataOfApp =dataOfLS.map(id=>parseInt(id)) 
   const data = obj.filter(app=>dataOfApp.includes(app.id))
   setInstall(data)
},[])

const handleSort =(sortType)=>{
   setSort(sortType)
   if(sortType==='High'){
    const compare = [...install].sort((a,b)=>b.downloads-a.downloads);
    setInstall(compare)

   }
   if(sortType==='Low'){
    const compare2 = [...install].sort((a,b)=>a.downloads-b.downloads);
    setInstall(compare2)
   }
} 


const handelUnInstalled =(id)=>{
     removeFromLS(id.id);
     swal({
  title: "Are you sure?",
  text: `Are you sure that you want to delete ${id.title}?`,
  icon: "warning",
  dangerMode: true,
})
.then(willDelete => {
  if (willDelete) {
    swal("Deleted!",  `${id.title} has been deleted!`, "success");
  }
});
   setInstall(prev=>prev.filter(app=>app.id !==id.id))
}


return (
<div className=' bg-[#f9f9f9]'>
      
    <div className="max-w-[1200px]  w-[90%] lg:w-[100%] mx-auto">
            <div className='mx-auto'>
                <h1 className='text-center text-[#001931] font-bold text-5xl'>Your Installed Apps</h1>
                <p className='text-center text-[#627382] mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className="flex justify-between mt-10 mb-4">
             <h1 className='text-[#001931] text-2xl font-bold'> {install.length}Apps Found</h1>
              
            <div className="dropdown bg-[#f9f9f9]">
               <div tabIndex={0} role="button" className="btn border-0 bg-transparent text-[#627382] m-1">
                    Short By: {sort?sort:''}
                 <svg
                     width="12px"
                     height="12px"
                     className="inline-block h-2 w-2 fill-current opacity-60"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 2048 2048">
                     <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                 </svg>
                </div>
               <ul tabIndex={0} className="dropdown-content bg-white rounded-box z-1 w-52 p-2 shadow-2xl">
                 <li onClick={()=>handleSort("High")}>
                   <input
                        type="radio"
                          name="theme-dropdown"
                             className="theme-controller w-full btn btn-sm  btn-ghost justify-start"
                            aria-label="High-Low"
                             value="High-Low" />
                 </li>
                 <li  onClick={()=>handleSort("Low")}>
                     <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                      aria-label="Low-High"
                         value="Low-High" />
                 </li>
               </ul>
             </div>
            </div>
            </div>
        <div>
         {
            install.map(app=>
    <div className=" p-8 flex   items-center rounded-lg my-10   bg-white shadow-sm">

        <div className='w-[40%] lg:w-[20%]'>
            
         <img  className=' w-[90%] rounded-2xl md:w-[65%] lg:w-[50%] bg-cover ' src={app.image} alt="Movie" />
                  
        </div>  
         <div className="flex justify-between w-full items-center">
                <div>
                    <h2 className="card-title mb-4 text-xl font-bold text-[#001931]">{app.title}</h2>
                 <ul className='flex gap-4 items-center'>
                    <li className='flex gap-3  items-center'>
                        <img className='w-[30%]' src={download} alt="download" /><p className='text-[#00D390]'>{app.downloads}M</p>
                    </li>
                    <li className='flex gap-3 items-center'>
                        <img className='w-[30%]' src={rating} alt="rating" /><p className='text-[#FF8811]'>{app.reviews}M</p>
                    </li>
                    <li className='text-[#627382]'>
                        {app.size} MB
                    </li>
                 </ul>
                </div>
                  
               <button onClick={()=>handelUnInstalled(app)} className="btn bg-[#00D390] border-0">Uninstalled</button>
               
         </div>
     </div>

            )
         }



            
              
            </div>
    </div>
</div>
);
};

export default Installation;