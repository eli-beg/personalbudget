import { blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  boxSizing: "border-box",
  h5: {
    fontSize: "0.875rem",
    color: "#2596be",
    fontWeight: 500,
  },
  palette: {
    text: {
      primary: "#2596be",
      secondary: "#4f46bb",
      background: { paper: "#7cc3e3" },
      blueGrey: {
        50: "#eceff1",
        200: "#b0bec5",
        400: "#78909c",
        600: "#546e7a",
      },
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "13px",
          "&:hover": {
            backgroundColor: "#b2ebf2",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#546e7a",
          "&:hover": {
            color: "#4f46bb",
          },
        },
      },
    },
  },
});

export default theme;
