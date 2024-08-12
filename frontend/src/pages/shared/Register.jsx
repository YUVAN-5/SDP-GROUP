import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GoogleLogo from '@/assets/images/google.png'; // Adjust the path as necessary
import FacebookLogo from '@/assets/images/facebook.png'; // Adjust the path as necessary
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '@/services/Api';
import { toast, Toaster } from 'react-hot-toast';

export const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerData);
    const res = await SignUp(
      registerData.name,
      registerData.email,
      registerData.password
    );

    if (res.data === 'User registered successfully.') {
      toast.success('Signup Success');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      toast.error(res.data);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-[91vh] bg-gray-300'>
      <Card className='w-[32rem] max-w-lg mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
        <CardHeader>
          <CardTitle className='text-2xl'>Create an account</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4 p-4'>
          <div className='flex flex-col gap-2'>
            <Button className='flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200'>
              <img src={GoogleLogo} alt='Google' className='w-5 h-5' />
              Register with Google
            </Button>
            <Button className='flex items-center justify-center gap-2 bg-blue-800 text-white hover:bg-blue-900 transition-colors duration-200'>
              <img src={FacebookLogo} alt='Facebook' className='w-5 h-5' />
              Register with Facebook
            </Button>
          </div>
          <h3 className='text-center text-gray-600'>or register with</h3>
          <div className='grid gap-2 ml-[1rem]'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              type='text'
              placeholder='User name'
              className='bg-gray-100 border border-gray-300 text-gray-900 w-[95%]'
              onChange={handleChange}
              value={registerData.name}
            />
          </div>
          <div className='grid gap-2 ml-[1rem]'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='example@gmail.com'
              className='bg-gray-100 border border-gray-300 text-gray-900 w-[95%]'
              onChange={handleChange}
              value={registerData.email}
            />
          </div>
          <div className='grid gap-2 ml-[1rem]'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='******'
              className='bg-gray-100 border border-gray-300 text-gray-900 w-[95%]'
              onChange={handleChange}
              value={registerData.password}
            />
          </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-4 p-6'>
          <Button className='w-[20rem]' onClick={handleSubmit}>
            Create account
          </Button>
          <p className='text-gray-500'>
            Already have an account?{' '}
            <NavLink to='/login' className='text-blue-500'>
              Login
            </NavLink>
          </p>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
};
