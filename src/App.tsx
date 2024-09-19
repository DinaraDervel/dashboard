import Grid from "@mui/material/Grid2";
import { Button, Stack, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./styles/themes/theme";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/MainPage/TopBar/TopBar";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SearchForm from "./Components/MainPage/SearchForm/SearchForm";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container sx={{ bgcolor: "background.default" }}>
          <Grid size={3}>
            <Sidebar />
          </Grid>
          <Grid size={9}>
            <TopBar user="Иванов И.И." userTarif="Тариф до 15.04.2024" />
            <Stack direction="row" spacing={2} sx={{ mt: 8 }}>
              <Typography
                variant="h1"
                align="left"
                sx={{
                  mt: 6,
                  color: "primary",
                }}
              >
                Остатки сформированы на 01.04.2023 г.
              </Typography>
              <Button
                variant="contained"
                startIcon={<LibraryBooksIcon />}
                sx={{
                  bgcolor: "primary.dark",
                  color: "text.secondary",
                  borderRadius: 4,
                }}
              >
                Инструкция
              </Button>
            </Stack>
            <SearchForm />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
