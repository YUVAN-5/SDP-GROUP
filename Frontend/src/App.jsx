import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Lazy-loaded components
const Notfound = lazy(() => import('./pages/Web/Notfound'));
const Home = lazy(() => import('./pages/Web/Home'));
const Login = lazy(() => import('./pages/Web/Login'));
const Register = lazy(() => import('./pages/Web/Register'));
const WebLayout = lazy(() => import('./layout/WebLayout'));
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const AdminLayout = lazy(() => import('./layout/AdminLayout'));
const UserLayout = lazy(() => import('./layout/UserLayout'));
const Agents = lazy(() => import('./pages/Admin/Agents'));
const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin'));
const UserDashboard = lazy(() => import('./pages/User/UserDashboard'));
const AdminClient = lazy(() => import('./pages/Admin/AdminClient'));
const Properties = lazy(() => import('./pages/Admin/Properties'));
const UserProperty = lazy(() => import('./pages/User/UserProperty'));
const UserAppointment = lazy(() => import('./pages/User/UserAppointment'));
const AdminAppointment = lazy(() => import('./pages/Admin/AdminAppointment'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<WebLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/client' element={<AdminClient />} />
            <Route path='/admin/agents' element={<Agents />} />
            <Route path='/admin/properties' element={<Properties />} />
            <Route path='/admin/appointments' element={<AdminAppointment />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path='/user/dashboard' element={<UserDashboard />} />
            <Route path='/user/agents' element={<Agents />} />
            <Route path='/user/properties' element={<UserProperty />} />
            <Route path='/user/appointments' element={<UserAppointment />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
