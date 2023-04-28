import { useState } from "react";
import "./App.css";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "./theme";
import Navigation from "./components/Navbar/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./dashboard-pages/Main";

function App() {
  const [theme, ColorMode] = useMode();
  const [count, setCount] = useState(0);
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSideBarOpen((prevState) => !prevState);
  };

  console.log(ColorMode);
  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <Navigation open={sideBarOpen} />
        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          <Sidebar open={sideBarOpen} toggleSidebar={toggleSidebar} />
          <main>
            <Main />
          </main>
        </div>

        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
