import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type Props = {
  icon: JSX.Element;
  name: string;
};

function AccordionItem({ icon, name }: Props) {
  return (
    <Accordion
      sx={{
        width: "100%",
        marginBottom: 0.5,
        borderRadius: 2,
        bgcolor: "primary.light",
      }}
    >
      <AccordionSummary
        sx={{ p: 1 }}
        expandIcon={<ArrowDropDownIcon sx={{ color: "secondary.light" }} />}
      >
        {icon}
        <Typography variant="body1" color="text.secondary">
          {name}
        </Typography>
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
