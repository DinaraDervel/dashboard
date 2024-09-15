import { AccountCircle } from "@mui/icons-material";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

type Props = {
  user: string;
  userTarif: string;
};
const TopBar = ({ user, userTarif }: Props) => {
  return (
    <AppBar
      position="static"
      sx={{ width: "80%", mt: 2, bgcolor: "background.paper", borderRadius: 5 }}
    >
      <Toolbar
        sx={{
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" alignItems="center">
          <AccountCircle sx={{ color: "text.primary", mr: 1 }} />
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            {user}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              bgcolor: "secondary.dark",
              borderRadius: 5,
              ml: 3,
              p: 2,
              color: "primary.main",
            }}
          >
            {userTarif}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "primary.light",
              borderRadius: 5,
              color: "primary.light",
            }}
          >
            Выйти
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: 5,
              color: "text.secondary",
            }}
          >
            О нас &#xFFEB;
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
