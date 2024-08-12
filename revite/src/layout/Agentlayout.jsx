import React from 'react'
import AgentSidebar from '@/components/agent/AgentSidebar';
import AgentTopbar from '@/components/agent/AgentTopbar';
import { Outlet } from 'react-router-dom';
const Agentlayout = () => {
    return (
        <div className="flex">
          <AgentSidebar/>
          <div className="flex-1 ml-64">
            <AgentTopbar/>
            <div className="mt-16 p-4 overflow-y-scroll h-[calc(100vh-4rem)] bg-lightBg">
              <Outlet />
            </div>
          </div>
        </div>
      );
    };
    

export default Agentlayout;
