import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import Mytheme from "../../../../Theme/customTheme";
import { alpha, styled } from "@mui/material/styles";
import EasyListItemButton from "../../../../Components/EasyListItemButton";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import StorefrontIcon from '@mui/icons-material/Storefront';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { myContext } from "../Dashboard";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon /> },
  { text: "Appoinments", icon: <AnalyticsRoundedIcon /> },
  { text: "Jobs", icon: <PeopleRoundedIcon /> },
  { text: "Inventory", icon: <AssignmentRoundedIcon /> },
];
const CustomTreeItem = styled(TreeItem)({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  ':hover':{
    color:'white'
  },
  '& .Mui-selected':{
    color:'white',
    
  }
 
});

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },
  { text: "About", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const [clicked, setClicked] = React.useState(0);
  const handlePages=React.useContext(myContext);
  
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <Box sx={{ minHeight: 352, minWidth: 200, textAlign: "start" }}>
        <SimpleTreeView
          defaultExpandedItems={["grid"]}
          slots={{
            expandIcon: AddBoxIcon,
            collapseIcon: IndeterminateCheckBoxIcon,
          }}
        >
          <CustomTreeItem itemId="home" label="Home" slots={{ icon: HomeIcon }} onClick={()=>handlePages("Home")}/>
          <CustomTreeItem itemId="Inventory" label="Inventory" slots={{icon:InventoryIcon}}>
            <CustomTreeItem itemId="test" label="Tests" slots={{icon:BedroomParentIcon}}  onClick={()=>handlePages("Test")}/>
            <CustomTreeItem itemId="hospitals" label="Hospitals" slots={{icon:RestaurantIcon}}  onClick={()=>handlePages("Hospitals")}/>
           
          </CustomTreeItem>

         
        </SimpleTreeView>
      </Box>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
