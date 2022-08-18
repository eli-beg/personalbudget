import { blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const font = "'Lato', sans-serif";

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
  margin: 0,
  padding: 0,
  h3: {
    fontSize: "1.4rem",
    color: "#2596be",
    fontWeight: 700,
  },

  h5: {
    fontSize: "2.4",
    color: "#2596be",
    fontWeight: 500,
  },
  h6: {
    fontSize: "2.1rem",
    color: "#2596be",
    fontWeight: 500,
  },
  h8: {
    fontSize: "1.7rem",
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
  typography: {
    fontFamily: font,
    fontWeight: 700,
    fontSize: 14,
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
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.2)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
