import React from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";

import Attribution from '../components/Attribution'
import '../App.css'

const Index = () => {
  return (
    <div className='splashContainer flex w-full justify-evenly'>
      
      <div className='flex flex-col w-[70%] items-end  '>
        <img src='/junkshop.jpg' className=' w-[100%] rounded-[20px]' />
        <Attribution />
      </div>

        <div className='w-[25%] flex flex-col items-center pl-5  '>
          <h1>The Junkyard</h1>          
          <ul className='text-left font-[600] pt-0 text-[20px] list-inside'>

            <Link to = '/contact'>
              <li className='py-3 border-brandGreen border-4 pl-4 rounded-[20px] mt-6 '>Record all important contact details</li>
            </Link>
            <li className='py-3 border-brandGreen border-4 pl-4 rounded-[20px] mt-6 '>Unlimited contacts</li>
            <li className='py-3 border-brandGreen border-4 pl-4 rounded-[20px] mt-6 '>Keep an unlimited number of notes for each contact</li>
          </ul>
        </div>
        
    </div>
  )
}

export default Index
