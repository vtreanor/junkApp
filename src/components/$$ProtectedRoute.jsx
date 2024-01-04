import { Outlet, Navigate } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';
import { useState, useEffect } from 'react';
import { signUp } from 'aws-amplify/auth';
import { signIn } from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';


const checkAuthentication = async () => {
    try {
        const { username, userId, signInDetails } = await getCurrentUser();
        // console.log(`The username: ${username}`);
        // console.log(`The userId: ${userId}`);
        // console.log(`The signInDetails: ${signInDetails}`);
        return true
      } catch (err) {
        console.log(err);
        return false
      }
  };


const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(undefined);

  useEffect(() => {
    checkAuthentication()
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === undefined) {
    return null; // or loading spinner/indicator/etc
  }

  console.log('is auth ?'. isAuth)
    
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute