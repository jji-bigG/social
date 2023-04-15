import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
} from "@mui/material";
import React from "react";
import AppBarList from "./AppBarList";
import { styled } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface Props {
  menuOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: 250,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

const AppBarDrawer = ({ menuOpen, setOpen }: Props) => {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => setOpen(false)}>
      {/* <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar> */}
      <AppBarList />
    </Drawer>
  );
};

export default AppBarDrawer;
