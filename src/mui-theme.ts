import { createTheme } from '@mui/material/styles';

// Extend MUI Palette to include "custom"
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      border: {
        primary: string;
        subtle: string;
      };
      inverseText: string;
      backgroundPrimary: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      border?: {
        primary?: string;
        subtle?: string;
      };
    };
  }
}

export const muiTheme = createTheme({
  cssVariables: true,
  shape: {
    borderRadius: 32,
  },
  palette: {
    mode: 'light',

    background: {
      default: '#f8f9fb',
      paper: '#ffffff',
    },

    // Text
    text: {
      primary: '#333D47', // Text/Primary
      secondary: '#20262D', // Text/Secondary
    },

    // Primary (brand color)
    primary: {
      main: '#1E96FC', // Text/Link, Text/Brand, Background/Brand
      contrastText: '#F8F9FA', // Text/Primary Inverse
    },

    // Secondary (tertiary text)
    secondary: {
      main: '#5D7083', // Text/Tertiary
      contrastText: '#ffffff',
    },

    // Error (destructive, negative)
    error: {
      main: '#FA2020', // Background/Negative
    },

    // Warning
    warning: {
      main: '#f0ad4e',
    },

    // Info
    info: {
      main: '#5bc0de',
    },

    // Success
    success: {
      main: '#5cb85c',
    },

    // Custom tokens
    custom: {
      border: {
        primary: '#AFBAC6', // Border/Primary
        subtle: '#EEF0F2', // Border/Subtle
      },
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2rem',
          textTransform: 'none',
          padding: '6px 16px',
        },
      },
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'inherit',
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderBottom: '1px solid',
          borderColor: 'border.subtle',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        notchedOutline: {
          borderColor: 'var(--mui-palette-custom-border-primary)',
        },
      },
    },
  },
});
