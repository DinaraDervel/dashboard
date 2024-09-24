import { Box, Typography } from "@mui/material";

type Props = {
  fieldName: string;
  fieldValue: string;
};

function Contact({ fieldName, fieldValue }: Props) {
  return (
    <Box>
      <Typography sx={{ color: "secondary.light", fontSize: "0.8rem" }}>
        {fieldName}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {fieldValue}
      </Typography>
    </Box>
  );
}

export default Contact;
