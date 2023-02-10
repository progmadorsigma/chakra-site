import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 600,
    amt: 2400,
  },
  {
    name: 'Fev',
    uv: 3000,
    pv: 3300,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 2300,
    amt: 2290,
  },
  {
    name: 'Abr',
    uv: 2780,
    pv: 600,
    amt: 2000,
  },
  {
    name: 'Mai',
    uv: 1890,
    pv: 2800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 5000,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 2800,
    amt: 2100,
  },
  {
    name: 'Ago',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Set',
    uv: 3490,
    pv: 5600,
    amt: 2100,
  },
  {
    name: 'Out',
    uv: 3490,
    pv: 4000,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 3200,
    amt: 2100,
  },
  {
    name: 'Dez',
    uv: 3490,
    pv: 6000,
    amt: 2100,
  },
 
];

  const Grafic = () => (

 
      
        <LineChart
        width={300}
          height={150}
          data={data}
          barGap={1}>
          <Line type="monotone" dataKey="pv" stroke="#3996B6" strokeWidth={3} />
        <XAxis  fontSize={"10px"} dataKey="name"/>
        </LineChart>
    
      
    );

    export default Grafic

