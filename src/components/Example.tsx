import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value: 200 },
  { name: 'Fev', value: 600 },
  { name: 'Mar', value: 600 },
  { name: 'Abr', value: 450 },
  { name: 'Jun', value: 600 },
  { name: 'Jul', value: 600 },
  { name: 'Agu', value: 600 },
  { name: 'Oct', value: 600 },
  { name: 'Nov', value: 600 },
  { name: 'Dez', value: 600 },
];

const Example = () => (
  <BarChart
    width={400}
    height={150}
    data={data}
    margin={{
      top: 5, right: 30, left: 20, bottom: 5 ,
    }}
  >
    
    <XAxis dataKey="name"   />
    <Bar dataKey="value" fill="#1194C3" />
  </BarChart>
);

export default Example;
