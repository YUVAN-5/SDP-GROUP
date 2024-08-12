// components/Agents.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/agents');
        setAgents(response.data);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agents</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {agents.length === 0 ? (
          <p>No agents found.</p>
        ) : (
          <ul>
            {agents.map((agent) => (
              <li key={agent.id} className="border-b py-2">
                <p className="font-semibold">{agent.name}</p>
                <p>{agent.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Agents;
