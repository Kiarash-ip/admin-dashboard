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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import { tokens } from "../../theme";
import { dashboardAppInvoices } from "../../mockDatas";
import { IconButton } from "@mui/material";
import { InvoiceStatus } from "../../types";

const StyledTableCell = styled(TableCell, {
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

const CustomStyleChip = styled(Chip, {
  shouldForwardProp: (props) => props !== "type",
})<{ type: InvoiceStatus }>(({ theme, type }) => ({
  height: "24px",
  minWidth: "22px",
  borderRadius: "6px",
  cursor: "default",
  alignItems: "center",
  whiteSpace: "nowrap",
  display: "inline-flex",
  justifyContent: "center",
  textTransform: "capitalize",
  padding: "0px 8px",
  fontSize: "0.75rem",
  fontWeight: "700",
  ...(type === InvoiceStatus.inProgress
    ? {
        backgroundColor: "rgba(255, 171, 0, 0.16)",
        color: "rgb(255, 214, 102)",
      }
    : type === InvoiceStatus.paid
    ? {
        color: "rgb(134, 232, 171)",
        backgroundColor: "rgba(54, 179, 126, 0.16)",
      }
    : type === InvoiceStatus.outOfDate
    ? {
        color: "rgb(255, 172, 130)",
        backgroundColor: "rgba(255, 86, 48, 0.16)",
      }
    : {}),
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

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
      <CustomPaper
        extraStyles={{
          display: "block",
        }}
      >
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
                  <StyledTableRow key={row.invoiceId}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      bgColor={{
                        body: colors.primary[400],
                      }}
                    >
                      {row.invoiceId}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      bgColor={{
                        body: colors.primary[400],
                      }}
                    >
                      {row.category}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      bgColor={{
                        body: colors.primary[400],
                      }}
                    >
                      {row.price}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      bgColor={{
                        body: colors.primary[400],
                      }}
                    >
                      <CustomStyleChip
                        label={`${row.status}`}
                        type={row.status}
                      />
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      bgColor={{
                        body: colors.primary[400],
                      }}
                    >
                      <IconButton size="medium">
                        <MoreVertIcon
                          sx={{
                            color: colors.grey[300],
                          }}
                        />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
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
