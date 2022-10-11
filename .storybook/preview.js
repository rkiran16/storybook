
import "../src/styles/global.scss";
import cardinalTheme from "./cardinalTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: cardinalTheme,
  },
  stylesheetToggle: {
    stylesheets: [
      {
        id: 'global',
        title: 'Global Stylesheet (default)',
        url: 'theme1.css',
      },
    ],
  },
}