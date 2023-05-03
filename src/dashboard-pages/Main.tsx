import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CardComp from "../components/App/CardComp";
import PieChartCard from "../components/App/PieChartCard";
import LineChartCard from "../components/App/LineChartCard";
import Invoice from "../components/App/Invoice";
import ApplicationsListCard from "../components/App/ApplicationsListCard";
import CountiesInformationCard from "../components/App/CountiesInformationCard";
import AuthorsListCard from "../components/App/AuthorsListCard";

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
      <Invoice />
      <ApplicationsListCard />
      <CountiesInformationCard />
      <AuthorsListCard />
    </Grid>
  );
}
