import { useState, useEffect } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link, useLoaderData, Outlet, useNavigate } from "react-router-dom";

import './App.css'

import { JunkBar } from './ui-components'

function App(user, handleSignOut) {

  const navigate = useNavigate();


  return (
    <>
      <div className='mainContainer flex' >
        <div className='mainContent'>

          <div className='pt-5 contentSection'>


            <JunkBar className='!mb-6 !w-full' overrides={{
              Home: { onClick: () => navigate('/') },
              Junk: { onClick: () => navigate('/junk') },
              About: { onClick: () => navigate('/about') },
              Contact: { onClick: () => navigate('/contact') },
              Admin: { onClick: () => navigate('/admin') },
            }} />



            <Outlet />
          </div>
        </div>

      </div>
    </>
  )
}

// export default withAuthenticator(App)
export default App
