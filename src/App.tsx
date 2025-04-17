import { CssBaseline } from '@mui/material';
import { GlobalFieldsSettings } from 'pages';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from 'mui-theme';
import { MainLayout } from 'layouts';

const App = () => {
  // ! render
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <MainLayout>
        <GlobalFieldsSettings />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
