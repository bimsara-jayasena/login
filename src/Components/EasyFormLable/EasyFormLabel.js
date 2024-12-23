import * as React from "react";
import FormLabel from "@mui/material/FormLabel";

import Mytheme from "../../Theme/customTheme";
import { alpha, styled } from "@mui/material/styles";
import { colors } from "@mui/material";
const EasyFormLabel = styled(FormLabel)(({ theme }) => ({
  /* backgroundColor:'red', */
  "&.Mui-focused": {
    color: alpha(Mytheme.palette.easy.light, 1),
   
  },
  "&:hover": {
    color: alpha(Mytheme.palette.easy.light, 0.5), // Light hover background
   
  },
  
}));

export default EasyFormLabel;