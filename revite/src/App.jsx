import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Weblayout from './layout/Weblayout'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/web/Home'
import Login from './pages/web/Login'
// import AgentLogin from './pages/web/Agentlogin'
import Register from './pages/web/Signup'
import Notfound from './pages/web/Notfound'
import Dashboard from './pages/admin/Dashboard'
import UserDashboard from './pages/user/UserDashboard'
import './assets/css/Login.css'
import './assets/css/Signup.css'
import About from './components/user/About'
import Agent from './pages/admin/Agents'
import PropertyListing from './components/user/PropertyListing'
import Adminlayout from './layout/Adminlayout'
import Userlayout from './layout/Userlayout'
import MailsList from './pages/admin/MailsList'
import Properties from './pages/admin/Properties'
import  AdminUsers  from './pages/admin/AdminUsers'
import Appointments from './pages/admin/Appointments'
import Reviews from './pages/admin/Reviews'
import MyProperties from './pages/user/MyProperties'
import Profile from './pages/user/Profile'
import Uagents from './pages/user/Uagents'
import Agentlayout from './layout/Agentlayout'
import AgentDashboard from './components/agent/AgentDashboard'
import AgentMails from './components/agent/AgentMails'
import AgentProfile from './components/agent/AgentProfile'
import AgentAppointments from './components/agent/AgentAppointments'
// import Layout from './layout/Layout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/property' element={<PropertyListing/>}/>
      <Route path='*' element={<Notfound/>}/>
      {/* <Route path="/login/agent" element={<AgentLogin />} /> */}
      </Route>
      
      <Route path='/userdashboard' element={<UserDashboard/>}/>
      
      <Route element={<Adminlayout/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/agents' element={<Agent/>}/>
          <Route path='/mails' element={<MailsList/>}/>
         <Route path='/properties' element={<Properties/>}/>
         <Route path='/users' element={<AdminUsers/>}/>
         <Route path='/appointments' element={<Appointments/>}/>
         <Route path='/reviews' element={<Reviews/>}/>
      </Route>

      <Route element={<Userlayout/>}>
            <Route path='/myProperties' element={<MyProperties/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/uagents' element={<Uagents/>}/>
            <Route path='/udash' element={<UserDashboard/>}/>
      </Route>

      <Route element={<Agentlayout/>}>
            <Route path='/agentdash' element={<AgentDashboard/>}/>
            <Route path='/agentmails' element={<AgentMails/>}/>
            <Route path='/agentprofile' element={<AgentProfile/>}/>
            <Route path='/agentappointments' element={<AgentAppointments/>}/>

      </Route>
      
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;
