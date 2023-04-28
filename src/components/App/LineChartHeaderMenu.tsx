import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  lighten,
} from "@mui/material/styles";
import { tokens } from "../../theme";

const options = ["2020", "2019"];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        aria-controls={open ? "split-button-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-label="select merge strategy"
        aria-haspopup="menu"
        sx={{
          backgroundColor: lighten("rgb(33, 43, 54)", 0.1),
          fontWeight: "600",
          color: "#fff",
          lineHeight: "1.57143",
          fontSize: "1rem",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
        ref={anchorRef}
        onClick={handleToggle}
      >
        {options[selectedIndex]}
        <ArrowDropDownIcon
          sx={{
            marginLeft: "8px",
          }}
        />
      </Button>
      <Popper
        sx={{
          zIndex: 1,
          width: "80px",
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
              backgroundColor: colors.grey[800],
              border: "1px solid #fff",
              borderRadius: "0",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  sx={{
                    padding: "4px 0",
                  }}
                  id="split-button-menu"
                  autoFocusItem
                >
                  {options.map((option, index) => (
                    <MenuItem
                      sx={{
                        padding: "0",
                        paddingLeft: "8px",
                      }}
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
