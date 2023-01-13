import React, {useState} from 'react'

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';


function App() {
    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
      palette: {
        mode: mode,
      },
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar />
          <Feed/>
          <Rightbar/>
          </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
