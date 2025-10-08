import React, { use } from 'react';
import TrendCardDetails from '../../pages/TrendCardDetails/TrendCardDetails';
import { Link } from 'react-router';




const TrendingApp = ({TrendAppData}) => {
    const trendDatas = use(TrendAppData)
    return (
        <div className='py-20 max-w-[1200px] mx-auto'>
            <h1 className='text-center text-[#001931] font-bold text-5xl'>Trending Apps</h1>
            <p className='text-center text-[#627382] mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</p>



 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{
    trendDatas.map((data,index) => 
        <Link key={data.id} to={`/TCDetails/${data.id}`}>
        <div key={index} className="card bg-white p-4  h-[100%] shadow-sm">
           <figure className='h-[90%] lg:h-[60%] '>
             <img className='w-full' src={data.image} alt="Shoes"/>
           </figure>
           <div className="card-body py-0 mt-4 px-0">
               <h2 className="text-xl font-medium text-[#001931]">{data.title}</h2>
               
             <div className="flex justify-between">
               <button className="btn rounded text-[#00D390] border-0 py-[6px] px-[10px] text-base font-medium bg-[#F1F5E8] ">
                <img className='w-[20%] mr-2' src="/src/assets/icon-downloads.png" alt="download" />
                {data.downloads}M
               </button>
               <button className="btn rounded text-[#FF8811] border-0 py-[6px] px-[10px] text-base font-medium bg-[#FFF0E1] ">
                <img className='w-[20%] mr-2' src="/src/assets/icon-ratings.png" alt="download"/>
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
    );
};

export default TrendingApp;

 