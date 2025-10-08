import React, { use } from 'react';

const TrendingApp = ({TrendAppData}) => {
    const trendDatas = use(TrendAppData)
    console.log(trendDatas)
    return (
        <div className='py-20'>
            <h1 className='text-center text-[#001931] font-bold text-5xl'>Trending Apps</h1>
            <p className='text-center text-[#627382] mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</p>

            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            {

            }
        </div>
    );
};

export default TrendingApp;