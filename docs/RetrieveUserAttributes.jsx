//Here is a sample code

//The following code prints user's email when button is clicked. You can find it's documentation in Amplify Auth -> Retrieve user attributes.
//https://docs.amplify.aws/react/build-a-backend/auth/manage-user-profile/#retrieve-user-attributes

import { fetchUserAttributes } from '@aws-amplify/auth';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import React from 'react';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {

  // Function to print access token and id token
  const printUserAttributes = async () => {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log('Email:', userAttributes.email);
    }
    catch (e) { console.log(e); }
  };

  return (
    <Authenticator hideSignUp loginMechanisms={['username']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <button onClick={printUserAttributes}>Print Attributes</button>
        </main>
      )}
    </Authenticator>
  );
}
