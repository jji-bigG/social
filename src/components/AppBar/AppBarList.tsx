import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  ListSubheader,
} from "@mui/material";
import React from "react";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import InboxIcon from "@mui/icons-material/Inbox";
import MessageIcon from "@mui/icons-material/Message";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PublicIcon from "@mui/icons-material/Public";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CommunityItems from "./CommunityItems";

const AppBarList = () => {
  return (
    <List component="nav">
      <ListItem key={`Social Typography`}>
        <ListSubheader component={`div`}>Social</ListSubheader>
        <HelpToolTip text="The main thing here" />
      </ListItem>

      <ListItem key={"Inbox"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Inbox"} />
        </ListItemButton>
      </ListItem>

      <ListItem key={"DM"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary={"Direct Messages"} />
        </ListItemButton>
      </ListItem>

      <ListItem key={"Tweets"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary={"Tweets"} />
        </ListItemButton>
      </ListItem>

      <ListItem key={"For You"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary={"For You"} />
        </ListItemButton>
      </ListItem>

      <Divider />

      <ListItem key={`Communities Typography`}>
        <ListSubheader component={`div`}>Communities</ListSubheader>
        <HelpToolTip text="Sorta like your discord servers or reddit communities" />
      </ListItem>

      <Divider />

      <ListItem key={`Account Management Typography`}>
        <ListSubheader component={`div`}>Account Management</ListSubheader>
        <HelpToolTip text="For Content Creators" />
      </ListItem>

      {/* <CommunityItems /> */}

      <ListItem key={"DashBoard"} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"DashBoard"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

interface HelpToolTipProps {
  text: string;
}

function HelpToolTip({ text }: HelpToolTipProps) {
  return (
    <Tooltip title={text} placement="right">
      <HelpOutlineIcon />
    </Tooltip>
  );
}

export default AppBarList;
