
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/shared/Home';
import { Error } from './pages/shared/Error';
import { Login } from './pages/shared/Login';
import { Register } from './pages/shared/Register';
import { SharedLayout } from './Layouts/SharedLayout';
import { Sell } from './pages/shared/Sell';
import { Buy } from './pages/shared/Buy';
import { Rent } from './pages/shared/Rent';
import { Agent } from './pages/shared/Agent';
import { WebLayout } from './Layouts/WebLayout';
import { AdminLayout } from './Layouts/AdminLayout';
import { Aside } from './pages/Admin/Aside';
import { Atop } from './pages/Admin/Atop';
import { Adash } from './pages/Admin/Adash';
import { Auser } from './pages/Admin/Auser';
import { Udash } from './pages/User/Udash';
import { UserLayout } from './Layouts/UserLayout';
import { Ucart } from './pages/User/Ucart';
import { Ureview } from './pages/User/Ureview';
import { Aedit } from './pages/Admin/Aedit';
import { Areview } from './pages/Admin/Areview';
import { Alogin } from './pages/Admin/Alogin';
import { UserProvider } from './services/UserContext';

const App =()=> {
  return (
    <>
    <UserProvider>
       <BrowserRouter>
          <Routes>
            <Route element={<SharedLayout/>}>
               <Route path='/' element={<Home/>}/>
               <Route path='*' element={<Error/>}/>
               <Route path='/sell' element={<Sell/>}/>
               <Route path='/buy' element={<Buy/>}/>
               <Route path='/agent' element={<Agent/>}/>
               <Route path='/rent' element={<Rent/>}/>
            </Route>
            <Route element={<WebLayout/>}>
               <Route path='/login' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
            </Route>
            <Route element={<AdminLayout/>}>
               <Route path='/adash' element={<Adash/>}/>
               <Route path='/auser' element={<Auser/>}/>
               <Route path='/aedit' element={<Aedit/>}/>
               <Route path='/arev' element={<Areview/>}/>
            </Route>
            <Route element={<UserLayout/>}>
               <Route path='/udash' element={<Udash/>}/>
               <Route path='/ucart' element={<Ucart/>}/>
               <Route path='/urev' element={<Ureview/>}/>
               <Route path='/alog' element={<Alogin/>}/>
            </Route>
          </Routes>
       </BrowserRouter>
       </UserProvider>
    </>
  )

}

export default App;
