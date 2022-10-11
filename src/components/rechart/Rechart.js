import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Rechart = ({ rechart }) => {
    const { name, total } = rechart;
    return (
        <div>
            <LineChart width={500} height={400} rechart={rechart}>
                {/* <Line type="monotone" dataKey={name} stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey={total} stroke="#82ca9d" />
                <XAxis dataKey={name} />
                <YAxis />
                <Tooltip></Tooltip>
                <Legend />
            </LineChart>
        </div>
    );
};

export default Rechart;