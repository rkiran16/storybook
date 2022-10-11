import { Dropship } from "./Dropship";

export default {
  title: "Components/ProductLabels/Misc/Dropship",
  parameters: {
    layout: "centered",
    zeplinLink:
      "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/63053ee9c9b39414a05fab9b",
  },
};

const DropshipTemplate = (args) => Dropship(args);

export const Standard = DropshipTemplate.bind({});
Standard.args = {
  isDropship: true,
};
