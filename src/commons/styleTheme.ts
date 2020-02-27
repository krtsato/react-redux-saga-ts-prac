import {createMuiTheme} from "@material-ui/core/styles"

export const styleTheme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    type: "light",
    primary: {
      light: "#b2fef7",
      main: "#80cbc4",
      dark: "#4f9a94",
      contrastText: "#000"
    },
    secondary: {
      light: "#b1dffe",
      main: "#80adcb",
      dark: "#507e9a",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff"
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    grey: {
      50: "#f7f7f7",
      100: "#ebebeb",
      200: "#dedede",
      300: "#d1d1d1",
      400: "#c7c7c7",
      500: "#bdbdbd",
      600: "#b7b7b7",
      700: "#aeaeae",
      800: "#a6a6a6",
      900: "#989898",
      A100: "#cfd8dc",
      A200: "#b0bec5",
      A400: "#78909c",
      A700: "#455a64"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },

  mixins: {
    // reference of the following parameters  https://bit.ly/2OrHrF4
    // variant="dense" in Toolbar props can only apply to desktop devices.
    toolbar: {minHeight: 42}
  },
  props: {
    MuiAppBar: {elevation: 1},
    MuiButton: {
      disableElevation: true,
      color: "primary",
      variant: "contained"
    },
    MuiCard: {variant: "outlined"},
    MuiCheckbox: {color: "primary"},
    MuiList: {dense: true},
    MuiListItemText: {disableTypography: true},
    MuiRadio: {color: "primary"},
    MuiSwitch: {color: "primary"},
    MuiTable: {size: "small"},
    MuiTextField: {variant: "outlined"}
  },
  spacing: 8,
  typography: {
    htmlFontSize: 12,
    button: {
      fontSize: 14,
      textTransform: "none"
    },
    body1: {fontSize: 14},
    body2: {fontSize: 12},
    caption: {fontSize: 10},
    h1: {fontSize: 28},
    h2: {fontSize: 26},
    h3: {fontSize: 24},
    h4: {fontSize: 22},
    h5: {fontSize: 20},
    h6: {fontSize: 18},
    subtitle1: {fontSize: 16},
    subtitle2: {fontSize: 14},
    overline: {fontSize: 10}
  }
})
