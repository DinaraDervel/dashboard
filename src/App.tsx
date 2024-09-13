import Grid from "@mui/material/Grid2";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/themes/theme";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2} color="background.default">
          <Grid size={4}>
            <Sidebar />
          </Grid>
          <Grid size={8}></Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
