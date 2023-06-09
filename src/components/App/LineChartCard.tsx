import Grid from "@mui/material/Grid";
import React from "react";
import CustomPaper from "../globals/CustomPaper";
import CardHeader from "@mui/material/CardHeader";
import SplitButton from "./LineChartHeaderMenu";
import CustomLineChart from "../globals/CustomLineChart";

export default function LineChartCard() {
  return (
    <Grid item md={8}>
      <CustomPaper
        extraStyles={{
          display: "block",
          paddingBottom: "45px",
        }}
      >
        <>
          <CardHeader
            sx={{ padding: "24px 24px 0 24px" }}
            title="Area Installed"
            subheader="(+43%) than last year"
            action={<SplitButton />}
          />
          <CustomLineChart />
        </>
      </CustomPaper>
    </Grid>
  );
}
