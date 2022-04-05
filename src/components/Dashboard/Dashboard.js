import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => setData(data.data))

    }, [])

    return (
        <div className='grid grid-cols-2 gap-4 m-20 text-center'>
            <div>
                <LineChart width={400} height={300} data={data}>
                    <Line dataKey="sell" stroke="#8884d8" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <AreaChart width={400} height={300} data={data}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stroke="#00FF80" fill="#00FF80" />

                </AreaChart>
            </div>
            <div>
                <h1 className='text-xl text text-sky-800 font-bold m-4'>Investment vs Revenue</h1>
                <BarChart width={400} height={300} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>

            <div>
                <h1 className='text-xl text text-sky-800 font-bold m-4'>Investment vs Revenue</h1>
                <PieChart width={400} height={300}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>

        </div>
    );
};

export default Dashboard;