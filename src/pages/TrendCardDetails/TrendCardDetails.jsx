import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import BarChart from '../../components/BarChart/BarCharts';
import swal from 'sweetalert';
import { addToLS } from '../../Utilityes/addToLocal';



const TrendCardDetails = () => {
const [isInstall,setIsInstall]=useState(false)

    const {id} = useParams()
    const Id =parseInt(id)
    const data =useLoaderData()
    const singleData =data.find(card=>card.id===Id)
    const {image,title,companyName,downloads,ratingAvg,reviews,size} =   singleData ;
    const [disable,setDisable]=useState('')

    const getStoreApp = () => {
    const appData = localStorage.getItem("App");
    if (appData) {
      return JSON.parse(appData);
    }
    return [];
  };

  useEffect(() => {
    const stored = getStoreApp();
    if (stored.includes(Id)) {
      setDisable('disable')
    }
  }, [Id]);

const handelInstall =(id)=>{
    addToLS(id)
    swal("Good job!", "You Installed The App!", "success")
    setIsInstall(true)
    
}
 return (
    <div className="p-4 bg-[#f9f9f9] lg:p-20">
        <div className="flex gap-10 justify-start  ">
            <div className='w-[100%] p-5 flex items-center bg-white lg:w-[30%] overflow-hidden'>
                <img className=' object-cover' src={image} alt={title} />
            </div>
            
            <div className=" w-full bg-[#f9f9f9]">
               <h2 className="card-title text-[#001931] text-3xl font-bold">{title}</h2>
               <p className='text-lg text-[#627382]'>Developed by <span className='font-medium bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text'>{companyName}</span></p>
                <hr className='my-7 text-[#e6e6e6]' />
               <div className="flex items-center gap-6">
                  <div className='text-[#001931]'>
                    <img src="/src/assets/icon-downloads.png" alt="" />
                    <p className='text-base text-[#627382]'>Downloads</p>
                    <h1 className='font-bold text-3xl'>{downloads}M</h1>
                  </div>
                  <div className='text-[#001931]'>
                    <img src="/src/assets/icon-ratings.png" alt="" />
                    <p className='text-base text-[#627382]'>Average Ratings</p>
                    <h1 className='font-bold text-3xl'>{ratingAvg}</h1>
                  </div>
                  <div className='text-[#001931]'>
                    <img src="/src/assets/icon-review.png" alt="" />
                    <p className='text-base text-[#627382]'>Total Reviews</p>
                    <h1 className='font-bold text-3xl'>{reviews}K</h1>
                  </div>
               </div>
                   <button
            onClick={() => handelInstall(Id)}
            disabled={isInstall ? isInstall : disable}
            className="
              mt-7 py-3 px-5 text-lg font-semibold border-0 rounded-md
              bg-[#00D390] text-white hover:bg-[#00ba7c]
              disabled:bg-gray-500 disabled:opacity-70 disabled:cursor-not-allowed
              transition-all duration-300
            "
          >
            {
                  isInstall? "Installed": disable ? 'Installed':`Install Now(${size}MB)`}
          </button>
             
            </div>
         </div>
         <hr className='my-7 text-[#e6e6e6]' />
         <BarChart singleData={singleData}></BarChart>
         <div className="text-[#627382]">
            <h1 className='font-semibold mb-6 text-xl text-[#001931]'>Description</h1>
            <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
          </p> 
          <p className='my-10'>
             A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
                         </p> 
                         <p>
             For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
         </div>
    </div>
    );
};

export default TrendCardDetails;










//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const getIntroOfPage = (label) => {
//   if (label === 'Page A') {
//     return "Page A is about men's clothing";
//   }
//   if (label === 'Page B') {
//     return "Page B is about women's dress";
//   }
//   if (label === 'Page C') {
//     return "Page C is about women's bag";
//   }
//   if (label === 'Page D') {
//     return 'Page D is about household goods';
//   }
//   if (label === 'Page E') {
//     return 'Page E is about food';
//   }
//   if (label === 'Page F') {
//     return 'Page F is about baby food';
//   }
//   return '';
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   const isVisible = active && payload && payload.length;
//   return (
//     <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
//       {isVisible && (
//         <>
//           <p className="label">{`${label} : ${payload[0].value}`}</p>
//           <p className="intro">{getIntroOfPage(label)}</p>
//           <p className="desc">Anything you want can be displayed here.</p></>
//       )}
//     </div>
//   );
// };

// const Example = () => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <BarChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip content={CustomTooltip} />
//         <Legend />
//         <Bar dataKey="pv" barSize={20} fill="#8884d8" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default Example;
