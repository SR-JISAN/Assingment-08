import { Search } from 'lucide-react';
import React, { use, useState } from 'react';

import { Link } from 'react-router';
import AppError from '../Error/AppError';
import Loading from '../../components/Loader/Loading';


const AllAppFetch = async ()=>{
     const promise = await fetch('appData.json');
      const res = promise.json();
      return res ;
}
const AppData = AllAppFetch()

const AllApp = () => {
    const appDatas = use(AppData)
     const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
    const term = query.trim()
    const lower = term.toLocaleLowerCase()
    const searchApp = lower? appDatas.filter(app=>app.title.toLocaleLowerCase().includes(lower)):appDatas;
 


return (
    <>
      <div className="bg-[#f9f9f9]">
            <div className='py-20  max-w-[1200px] mx-auto'>
                <h1 className='text-center text-[#001931] font-bold text-5xl'>Our All Applications</h1>
                <p className='text-center text-[#627382] mt-4 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className="flex justify-between items-center mt-10 mb-4">
             <h1 className='text-[#001931] text-2xl font-bold'>({searchApp.length}) Apps Found</h1>
             <label className="input border-1 border-gray-400 bg-white ">              
                   <Search color='#949494'></Search>
                <input value={query} onChange={(e)=>handleChange(e)} className="grow focus:outline-none text-gray-700 focus:border-0" type="search" required placeholder="Search App" />
             </label>
            </div>
         {isLoading && <Loading />}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {
      searchApp.length===0?<AppError></AppError>
      : searchApp.map((data,index) => 
            <Link key={data.id} to={`/CardDetails/${data.id}`}>
            <div key={index} className="card bg-white p-4  h-[100%] shadow-sm">
               <figure className='h-[90%] lg:h-[60%] '>
                 <img className='w-full' src={data.image} alt="data.title"/>
               </figure>
               <div className="card-body py-0 mt-4 px-0">
                   <h2 className="text-xl font-medium text-[#001931]">{data.title}</h2>
                   
                 <div className="flex justify-between">
                   <button className="btn rounded text-[#00D390] border-0 py-[6px] px-[10px] text-base font-medium bg-[#F1F5E8] ">
                    <img className='w-[20%] mr-2' src="/src/assets/icon-downloads.png" alt="download" />
                    {data.downloads}M
                   </button>
                   <button className="btn rounded text-[#FF8811] border-0 py-[6px] px-[10px] text-base font-medium bg-[#FFF0E1] ">
                    <img className='w-[20%] mr-2' src="/src/assets/icon-ratings.png" alt="rating"/>
                    {data.ratingAvg}
                   </button>
                 </div>
               </div>
           </div>
           </Link> 
     )
    }      
 </div>
            </div>
      </div>
     </>
);
};

export default AllApp;