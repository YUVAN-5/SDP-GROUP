import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

export const Adash = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 ">
      {/* <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Admin Dashboard</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Active Users</h2>
          <p className="text-4xl font-semibold">150</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Number of Users</h2>
          <p className="text-4xl font-semibold">562</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Number of Projects</h2>
          <p className="text-4xl font-semibold">123</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Completed Projects</h2>
          <p className="text-4xl font-semibold">67</p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">Pending Tasks</h2>
          <p className="text-4xl font-semibold">24</p>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-2">New Messages</h2>
          <p className="text-4xl font-semibold">5</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">User Activity</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Recent Notifications</h2>
        <div className="space-y-2 max-h-96 overflow-auto">
          <div className="bg-blue-100 p-2 rounded shadow">New user signed up</div>
          <div className="bg-blue-100 p-2 rounded shadow">Project "XYZ" completed</div>
          <div className="bg-blue-100 p-2 rounded shadow">System maintenance scheduled</div>
          <div className="bg-blue-100 p-2 rounded shadow">New task assigned to team</div>
          <div className="bg-blue-100 p-2 rounded shadow">Meeting scheduled for Monday</div>
          <div className="bg-blue-100 p-2 rounded shadow">New feedback received</div>
          <div className="bg-blue-100 p-2 rounded shadow">Server update completed</div>
          <div className="bg-blue-100 p-2 rounded shadow">New user signed up</div>
          <div className="bg-blue-100 p-2 rounded shadow">Project "XYZ" completed</div>
          <div className="bg-blue-100 p-2 rounded shadow">System maintenance scheduled</div>
          <div className="bg-blue-100 p-2 rounded shadow">New task assigned to team</div>
          <div className="bg-blue-100 p-2 rounded shadow">Meeting scheduled for Monday</div>
          <div className="bg-blue-100 p-2 rounded shadow">New feedback received</div>
          <div className="bg-blue-100 p-2 rounded shadow">Server update completed</div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-gray-200 rounded shadow">User John Doe completed task "Design homepage"</li>
          <li className="p-4 bg-gray-200 rounded shadow">Project "Mobile App" has been updated</li>
          <li className="p-4 bg-gray-200 rounded shadow">User Jane Smith added a new comment</li>
          <li className="p-4 bg-gray-200 rounded shadow">Server maintenance completed successfully</li>
          <li className="p-4 bg-gray-200 rounded shadow">New feature "Dark Mode" released</li>
          <li className="p-4 bg-gray-200 rounded shadow">User Michael Brown joined the project "E-commerce Website"</li>
        </ul>
      </div>
    </div>
  );
};

// export default Adash;
