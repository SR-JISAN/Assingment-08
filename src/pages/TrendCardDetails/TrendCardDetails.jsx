import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const TrendCardDetails = () => {
    const {id} = useParams()
    const Id =parseInt(id)
    const data =useLoaderData()
    const singleData =data.find(card=>card.id===Id)
    const {image,title,companyName,downloads,ratingAvg,reviews,size} =   singleData ;


 return (
    <div className="p-4 bg-[#f9f9f9] lg:p-20">
        <div className="flex gap-10 justify-start  ">
            <div className='w-[100%] p-5 flex items-center bg-white lg:w-[20%] overflow-hidden'>
                <img className=' object-cover' src={image} alt="Movie" />
            </div>
            
            <div className=" bg-[#f9f9f9]">
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
                  <button className='mt-7 py-3 px-5 bg-[#00D390] text-white text-lg font-semibold'>Install Now ({size}MB)</button>
             
            </div>
         </div>

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