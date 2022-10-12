import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';

import React, { useEffect, useState } from 'react';

const Statistics = () => {
    const [numbers, setNumbers] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setNumbers(data))
    }, [])
    console.log(numbers.data);
    return (
        <div className='rechart'>
            <ResponsiveContainer width="100%" height="100%" aspect={1}>
                <LineChart width={500} height={400} data={numbers.data} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;