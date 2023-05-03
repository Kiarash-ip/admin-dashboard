import React from "react";
import Grid from "@mui/material/Grid";
import CustomPaper from "../globals/CustomPaper";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import { styled, useTheme } from "@mui/material/styles";
import { applicationListData } from "../../mockDatas";
import ApplicationListItem from "./ApplicationListItem";

const CustomStyledMenu = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px 0px 24px 24px",
  "& > div:not(:first-child)": {
    marginTop: "24px",
  },
}));

export default function ApplicationsListCard() {
  return (
    <Grid item md={4}>
      <CustomPaper>
        <>
          <CardHeader
            title="Top Related Applications"
            sx={{
              padding: "24px 24px 0",
            }}
          />
          <CustomStyledMenu>
            {applicationListData.map((item) => (
              <ApplicationListItem
                key={item.id}
                avatar={item.avatar}
                title={item.title}
                platform={item.platform}
                cost={item.cost}
                rate={item.rate}
                reviews={item.reviews}
              />
            ))}
          </CustomStyledMenu>
        </>
      </CustomPaper>
    </Grid>
  );
}
