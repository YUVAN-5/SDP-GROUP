import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ShieldCheck} from 'lucide-react'

export const Alogin =()=> {
 
    const name1="sanjay"
    const pwd1="1106"
    const navigate = useNavigate();
    const handleHome =()=> {
        navigate('/')
      };
    const handle =(e)=>{
        e.preventDefault()
        let name = document.getElementById("uname").value;
        let pwd = document.getElementById("pass").value;
   
    if(name === name1 && pwd===pwd1)
    {
        toast.success('Login successful!', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            onClose: () => {},
          });   
          const handleAdm=()=>{
            navigate('/Adash')
      }
      setTimeout(() => {
          handleAdm();
      }, 3000);
    }
    else {
        alert('invalid username or password')
    }
   
    }
    return (
    <>
     <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
       <form className="bg-gray-300 p-4 max-w-md rounded-lg shadow-md w-[20rem] mb-[10rem]" onSubmit={handle}>
       <h1 className="text-center text-xl font-semibold text-black mb-4">Hello Admin</h1>
       <div className="flex justify-center mb-4">
         <ShieldCheck size={50} />
       </div>
       <input type="text" placeholder="Enter username" id="uname" className="block w-full p-3 mb-2 bg-white rounded-md border border-black shadow-sm" />
       <input type="password" placeholder="Enter password" id="pass" className="block w-full p-3 mb-4 bg-white rounded-md border border-black shadow-sm" />
      
       <button type="submit" className="block w-4/5 mx-auto py-2 bg-black text-white font-medium uppercase rounded-md">Sign in</button>
      
       </form>
       <ToastContainer />
     </div>
    </>
    )
}
