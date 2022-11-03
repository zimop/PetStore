import { createTheme } from "@mui/material/styles";

export const useTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2D9999",
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        contrastText: "#ffcc00",
      },
      footerText: {
        main: "#ffffff",
      },

      avatarColor: {
        deepOrange: "#ff5722",
      },

      homepageInfoCard: {
        text: "#ffffff",
        background: "#104F4F",
      },

      navigationHeader: {
        text: "#ffffff",
      },
    },
  });

  return theme;
};

export default useTheme;
