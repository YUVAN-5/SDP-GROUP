
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../../components/ThemeProvider'; 

// const Login = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
//       <div className="max-w-md w-full space-y-8 ">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
//             Sign in to your account
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
//                      className="appearance-none rounded-none relative block w-full px-3 py-2 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
//                      placeholder="Password" />
//             </div>
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input id="remember_me" name="remember_me" type="checkbox"
//                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
//               <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
//                 Remember me
//               </label>
//             </div>
//             <div className="text-sm">
//               <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
//                 Forgot your password?
//               </a>
//             </div>
//           </div>
//           <div className='flex justify-center '>
//             <Link to='/dashboard'><button type="submit"
//                     className=" w-80 flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-orange-500 dark:hover:bg-orange-500">
//               Sign in
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

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../components/ThemeProvider'; 
import axios from 'axios';

const Login = () => {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });

      if (response.status === 200) {
        const { token, role } = response.data;

        if (token && role) {
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);

          console.log('Token and role stored in localStorage'); // Confirmation log

          if (role === 'ADMIN') {
            navigate('/dashboard');
          } else if (role === 'USER') {
            navigate('/userdashboard');
          } else {
            alert('Invalid role');
          }
        } else {
          console.error('Token or role missing in response'); // Error if token/role is missing
          alert('Login failed: Invalid server response');
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Invalid email or password');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 m-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-80 flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-orange-500 dark:hover:bg-orange-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
