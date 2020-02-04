import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider
} from "@material-ui/core";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import { Welcome } from "@storybook/react/demo";
import * as React from "react";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

const theme = createMuiTheme();

export const withTheme = (component: any) => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {component}
    </MuiThemeProvider>
  );
};
