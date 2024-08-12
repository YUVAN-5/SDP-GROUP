import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import img1 from '@/assets/images/userinfo.png';
import { Switch } from "@headlessui/react";

export const Aedit = () => {
  const [admin, setAdmin] = useState({
    name: "Sanjay",
    email: "sanjayraghuraman11@gmail.com",
    role: "Administrator",
    location: "Coimbatore",
    phone: "1234567890"
  });

  const [editProfile, setEditProfile] = useState(admin);
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfile({ ...editProfile, [name]: value });
  };

  const handleSaveChanges = () => {
    setAdmin(editProfile);
  };

  return (
    <div className={`container mx-auto p-8 rounded-lg shadow-md h-screen overflow-y-auto ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Profile</h1>
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${darkMode ? 'bg-blue-600' : 'bg-gray-300'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300`}
        >
          <span className="sr-only">Enable dark mode</span>
          <span className={`${darkMode ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`} />
        </Switch>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={img1}
          alt="Admin Profile"
          className="w-32 h-32 rounded-full mb-4 shadow-lg"
        />
        <h2 className="text-2xl font-semibold">{admin.name}</h2>
        <p className="text-gray-700 dark:text-gray-300">{admin.email}</p>
        <p className="text-gray-700 dark:text-gray-300">{admin.role}</p>
        <p className="text-gray-700 dark:text-gray-300">{admin.location}</p>
        <p className="text-gray-700 dark:text-gray-300">{admin.phone}</p>

        <div className="mt-8 flex space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={editProfile.name}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    value={editProfile.email}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={editProfile.location}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={editProfile.phone}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" onClick={handleSaveChanges}>
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button className="bg-green-500 text-white hover:bg-green-700 transition-colors duration-300">
            Manage Users
          </Button>
        </div>
      </div>

      <div className="mt-12 w-full">
        <h3 className="text-2xl font-bold mb-4">Recent Activities</h3>
        <ul className="space-y-4">
          <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300">
            Approved new user registration requests.
          </li>
          <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300">
            Updated property listing details.
          </li>
          <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300">
            Responded to customer inquiries.
          </li>
        </ul>
      </div>

      <div className="mt-12 w-full">
        <h3 className="text-2xl font-bold mb-4">Notifications</h3>
        <ul className="space-y-4">
          <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300">
            New message from John Doe.
          </li>
          <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300">
            System maintenance scheduled for tomorrow.
          </li>
          <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300">
            New user registered: Jane Smith.
          </li>
        </ul>
      </div>
    </div>
  );
};

// Ensure you have @headlessui/react installed for the Switch component
// npm install @headlessui/react
