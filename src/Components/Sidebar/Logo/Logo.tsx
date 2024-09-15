import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        color="text.secondary"
        sx={{
          p: 0.2,
          bgcolor: "primary.main",
          borderRadius: 1,
          display: "inline",
        }}
      >
        ФИН
      </Typography>

      <Typography
        variant="h2"
        color="text.secondary"
        sx={{ display: "inline", paddingLeft: 0.5 }}
      >
        Контроль
      </Typography>
    </Box>
  );
};

export default Logo;
