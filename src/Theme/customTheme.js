import { createTheme } from '@mui/material/styles';
const Mytheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    easy:{
      light: '#03c4bd',
      main: '#025c5a',
      dark: '#01504e',
      contrastText: '#02a5a0',
    }
  },
});
export default Mytheme;