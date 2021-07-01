import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { salesData as data } from './salesData';

export default function SalesGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="transparent" />
        <XAxis dataKey="name" scale="band" />
        <YAxis
          yAxisId="right"
          orientation="right"
          scale="auto"
          axisLine={false}
          tickLine={false}
          name="Sales"
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          scale="auto"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="sales"
          barSize={15}
          fill="#5d89da"
          name="Sales"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="perc"
          dot={false}
          stroke="#3fae2a"
          name="yoy %"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
