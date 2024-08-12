import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';

const Uagents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch the agents from the backend
    const fetchAgents = async () => {
      const response = await fetch('/api/user/agents');
      const data = await response.json();
      setAgents(data);
    };

    fetchAgents();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Agents</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {agents.map((agent) => (
          <div key={agent.id} className="p-4 bg-primary-lightBg dark:bg-primary-darkBg rounded-md shadow-md">
            <FaUsers className="text-2xl mb-2" />
            <p><strong>Name:</strong> {agent.name}</p>
            <p><strong>Email:</strong> {agent.email}</p>
            <p><strong>Phone:</strong> {agent.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uagents;
