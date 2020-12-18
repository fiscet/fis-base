import { createMuiTheme } from "@material-ui/core/styles";
import { huHU } from "@material-ui/core/locale";
import i18n from "i18next";

const lang =
  i18n && i18n?.language ? i18n.language.substr(0, 2).toLowerCase() : "hu";

// const colors = {};

const defaultTheme = createMuiTheme(
  {
    typography: {
      fontFamily: ["Andika New Basic", "Roboto"],
    },
  },
  lang === "hu" ? huHU : null
);

export default defaultTheme;
