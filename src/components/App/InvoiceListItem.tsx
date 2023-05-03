import React, { useState, useEffect, useRef } from "react";
import Chip from "@mui/material/Chip";
import TableRow from "@mui/material/TableRow";
import { styled, useTheme } from "@mui/material/styles";
import { InvoiceStatus } from "../../types";
import { tokens } from "../../theme";
import { StyledTableCell } from "./Invoice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import InvoiceMoreMenu from "./InvoiceMoreMenu";

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

export const isClickedInside = (event: any, classname: string) => {
  return !event.target.closest(`.${classname}`)?.classList.contains(classname);
};

interface Props {
  invoiceId: string;
  category: string;
  price: number;
  status: InvoiceStatus;
}

export default function InvoiceListItem({
  invoiceId,
  category,
  price,
  status,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow key={invoiceId}>
      <StyledTableCell
        component="th"
        scope="row"
        bgColor={{
          body: colors.primary[400],
        }}
      >
        {invoiceId}
      </StyledTableCell>
      <StyledTableCell
        align="left"
        bgColor={{
          body: colors.primary[400],
        }}
      >
        {category}
      </StyledTableCell>
      <StyledTableCell
        align="left"
        bgColor={{
          body: colors.primary[400],
        }}
      >
        {price}
      </StyledTableCell>
      <StyledTableCell
        align="left"
        bgColor={{
          body: colors.primary[400],
        }}
      >
        <CustomStyleChip label={`${status}`} type={status} />
      </StyledTableCell>
      <StyledTableCell
        align="right"
        bgColor={{
          body: colors.primary[400],
        }}
      >
        <IconButton
          size="medium"
          sx={{ position: "relative" }}
          className={`${invoiceId}`}
          onClick={handleClick}
        >
          <MoreVertIcon
            sx={{
              color: colors.grey[300],
            }}
          />
        </IconButton>
        <InvoiceMoreMenu
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
        />
      </StyledTableCell>
    </TableRow>
  );
}
