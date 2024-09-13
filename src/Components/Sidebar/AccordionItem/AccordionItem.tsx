import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type Props = {
  name: string;
};

function AccordionItem({ name }: Props) {
  return (
    <Accordion
      sx={{
        width: 250,
        marginBottom: 0.5,
        borderRadius: 2,
        bgcolor: "primary.light",
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon sx={{ color: "secondary.light" }} />}
      >
        <Typography color="text.secondary">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;
