import React, { PureComponent } from "react";
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
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const data = [
  {
    name: "Jan",
    Asia: 4000,
    America: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Asia: 3000,
    America: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Asia: 2000,
    America: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Asia: 2780,
    America: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Asia: 1890,
    America: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    Asia: 2390,
    America: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    Asia: 3490,
    America: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    Asia: 2390,
    America: 3800,
    amt: 2500,
  },
  {
    name: "Sep",
    Asia: 3000,
    America: 1398,
    amt: 2210,
  },
];

const renderColorfulLegendText = (value: string, entry: any) => {
  return (
    <span
      style={{
        color: "#fff",
        padding: "0 5px",
        fontSize: "14px",
        fontWeight: "500",
      }}
    >
      {value}
    </span>
  );
};

export default function CustomLineChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div style={{ width: "100%", minHeight: "379px" }}>
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
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgb(99, 115, 129)"
          />
          <XAxis
            axisLine={false}
            dataKey="name"
            strokeWidth={0}
            tickMargin={10}
            fontSize="12px"
            stroke="rgb(99, 115, 129)"
          />
          <YAxis
            axisLine={false}
            tickMargin={10}
            strokeWidth={0}
            fontSize="12px"
            stroke="rgb(99, 115, 129)"
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={12}
            height={40}
            style={{
              color: "#fff",
            }}
            formatter={renderColorfulLegendText}
          />
          <Line
            type="monotone"
            dataKey="America"
            stroke={colors.blueAccent[400]}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Asia"
            stroke={colors.greenAccent[500]}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
