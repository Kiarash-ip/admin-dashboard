import React from "react";
import Grid from "@mui/material/Grid";
import CustomPaper from "../globals/CustomPaper";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { countriesInformation } from "../../mockDatas";
import CountryInfoItem from "./CountryInfoItem";
import CustomListCard from "../globals/CustomListCard";

export default function CountiesInformationCard() {
  return (
    <Grid item md={4}>
      <CustomPaper>
        <>
          <CardHeader
            sx={{ padding: "24px 24px 0 24px" }}
            title="Top Installed Countries"
          />
          <CustomListCard>
            {countriesInformation.map((country) => (
              <CountryInfoItem
                key={country.id}
                title={country.title}
                src={country.src}
                android={country.android}
                mac={country.mac}
                windows={country.windows}
              />
            ))}
          </CustomListCard>
        </>
      </CustomPaper>
    </Grid>
  );
}
