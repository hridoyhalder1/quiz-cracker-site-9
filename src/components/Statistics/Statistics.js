import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../rechart/Rechart';

const Statistics = () => {
    const recharts = useLoaderData().data;
    console.log(recharts);
    return (
        <div>
            <h1>Statistics page.</h1>
            {
                recharts.map(rechart => <Rechart
                key={rechart.id}
                rechart={rechart}
                ></Rechart>)
            }
        </div>
    );
};

export default Statistics;