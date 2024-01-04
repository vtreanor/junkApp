import { useState, useEffect } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link, useLoaderData, Outlet, useNavigate } from "react-router-dom";

import './App.css'

import { JunkBar } from './ui-components'
// import { JunkProductCardCollection } from './ui-components';
// import { JunkCreateForm } from './ui-components'
// import { signUp } from 'aws-amplify/auth';
// import { signIn } from 'aws-amplify/auth';
// import { signOut } from 'aws-amplify/auth';

import { getCurrentUser } from 'aws-amplify/auth';
// import { fetchUserAttributes } from 'aws-amplify/auth';
// import { response } from 'express';



// export async function loader() {
//   console.log('Just Chacking')
//   try {
//     const { username, userId, signInDetails } = await getCurrentUser();
//     console.log(`The username: ${username}`);
//     console.log(`The userId: ${userId}`);
//     console.log(`The signInDetails: ${signInDetails}`);
//     return { username, userId, signInDetails }
//   } catch (err) {
//     return { username: null, userId: 'Fred', signInDetails: null }
//     // console.log('and the error is: ', err);
//   }
// }




// async function handleFetchUserAttributes() {
//   try {
//     const userAttributes = await fetchUserAttributes();
//     console.log('User Attributes', userAttributes);
//   } catch (error) {
//     console.log('And the winning eror is...', error);
//     return { sub: null, email_verified: null, email: null }
//   }
// }

// async function currentAuthenticatedUser() {
//   try {
//     const { username, userId, signInDetails } = await getCurrentUser();
//     console.log(`The username: ${username}`);
//     console.log(`The userId: ${userId}`);
//     console.log(`The signInDetails: ${signInDetails}`);
//     return { username, userId, signInDetails }
//   } catch (err) {
//     return null
//     // console.log('and the error is: ', err);
//   }
// }


function App(user, handleSignOut) {
  // console.log('User', user)

  const navigate = useNavigate();
  const [isCreatingJunk, setIsCreatingJunk] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true)
      try {        
        const user = await getCurrentUser();
        setCurrentUser(user)
        console.log('setCurrentUser', user)        
      } catch (error) {
        const nobody = { username: 'nobody', userId: 0, signInDetails: null }
        setCurrentUser(nobody)
      }
      setLoading(false)
    }
    loadUser()
  }, [])

  return (
    <>
      <div className='mainContainer flex' >
        <div className='mainContent'>

          <div className='pt-5 contentSection'>

            {loading ? (
              <h2>loading...</h2>
            ) : (
              // <p>Stuff</p>
              <p>User logged is {currentUser.username} </p>
            )
            }

            {/* <p>User is logged in = {stuff.userId} </p> */}
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
