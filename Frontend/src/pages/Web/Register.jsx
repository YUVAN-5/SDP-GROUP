import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { SignUp } from '@/services/api';
import 'react-toastify/dist/ReactToastify.css';
import "@/assets/css/blink.css";

const Register = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const registerdata = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value
    };

    try {
      const res = await SignUp(registerdata.name, registerdata.email, registerdata.phone, registerdata.address, registerdata.password);

      if (res.data === "User registered successfully.") {
        toast.success("Signup Success", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        setTimeout(() => {
          navigate('/login');
        }, 2500);
      } else {
        toast.error(res.data, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.', {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='fixed inset-0 flex justify-center items-center mt-16'>
      <Card className="w-1/3 sm:w-1/3 md:w-1/4 h-[612px] blinking-border"> {/* Set fixed height */}
        <CardHeader className="space-y-1 p-4"> {/* Reduced padding */}
          <CardTitle className="text-lg">Create an account</CardTitle>
          <CardDescription className="text-xs">
            Enter your details to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-4 py-2"> {/* Reduced padding */}
          <div className="flex justify-center gap-2 mb-4">
            <Button variant="outline" className="flex items-center w-1/2 text-xs">
              <Github className="mr-1 w-4 h-4" />
              GitHub
            </Button>
            <button className="social-button google flex items-center justify-center w-1/2 border rounded-md text-xs">
              <svg viewBox="0 0 488 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="mr-1 w-4 h-4">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Google
            </button>
          </div>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs bg-background px-2">
              <span className="bg-background px-2">OR SIGN UP WITH</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-6">
              <div className="flex flex-col">
                <Label htmlFor="name" className="mb-2">Name</Label> {/* Reduced bottom margin */}
                <Input id="name" type="text" placeholder="Enter your name" ref={nameRef} className="h-8" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="email" className="mb-2">Email</Label> {/* Reduced bottom margin */}
                <Input id="email" type="email" placeholder="Enter your email" ref={emailRef} className="h-8" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="password" className="mb-2">Password</Label> {/* Reduced bottom margin */}
                <Input id="password" type="password" placeholder="Enter your password" ref={passwordRef} className="h-8" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="phone" className="mb-2">Phone Number</Label> {/* Reduced bottom margin */}
                <Input id="phone" type="tel" placeholder="Enter your phone number" ref={phoneRef} className="h-8" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="address" className="mb-2">Address</Label> {/* Reduced bottom margin */}
                <Input id="address" type="text" placeholder="Enter your address" ref={addressRef} className="h-8" />
              </div>
            </div>
            <CardFooter className="flex flex-col mt-auto"> {/* Added margin-top auto */}
              <Button className="w-full mb-2 text-xs" type="submit" disabled={loading}>
                {loading ? 'Registering...' : 'Create account'}
              </Button>
              <div className="text-right">
                <Link to="/login" className="text-xs text-muted-foreground">
                  Already have an account? Login
                </Link>
              </div>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
}

export default Register;
