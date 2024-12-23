import * as React from "react";
import { pink } from "@mui/material/colors";
import ListItemButton from "@mui/material/ListItemButton";
import Mytheme from "../Theme/customTheme";
import { ThemeProvider, useTheme } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
const EasyListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: Mytheme.palette.easy.main, // Light hover background
    color:'white'
  },
  "&.Mui-selected":{
    color:'white'
  }
}));

export default EasyListItemButton;