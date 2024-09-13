import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700, // Жирный текст для заголовков
      fontSize: "2.5rem", // Размер для заголовка h1
    },
    h2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
      fontSize: "2rem",
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      fontSize: "1rem", // Обычный текст
    },
    button: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
      textTransform: "none", // Отключить капс в кнопках
    },
  },
  palette: {
    common: {
      white: "#ffffff", // Белый
    },
    primary: {
      light: "#283047", // Серый текст и фон
      main: "#1976d2", // Основной синий цвет
      dark: "#171d2c", // Темно-сапфировый фон сайдбара
    },
    secondary: {
      light: "#647091", // Голубино-серый на темно-сапфировом и сером фоне
      main: "#f57c00", // Акцентный оранжевый
    },
    background: {
      default: "#f4f6f8", // Фон страницы голубоватый
      paper: "#fafbfb", // Фон белоснежный в таблице
    },
    text: {
      primary: "#333333", // Основной текст
      secondary: "#ffffff", // Текст на темном фоне
    },
  },
});
