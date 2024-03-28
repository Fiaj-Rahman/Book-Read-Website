import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PagesToRead = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const localStorageData = JSON.parse(localStorage.getItem("donation") || "[]");
    setData(localStorageData);
  }, []);

  return (
    <div className='mx-auto flex text-center justify-center align-center'>
      <ResponsiveContainer width="80%" aspect={4.0/2.0} margin="auto">
      <BarChart
        data={data}
        margin={{ top: 100, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const path = `M${x},${y + height}v-${height}h${width}v${height}z`; // Fix syntax error here
  return <path d={path} fill={fill} />;
};

export default PagesToRead;
