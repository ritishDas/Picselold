import React, { useEffect, useState } from 'react'
import EventBox from '../Components/EventBox';
import eventsData from "../data/EventDetails.jsx"
const ShowEvents = () => {
  
  const Loading=false;

  


  return (
    <div className='flex flex-col'>
      <div className='bg-gray-800'>
        <div className='w-10/12 mx-auto flex flex-col justify-center lg:h-[210px] pl-4 gap-2'>
          <p className=' text-base text-gray-500 font-semibold'>Home/ Events/
            <span className=' text-yellow-300'> UpComingEvents</span>
          </p>
          <h1 className=' text-3xl text-gray-200 font-semibold'>Scheduled Events</h1>
          <p className=' text-gray-400 font-semibold'>Let's come together and bring our unique contributions to events, ensuring their success through our individuality and collaboration.</p>
        </div>
      </div>

      {/* Events */}
      <div className='w-10/12 mx-auto mb-10 '>
        <div className=' grid grid-cols-3 gap-6 mt-10'>
          {
            eventsData.map((data) => (
              <EventBox data={data} />
            ))
          }
        </div>

      </div>
    </div >
  )

}

export default ShowEvents
