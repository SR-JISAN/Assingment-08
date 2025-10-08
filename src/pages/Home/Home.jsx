import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import TrendingApp from '../../components/TrendingApps/TrendingApp';
import Loading from '../../components/Loader/Loading';

const TrendAppFetch = async ()=>{
     const promise = await fetch('appData2.json');
      const res = promise.json();
      return res ;
}

const TrendAppData = TrendAppFetch()
const Home = () => {
    return (
        <div className='bg-[#f9f9f9] pt-20'>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>

                <TrendingApp TrendAppData={TrendAppData}></TrendingApp>
            </Suspense>
            
        </div>
    );
};

export default Home;