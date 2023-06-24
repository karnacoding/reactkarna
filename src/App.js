import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Landing from "./containers/landing";
import Features from "./containers/features";
import Tools from "./containers/tools";
import Samples from "./containers/samples";
import About from "./containers/about";
import {Toolbar} from '@mui/material';
import CustomizedSwitches from './components/switch';
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
    <><ThemeProvider theme={appliedTheme}>
    <CssBaseline />
    <ResponsiveAppBar>
      <Toolbar>
        <CustomizedSwitches checked={checked} onChange={() => { changeTheme() }} 
        style={{ color: appliedTheme.palette.secondary.icons }} />
      </Toolbar>
    </ResponsiveAppBar>
    <Landing /><Features /><Tools /><Samples /><About />
  </ThemeProvider></>
  );
}

export default App;
