import { Box, Button, Divider, Link, List, ListItem } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import EditNoteIcon from "@mui/icons-material/EditNote";
import StorageIcon from "@mui/icons-material/Storage";
import ChatIcon from "@mui/icons-material/Chat";
import AccordionItem from "./AccordionItem/AccordionItem";
import Close from "@mui/icons-material/Close";
import Logo from "./Logo/Logo";

function Sidebar() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
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
          <Logo />
          <Button
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
        <AccordionItem
          icon={
            <SettingsIcon sx={{ color: "text.secondary", marginRight: 0.5 }} />
          }
          name="Настройки"
        />
        <AccordionItem
          icon={
            <EditNoteIcon sx={{ color: "text.secondary", marginRight: 0.5 }} />
          }
          name="Внесение данных"
        />
        <AccordionItem
          icon={
            <ArticleIcon sx={{ color: "text.secondary", marginRight: 0.5 }} />
          }
          name="Отчеты"
        />
        <AccordionItem
          icon={
            <StorageIcon sx={{ color: "text.secondary", marginRight: 0.5 }} />
          }
          name="База знаний"
        />
      </Box>
      <Box
        sx={{
          m: 2,
          p: 1,
          borderRadius: 4,
          bgcolor: "primary.dark",
        }}
      >
        <List>
          <ListItem>
            <Link
              variant="body1"
              href="#"
              underline="none"
              color="secondary.light"
            >
              Пользовательское соглашение
            </Link>
          </ListItem>
          <Divider
            variant="middle"
            component="li"
            color="secondary.light"
            sx={{ bgcolor: "secondary.light" }}
          />
          <ListItem>
            <Link
              variant="body1"
              href="#"
              underline="none"
              color="secondary.light"
            >
              Политика конфиденциальности
            </Link>
          </ListItem>
          <Divider
            variant="middle"
            component="li"
            sx={{ bgcolor: "secondary.light" }}
          />
          <ListItem>
            <Link
              variant="body1"
              href="#"
              underline="none"
              color="secondary.light"
            >
              Юридическая информация
            </Link>
          </ListItem>
          <Divider
            variant="middle"
            component="li"
            sx={{ bgcolor: "secondary.light" }}
          />
          <ListItem>
            <Link
              variant="body1"
              href="#"
              underline="none"
              color="secondary.light"
            >
              Публичная оферта
            </Link>
          </ListItem>
        </List>
      </Box>
      <Button
        variant="contained"
        startIcon={<ChatIcon />}
        sx={{
          width: "100%",
          margin: 2,
          padding: 2,
          borderRadius: 4,
        }}
      >
        Связаться с нами
      </Button>
    </Box>
  );
}

export default Sidebar;
