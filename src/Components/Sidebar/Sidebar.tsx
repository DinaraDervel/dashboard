import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccordionItem from "./AccordionItem/AccordionItem";
import Close from "@mui/icons-material/Close";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: "100%",
          p: 1,
        }}
      >
        <Box
          sx={{
            margin: 2,
            padding: 2,
            borderRadius: 4,
            bgcolor: "primary.dark",
          }}
        >
          <Box
            sx={{
              width: "100%",
              paddingBottom: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 0.5,
            }}
          >
            <Box>
              <Typography
                color="text.secondary"
                sx={{
                  bgcolor: "primary.main",
                  display: "inline",
                }}
              >
                ФИН
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ display: "inline", paddingLeft: 0.5 }}
              >
                Контроль
              </Typography>
            </Box>

            <Button
              variant="contained"
              endIcon={<Close />}
              sx={{
                justifySelf: "flex-end",
                color: "secondary.light",
                borderRadius: 4,
                bgcolor: "primary.light",
              }}
            >
              Меню
            </Button>
          </Box>
          <AccordionItem name="Настройки" />
          <AccordionItem name="Внесение данных" />
          <AccordionItem name="Отчеты" />
          <AccordionItem name="База знаний" />
        </Box>
      </Drawer>
    </div>
  );
}

export default Sidebar;
