import React from "react";
import Grid from "@mui/material/Grid";
import CustomPaper from "../globals/CustomPaper";
import CardHeader from "@mui/material/CardHeader";
import CustomListCard from "../globals/CustomListCard";
import { authorsList } from "../../mockDatas";
import AuthorListItem from "./AuthorListItem";

export default function AuthorsListCard() {
  return (
    <Grid item md={4}>
      <CustomPaper>
        <>
          <CardHeader
            sx={{ padding: "24px 24px 0 24px" }}
            title="Top Authors"
          />
          <CustomListCard>
            {authorsList.map((author) => (
              <AuthorListItem
                key={author.id}
                avatar={author.avatar}
                name={author.name}
                likes={author.likes}
                cupColor={author.cupColor}
                cupBgColor={author.cupBgColor}
              />
            ))}
          </CustomListCard>
        </>
      </CustomPaper>
    </Grid>
  );
}
