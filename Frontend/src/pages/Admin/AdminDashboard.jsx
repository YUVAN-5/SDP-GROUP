import React from 'react';
import { User, Package, BarChart2, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, Label } from 'recharts';


const calculateAngles = (value) => {
  const startAngle = 90; // Fixed start angle
  const endAngle = startAngle + (value / 100) * 360; // End angle based on value
  return [startAngle, endAngle];
};

const dataPie = [
  { name: 'Total Order', value: 82, color: '#FF8042' },
  { name: 'Customer Growth', value: 70, color: '#00C49F' },
  { name: 'Total Revenue', value: 58, color: '#0088FE' },
];
const dataBar = [
  { name: 'Sun', LastWeek: 1500, ThisWeek: 2400, amt: 2400 },
  { name: 'Mon', LastWeek: 1600, ThisWeek: 4567, amt: 2400 },
  { name: 'Tue', LastWeek: 4500, ThisWeek: 1398, amt: 2400 },
  { name: 'Wed', LastWeek: 5556, ThisWeek: 9800, amt: 2400 },
  { name: 'Thu', LastWeek: 6378, ThisWeek: 3908, amt: 2400 },
  { name: 'Fri', LastWeek: 6978, ThisWeek: 4800, amt: 2400 },
  { name: 'Sat', LastWeek: 1998, ThisWeek: 4300, amt: 2400 },
];
const dataBase = [
  { name: 'Sun', orderCount: 1500, pv: 2400, amt: 2400 },
  { name: 'Mon', orderCount: 1600, pv: 4567, amt: 2400 },
  { name: 'Tue', orderCount: 4500, pv: 1398, amt: 2400 },
  { name: 'Wed', orderCount: 5556, pv: 9800, amt: 2400 },
  { name: 'Thu', orderCount: 6378, pv: 3908, amt: 2400 },
  { name: 'Fri', orderCount: 6978, pv: 4800, amt: 2400 },
  { name: 'Sat', orderCount: 1998, pv: 4300, amt: 2400 },
];

const dataLine = [
  { name: 'Sun', fromSold: 4000, fromRent: 2400, amt: 2400 },
  { name: 'Mon', fromSold: 3000, fromRent: 1398, amt: 2210 },
  { name: 'Tue', fromSold: 2000, fromRent: 9800, amt: 2290 },
  { name: 'Wed', fromSold: 2780, fromRent: 3908, amt: 2000 },
  { name: 'Thu', fromSold: 1890, fromRent: 4800, amt: 2181 },
  { name: 'Fri', fromSold: 2390, fromRent: 3800, amt: 2500 },
  { name: 'Sat', fromSold: 3490, fromRent: 4300, amt: 2100 },
];

const AdminDashboard = () => {
  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-3 rounded-lg shadow-md flex items-center">
          <div className="mr-3 p-2 bg-purple-100 rounded-full">
            <User className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <h2 className="text-md font-semibold text-black">Total User</h2>
            <p className="text-xl font-bold text-black">40,689</p>
            <p className="text-green-500 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" /> 8.5% Up from yesterday
            </p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md flex items-center">
          <div className="mr-3 p-2 bg-yellow-100 rounded-full">
            <Package className="w-5 h-5 text-yellow-500" />
          </div>
          <div>
            <h2 className="text-md font-semibold text-black">Total Order</h2>
            <p className="text-xl font-bold text-black">10,293</p>
            <p className="text-green-500 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" /> 1.3% Up from past week
            </p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md flex items-center">
          <div className="mr-3 p-2 bg-green-100 rounded-full">
            <BarChart2 className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <h2 className="text-md font-semibold text-black">Total Sales</h2>
            <p className="text-xl font-bold text-black">$89,000</p>
            <p className="text-red-500 flex items-center">
              <TrendingDown className="w-4 h-4 mr-1" /> 4.3% Down from yesterday
            </p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md flex items-center">
          <div className="mr-3 p-2 bg-orange-100 rounded-full">
            <Clock className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <h2 className="text-md font-semibold text-black">Total Pending</h2>
            <p className="text-xl font-bold text-black">2,040</p>
            <p className="text-green-500 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" /> 1.8% Up from yesterday
            </p>
          </div>
        </div>
      </div>

      {/* Pie Charts in a Single Container */}
      <div className="mt-8 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-lg shadow-md h-64 flex flex-col">
          <h3 className="text-md font-semibold mb-2 text-black">Key Metrics</h3>
          <div className="flex-grow flex justify-around items-center">
            {dataPie.map((entry, index) => {
              const [startAngle, endAngle] = calculateAngles(entry.value);
              return (
                <div key={index} className="flex flex-col items-center w-1/3">
                  <ResponsiveContainer width="100%" height={100}>
                    <PieChart>
                      <Pie
                        data={[entry]}
                        dataKey="value"
                        outerRadius={40}
                        innerRadius={25}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        cx="50%"
                        cy="50%"
                      >
                        <Cell fill={entry.color} />
                        <Label
                          value={`${entry.value}%`}
                          position="center"
                          className="text-black font-bold"
                        />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <span
                    className="text-black text-xs text-center font-bold"
                    style={{ marginTop: '1rem' }}
                  >
                    {index === 0 ? 'Total Order' : index === 1 ? 'Customer Growth' : 'Total Revenue'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>


        <div className="bg-white p-3 rounded-lg shadow-md h-64">
          <h3 className="text-md font-semibold mb-2 text-black p-2">Daywise Orders</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={dataBase}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orderCount" stroke="#8884d8" dot={{ fill: 'yellow', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md h-64">
          <h3 className="text-md font-semibold mb-2 text-black p-2">Total Revenue</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="fromSold" stroke="#8884d8" />
              <Line type="monotone" dataKey="fromRent" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md h-64">
          <h3 className="text-md font-semibold mb-2 text-black p-2">Weekly Report</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="LastWeek" fill="#8884d8" />
              <Bar dataKey="ThisWeek" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
