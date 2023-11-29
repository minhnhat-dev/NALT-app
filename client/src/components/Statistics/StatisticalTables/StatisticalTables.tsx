import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatisticalTables = () => {
  const data = [
    {
      name: "Mon",
      balance: 4000,
      recharge: 2400,
      withdraw: 2400,
    },
    {
      name: "Tue",
      balance: 3000,
      recharge: 1398,
      withdraw: 2210,
    },
    {
      name: "Wed",
      balance: 2000,
      recharge: 9800,
      withdraw: 2290,
    },
    {
      name: "Thur",
      balance: 2780,
      recharge: 3908,
      withdraw: 2000,
    },
    {
      name: "Fri",
      balance: 1890,
      recharge: 4800,
      withdraw: 2181,
    },
    {
      name: "Sat",
      balance: 2390,
      recharge: 3800,
      withdraw: 2500,
    },
    {
      name: "Sun",
      balance: 3490,
      recharge: 4300,
      withdraw: 2100,
    },
  ];
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="balance" stroke="#8884d8" />
        <Line type="monotone" dataKey="recharge" stroke="#82ca9d" />
        <Line type="monotone" dataKey="withdraw" stroke="#FF0000" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatisticalTables;
