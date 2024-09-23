import { Box, Input, Typography } from "@mui/material";

type Props = {
  name: string;
  value: string;
};

const SearchItem = ({ name, value }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        gap: 1,
        justifyContent: "space-between",
        bgcolor: "background.paper",
        p: 1,
      }}
    >
      <Typography variant="body1" sx={{ color: "text.primary" }}>
        {name}
      </Typography>
      <Input
        disableUnderline
        placeholder={value}
        value={value}
        sx={{
          height: "100%",
          borderRadius: 5,
          bgcolor: "background.default",
          color: "#cdcfd2",
          p: 1,
        }}
      />
    </Box>
  );
};

export default SearchItem;
