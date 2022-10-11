import { Flags } from "./Flags";

export default {
  title: "Components/ProductLabels/Flags",
  parameters: {
    layout: "centered",
    zeplinLink:
      "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/63053ee9c9b39414a05fab9b",
  },
};

const FlagsTemplate = (args) => Flags(args);

export const Single = FlagsTemplate.bind({});
Single.args = {
  single: true,
  title1: "Recommended",
  title2: "",
};

export const Double = FlagsTemplate.bind({});
Double.args = {
  single: false,
  title1: "New",
  title2: "Recommended",
};
