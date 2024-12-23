import * as React from "react";
import { pink, red } from "@mui/material/colors";
import Step from "@mui/material/Step";
import Mytheme from "../../Theme/customTheme";
import { ThemeProvider, useTheme } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const EasyStep = styled(Step)(({ theme }) => ({
  "& .MuiStepLabel-label.Mui-active": {
    color: Mytheme.palette.easy.light, // Active step label color
  },
  "& .MuiStepIcon-root.Mui-active": {
    color: Mytheme.palette.easy.light, // Active icon color
  },
  "& .MuiStepIcon-root.Mui-completed": {
    color: Mytheme.palette.easy.light, // Completed icon color
  },
}));

export default EasyStep;
