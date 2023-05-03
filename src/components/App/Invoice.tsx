import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CustomPaper from "../globals/CustomPaper";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Chip from "@mui/material/Chip";
import { tokens } from "../../theme";
import { dashboardAppInvoices } from "../../mockDatas";
import { IconButton } from "@mui/material";
import { InvoiceStatus } from "../../types";
import InvoiceListItem from "./InvoiceListItem";

export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (props) => props !== "bgColor",
})<{
  bgColor: {
    head?: string;
    body?: string;
  };
}>(({ theme, bgColor }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: bgColor?.head || theme.palette.primary.dark,
    color: theme.palette.grey[400],
    fontSize: 14,
    lineHeight: "1.5rem",
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "none",
    backgroundColor: bgColor?.body || theme.palette.primary.dark,
    fontWeight: 400,
  },
}));

function createData(
  invoiceId: string,
  category: string,
  price: number,
  status: InvoiceStatus
) {
  return { invoiceId, category, price, status };
}

const rows = [
  createData("INV-1682964006686	", "Mac", 16.31, InvoiceStatus.inProgress),
  createData("INV-1682964006687	", "Mac", 21.02, InvoiceStatus.paid),
  createData("INV-1682964006688	", "Windows", 12.24, InvoiceStatus.inProgress),
  createData("INV-1682964006689	", "Android", 53.32, InvoiceStatus.outOfDate),
  createData("INV-1682964006690	", "Android", 16.05, InvoiceStatus.outOfDate),
];

export default function Invoice() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid item md={8}>
      <CustomPaper>
        <>
          <CardHeader
            title="New Invoice"
            sx={{
              alignSelf: "stretch",
              padding: "24px 24px 0",
              marginBottom: "24px",
            }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {dashboardAppInvoices.map((cell) => (
                    <StyledTableCell
                      key={cell.id}
                      bgColor={{
                        head: colors.primary[300],
                      }}
                    >
                      {cell.title}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <InvoiceListItem
                    invoiceId={row.invoiceId}
                    category={row.category}
                    price={row.price}
                    status={row.status}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          <Box padding="16px" textAlign="right">
            <Button
              sx={{ color: "#fff", fontWeight: 700 }}
              endIcon={<ArrowForwardIosIcon />}
            >
              View All
            </Button>
          </Box>
        </>
      </CustomPaper>
    </Grid>
  );
}
