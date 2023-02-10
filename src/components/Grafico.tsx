import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    
        const data = [
            {
              name: 'Jan',
              uv: 4000,
              pv: 1908,
              amt: 2400,
            },
            {
              name: 'Fev',
              uv: 3000,
              pv: 6000,
              amt: 2210,
            },
            {
              name: 'Mar',
              uv: 2000,
              pv: 5500,
              amt: 2290,
            },
            {
              name: 'Abr',
              uv: 2780,
              pv: 1908,
              amt: 2000,
            },
            {
              name: 'Mai',
              uv: 1890,
              pv: 4800,
              amt: 2181,
            },
            {
              name: 'Jun',
              uv: 2390,
              pv: 7800,
              amt: 2500,
            },
            {
              name: 'Jul',
              uv: 3490,
              pv: 4500,
              amt: 2100,
            },
            {
              name: 'Ago',
              uv: 3490,
              pv: 6300,
              amt: 2100,
            },
            {
              name: 'Set',
              uv: 3490,
              pv: 8300,
              amt: 2100,
            },
            {
              name: 'Oct',
              uv: 3490,
              pv: 7300,
              amt: 2100,
            },
            {
              name: 'Nov',
              uv: 3490,
              pv: 5300,
              amt: 2100,
            },
            {
              name: 'Dez',
              uv: 3490,
              pv: 9900,
              amt: 2100,
            }
          ];
          
          const Grafico = () => (
            
          
               
                  
                   <BarChart width={406}
                     height={200}
                     data={data}
                     barGap={1}>
                  <Bar  dataKey="pv" fill="#0E93C4" barSize={15} />
                  <XAxis  dataKey="name"  fontSize={"12px"}/>
                  </BarChart>
                 
               
          )

export default Grafico
 
