import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '../App.css'

const Contact = () => {
  return (
    <div className='splashContainer flex w-full justify-evenly'>
      
        <div className = 'w-full'> Contacts </div>
        
    </div>
  )
}

export default withAuthenticator(Contact)