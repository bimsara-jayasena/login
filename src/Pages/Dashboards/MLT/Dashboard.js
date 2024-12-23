import * as React from "react";

import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import SideMenu from "./components/SideMenu";
import AppTheme from "../../../Theme/shared-theme/AppTheme";
import { columns, EmpRows } from "./internals/data/gridData";
import { createContext } from "react";
import {
  dataGridCustomizations,
  datePickersCustomizations,
} from "./theme/customizations";

const xThemeComponents = {
  ...dataGridCustomizations,
  ...datePickersCustomizations,
};
export const myContext = createContext();
export default function Dashboard(props) {
  const [page, setPage] = React.useState("Home");
  const handlePages = (page) => {
    setPage(page);
 
  };
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <myContext.Provider value={handlePages}>
          <SideMenu />
          <AppNavbar />
        </myContext.Provider>
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            
            <myContext.Provider value={page}>
             
            </myContext.Provider>
            <myContext.Provider value={page}>
              <MainGrid />
            </myContext.Provider>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
