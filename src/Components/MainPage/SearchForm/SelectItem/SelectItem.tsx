import { Box, MenuItem, Select, Typography } from "@mui/material";

type Props = {
  name: string;
  value: string;
};

const SelectItem = ({ name, value }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: 5,
        bgcolor: "background.paper",
        p: 1,
      }}
    >
      <Typography variant="body1" sx={{ color: "#cdcfd2", pl: 1 }}>
        {name}
      </Typography>
      <Select
        variant="standard"
        disableUnderline
        value={value}
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          pl: 1,
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={value}>{value}</MenuItem>
        <MenuItem value={21}>Twenty one</MenuItem>
        <MenuItem value={22}>Twenty one and a half</MenuItem>
      </Select>
    </Box>
  );
};

export default SelectItem;
