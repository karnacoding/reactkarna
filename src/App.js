import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lightTheme, { darkTheme } from './theme';
import ResponsiveAppBar from "./components/appbar";

function App() {

  const [checked, setChecked] = React.useState(false);
  const [newtheme, setTheme] = React.useState(false);
  function changeTheme() {
    setTheme(!newtheme);
    setChecked(!checked);
  }
 
  const appliedTheme = createTheme(newtheme ? darkTheme : lightTheme);

  return (
    <React.Fragment><ThemeProvider theme={appliedTheme}>
    <CssBaseline />
    <ResponsiveAppBar checked={checked} onChange={() => { changeTheme() }} 
            theme={appliedTheme.palette.secondary.icons} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
