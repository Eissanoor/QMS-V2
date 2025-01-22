import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'TO', value: 33, color: '#000080' },
  { name: 'RATZ', value: 23, color: '#006400' },
  { name: 'ACU', value: 7, color: '#8B0000' },
  { name: 'UCC', value: 29, color: '#8B4513' },
  { name: 'Not Assigned', value: 8, color: '#FFD700' },
];

const departmentData = () => {
  return (
    
      <div className="bg-green rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center  text-gray-800">
          Clinic Assignment
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `${value}%`}
              />
              <Legend 
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  paddingTop: '20px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    
  );
}

export default departmentData;