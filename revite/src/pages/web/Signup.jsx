// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../../components/ThemeProvider'; 
// import { Route, Router } from 'react-router-dom';

// const Signup = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
//             Create your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6">
//           <input type="hidden" name="remember" value="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email-address" className="sr-only">Email address</label>
//               <input id="email-address" name="email" type="email" autoComplete="email" required
//                      className="appearance-none rounded-none relative block w-full px-3 py-2 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
//                      placeholder="Email address" />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input id="password" name="password" type="password" autoComplete="current-password" required
//                      className="appearance-none rounded-none relative block w-full px-3 py-2  m-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
//                      placeholder="Password" />
//             </div>
//             <div>
//               <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
//               <input id="confirm-password" name="confirm-password" type="password" autoComplete="current-password" required
//                      className="appearance-none rounded-none relative block w-full px-3 py-2 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
//                      placeholder="Confirm Password" />
//             </div>
//           </div>
//           <div className='flex justify-center'>
//           <Link to="/"><button type="submit" 
//                     className=" w-80 flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-orange-500">
//               Sign up
//             </button></Link>
//           </div>
//         </form>
//         {/* <button
//           onClick={toggleTheme}
//           className="mt-4 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
//         >
//           {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '../../components/ThemeProvider'; 

const Signup = () => {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        name,
        email,
        password,
      });

      if (response.data === "User registered successfully.") {
        navigate('/'); // Navigate to the homepage or login after successful signup
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                placeholder="Name" 
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                placeholder="Email address" 
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2  m-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                placeholder="Password" 
              />
            </div>
            {/* <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input 
                id="confirm-password" 
                name="confirm-password" 
                type="password" 
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                placeholder="Confirm Password" 
              />
            </div> */}
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          <div className='flex justify-center'>
            <button 
              type="submit" 
              className="w-80 flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-orange-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
