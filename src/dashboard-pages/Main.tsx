import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CardComp from "../components/App/CardComp";
import PieChartCard from "../components/App/PieChartCard";
import LineChartCard from "../components/App/LineChartCard";

export default function Main() {
  return (
    <Grid
      container
      sx={{ paddingLeft: "24px", paddingRight: "24px" }}
      spacing={3}
    >
      <CardComp />
      <CardComp />
      <CardComp />
      <PieChartCard />
      <LineChartCard />
    </Grid>
  );
}