// ****************************************************
// @TODO MAKE CONNECTION TO BACKEND DATA
// DEV DATA IMPORT TO BE DELETED ONES CONECTION MADE WITH SERVER
import { healthData } from './dev_health_data';
// ****************************************************
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function WeightGraph() {
  const data = healthData.weight;
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="weight" stroke="#3fae2a" />
      <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
      <XAxis dataKey="date" tickLine={false} axisLine={false} />
      <YAxis
        domain={['dataMin - 10', 'dataMax + 10']}
        tickLine={false}
        axisLine={false}
      />
      <Tooltip />
    </LineChart>
  );
}
