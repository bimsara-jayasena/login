import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Mytheme from "../../Theme/customTheme";
import { ThemeProvider, useTheme } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
   borderColor:Mytheme.palette.easy.light,// Default color
  "&.Mui-checked": {
    "&:hover": {
      backgroundColor: alpha(Mytheme.palette.easy.light, 1), // Light hover background
    },
    color: "white",
    backgroundColor: alpha(Mytheme.palette.easy.light, 1),
  },
  "&:hover": {
    backgroundColor: alpha(Mytheme.palette.easy.light, 0.5), // Light hover background
  },
}));

export default CustomCheckbox;
