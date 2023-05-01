import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CustomPaper from "../globals/CustomPaper";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import CustomPieChart from "../globals/CustomPieChart";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import { activeColorHandler } from "../../utils";
import { pieChartData } from "../../mockDatas";
import { PieChartColors } from "../../types";

export default function PieChartCard() {
  const [colors, setColors] = useState<PieChartColors[]>([
    {
      active: true,
      color: "#0088FE",
    },
    {
      active: true,
      color: "#00C49F",
    },
    {
      active: true,
      color: "#FFBB28",
    },
    {
      active: true,
      color: "#FF8042",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(-1);

  function setColorsHandler(index: number) {
    setColors((prevState) => activeColorHandler(prevState, index));
  }

  useEffect(() => {
    setColorsHandler(activeIndex);
  }, [activeIndex]);

  return (
    <Grid item md={4}>
      <CustomPaper
        extraStyles={{
          flexDirection: "column",
        }}
      >
        <>
          <CardHeader
            title="Current Download"
            sx={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              padding: "24px 24px 0px",
            }}
            titleTypographyProps={{
              fontWeight: "700",
              lineHeight: "1.55556",
              fontSize: "1.125rem",
              display: "block",
            }}
          />
          <Box marginTop="40px">
            <CustomPieChart
              colors={colors}
              setColorsHandler={setColorsHandler}
              activeIndex={activeIndex}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              height: "72px",
              marginTop: "32px",
              display: "flex",
              alignContent: "center",
              borderTop: "1px solid rgba(145, 158, 171, 0.24)",
            }}
          >
            {pieChartData.map((entry, index) => {
              return (
                <Button
                  startIcon={<CircleIcon sx={{ color: colors[index].color }} />}
                  sx={{
                    color: "#fff",
                  }}
                  onMouseOver={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                >
                  <Typography variant="subtitle2">{entry.name}</Typography>
                </Button>
              );
            })}
          </Box>
        </>
      </CustomPaper>
    </Grid>
  );
}
