import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "white",
          paddingBottom: 50,
        },
      }
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1488}
  },
})

export default theme;