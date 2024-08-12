import React, { useContext, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GoogleLogo from '@/assets/images/google.png';
import toast, { Toaster } from 'react-hot-toast';
import { authService } from '@/services/Auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '@/services/UserContext';
import {jwtDecode} from 'jwt-decode'; 

export const Login = () => {
  const navigate = useNavigate();
  // const { setUserId } = useContext(UserContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value);
      const token = res.data;
    
      if (res.status === 200) {
        // Store token in local storage
        localStorage.setItem('authToken', token);
  
        // Decode token and check for userId
        const decodedToken = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);
  
        // Adjust this according to the actual structure of your decoded token
        const userId = decodedToken.uid || decodedToken.sub || decodedToken.userId;
        
        if (!userId) {
          throw new Error('User ID not found in token');
        }
  
        // Set userId in UserContext
        // setUserId(userId);
        localStorage.setItem('email' , userId);
        console.log('User ID:', userId);
  
        toast.success('Welcome');
        setTimeout(() => {
          navigate('/udash');
        }, 3000);
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials and try again.');
    }
  };
  
  

  return (
    <>
      <div className='flex justify-center items-center min-h-[92vh] bg-gray-300 overflow-y-hidden'>
        <Card className='w-1/4 max-w-sm mx-auto'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>Enter your email below to login</CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <Button
              className='w-[100%] flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600'
              onClick={() => window.location.href = 'https://www.google.com'} // Redirect to Google
            >
              <img src={GoogleLogo} alt='Google' className='w-5 h-5' />
              Continue with Google
            </Button>
            <h3 className='ml-[35%] text-gray-500'>or login with</h3>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='username'
                className='bg-gray-100'
                ref={emailRef}
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='******'
                className='bg-gray-100'
                ref={passwordRef}
                required
              />
            </div>
            <div className='flex items-center gap-2'>
              <input id='remember-me' type='checkbox' className='h-4 w-4' />
              <Label htmlFor='remember-me' className='cursor-pointer'>Remember me</Label>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col gap-2'>
            <Button className='w-[80%]' onClick={handleLogin}>
              Login
            </Button>
            <p className='text-gray-500'>
              Don’t have an account?{' '}
              <NavLink to='/register' className='text-blue-500'>
                Register
              </NavLink>
            </p>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </>
  );
};
