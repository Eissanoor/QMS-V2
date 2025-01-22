import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Generate sample data - in real app, this would come from your API/database
const generateData = () => {
  const data = [];
  for (let i = 0; i < 200; i++) {
    data.push({
      patient: i + 1,
      time: Math.random() * 30 + Math.sin(i / 10) * 10 + 5
    });
  }
  return data;
};

const data = generateData();

const EyeBall = () => {
  return (
   
      <div className="bg-green rounded-lg shadow-lg p-6 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center  text-gray-800">
          Time from Eyeball to TRIAGE
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="patient"
                label={{ 
                  value: 'Patient (n)', 
                  position: 'bottom',
                  offset: 0
                }}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                label={{ 
                  value: 'Time (minutes)', 
                  angle: -90, 
                  position: 'insideLeft',
                  offset: 10
                }}
                domain={[0, 50]}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  padding: '0.5rem',
                }}
                formatter={(value) => [`${value.toFixed(1)} minutes`, 'Time']}
                labelFormatter={(value) => `Patient ${value}`}
              />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#ef4444"
                dot={false}
                strokeWidth={1.5}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    
  );
}

export default EyeBall;