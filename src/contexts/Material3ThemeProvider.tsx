"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material 3 color tokens
const material3Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#172d4F", // Your brand color
      light: "#3F4F6F",
      dark: "#0F1F3F",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2E354F",
      light: "#4A506F",
      dark: "#1E2A3F",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ECF2F5",
      // paper: '#F2E9D8',
      // paper: "#F8F1F6",
    },
    error: {
      main: "#ba1a1a",
      light: "#de3730",
      dark: "#410e0b",
    },
    warning: {
      main: "#825500",
      light: "#a06600",
      dark: "#633f00",
    },
    info: {
      main: "#0061a4",
      light: "#0077cc",
      dark: "#004d84",
    },
    success: {
      main: "#006e1c",
      light: "#008a20",
      dark: "#005316",
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 400,
      fontSize: "3.5rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 400,
      fontSize: "2.25rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "1.875rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "none",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 12, // Material 3 uses more rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 20,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 24,
          paddingRight: 24,
        },
        containedPrimary: {
          // backgroundColor: "#D8D8F2",
          backgroundColor: "#172d4F",
          "&:hover": {
            // backgroundColor: "#CECBE5",
            backgroundColor: "#1E2A3F",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: "rgba(255, 255, 255, 0.5)",
            borderRadius: 12,
            border: "1.5px solid white",
            backdropFilter: "blur(10px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
            color: "#2c2c54",

            "& fieldset": {
              borderColor: "none",
              border: "none",
            },
            "&:hover fieldset": {
              borderColor: "none",
            },
            "&.Mui-focused fieldset": {
              borderColor: "none",
              boxShadow: "none",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          //        "&:hover": {
          //   backgroundColor: "#C8EFEF", // ← slightly darker or richer
          // }
        },
      },
    },
  },
});

interface Material3ThemeProviderProps {
  children: React.ReactNode;
}

export default function Material3ThemeProvider({
  children,
}: Material3ThemeProviderProps) {
  return (
    <ThemeProvider theme={material3Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
