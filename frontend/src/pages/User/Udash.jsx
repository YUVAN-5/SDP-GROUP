import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from '@/assets/images/userinfo.png';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Users,
  Briefcase,
  DollarSign,
  BarChart2,
  MessageCircle,
  Calendar,
  Clock,
  AlertCircle,
  AlertTriangleIcon
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Udash = () => {
  const [userData, setUserData] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem('email');
      if (email) {
        try {
          const response = await axios.get(`http://localhost:8080/api/auth/get/${email}`);
          setUserData(response.data);
          setEditData({
            name: response.data.name,
            address: response.data.address,
            phone: response.data.phone,
          });
          localStorage.setItem('userData', JSON.stringify(response.data));
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditData({ ...editData, [id]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const email = localStorage.getItem('email');
      if (email) {
        const response = await axios.put(`http://localhost:8080/api/auth/update/${email}`, editData);
        setUserData(response.data);
        console.log("User data updated:", response.data);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      {userData ? (
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 flex flex-row h-[22rem]">
            <div className="flex justify-center items-center flex-col gap-5">
              <img src={user} className="h-36 w-36 mt-4 rounded-full shadow-lg" alt="User profile" />
              <h6 className="text-3xl font-semibold">{userData.name}</h6>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border border-blue-500 hover:bg-blue-500 hover:text-white">
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Username</Label>
                      <Input
                        id="name"
                        value={editData.name}
                        placeholder="Username"
                        className="col-span-3"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="address" className="text-right">Location</Label>
                      <Input
                        id="address"
                        value={editData.address}
                        placeholder="Location"
                        className="col-span-3"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="phone" className="text-right">Phone</Label>
                      <Input
                        id="phone"
                        value={editData.phone}
                        placeholder="Phone"
                        className="col-span-3"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" onClick={handleSaveChanges}>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          <div className="bg-white ml-[3rem] p-6 w-full md:w-1/2">
            <div className="flex flex-col gap-4">
              <h5 className="text-2xl font-bold mb-4">User Details</h5>
              <div className="flex"><h6 className="font-semibold">User Name:</h6><h6 className="ml-2">{userData.name}</h6></div>
              <div className="flex"><h6 className="font-semibold">Location:</h6><h6 className="ml-2">{userData.address}</h6></div>
              <div className="flex"><h6 className="font-semibold">Phone:</h6><h6 className="ml-2">{userData.phone}</h6></div>
              <div className="flex"><h6 className="font-semibold">Email:</h6><h6 className="ml-2">{userData.email}</h6></div>
              <div className="flex"><h6 className="font-semibold">Age:</h6><h6 className="ml-2">20</h6></div>
            </div>
          </div>
          </div>


          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
          {/* <div className="bg-white p-4 rounded-lg shadow-lg"> */}
          <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-green-500" /> Recent Messages
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center p-2 hover:bg-gray-50 rounded">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-500 font-semibold">VJ</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-black">Joseph Vijay</h3>
                <p className="text-xs text-gray-500">Hello, is the property still available?</p>
              </div>
              <span className="text-xs text-gray-700">2m ago</span>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-50 rounded">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <span className="text-green-500 font-semibold">RJ</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-black">Romario Jesuraj</h3>
                <p className="text-xs text-gray-500">Thank you for the quick response!</p>
              </div>
              <span className="text-xs text-gray-700">1h ago</span>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-50 rounded">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-500 font-semibold">AK</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-black">Ajith Kumar</h3>
                <p className="text-xs text-gray-500">Can I rent your house for Vidaamuyarchi shoot?</p>
              </div>
              <span className="text-xs text-gray-700">4h ago</span>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-50 rounded">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-orange-500 font-semibold">SA</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-black">Sanjay Akash</h3>
                <p className="text-xs text-gray-500">Can U share more properties?</p>
              </div>
              <span className="text-xs text-gray-700">7h ago</span>
            </li>
          </ul>
        {/* </div> */}
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};
