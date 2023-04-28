import React, { PureComponent, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { pieChartData } from "../../mockDatas";
import { PieChartColors } from "../../types";
import CircleIcon from "@mui/icons-material/Circle";

interface Props {
  colors: PieChartColors[];
  activeIndex: number;
  setColorsHandler(index: number): void;
}

export default function CustomPieChart({
  colors,
  setColorsHandler,
  activeIndex,
}: Props) {
  const [activeHover, setActiveHover] = useState(-1);
  return (
    <div style={{ width: "300px", height: "300px", position: "relative" }}>
      <ResponsiveContainer>
        <PieChart onMouseEnter={() => {}} onClick={() => setColorsHandler(-1)}>
          <Pie
            data={pieChartData}
            innerRadius={130}
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  colors[index].active
                    ? colors[index].color
                    : alpha(colors[index].color, 0.2)
                }
                onMouseOver={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(-1)}
                strokeWidth={0}
                onClick={(e) => {
                  console.log(e);
                }}
              />
            ))}
          </Pie>
          <Tooltip
            content={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#fff",
                  padding: "2px 8px",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  border: "none",
                }}
              >
                <CircleIcon
                  sx={{ color: colors[activeHover]?.color || "#fff" }}
                />
                <Typography variant="subtitle2">
                  {pieChartData[activeHover]?.name}
                </Typography>
                <Typography variant="subtitle2">
                  {pieChartData[activeHover]?.value}
                </Typography>
              </Box>
            }
          />
        </PieChart>
      </ResponsiveContainer>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: colors[activeIndex]?.color,
          }}
        >
          {pieChartData[activeIndex]?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          {pieChartData[activeIndex]?.value}
        </Typography>
      </Box>
    </div>
  );
}
