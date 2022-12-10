import { createTheme, Theme } from "@mui/material/styles";
import "@mui/styles";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
  interface DefaultTheme extends Theme {}
}
// A custom theme for this app
export const MyTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#651fff",
    },
  },
});
