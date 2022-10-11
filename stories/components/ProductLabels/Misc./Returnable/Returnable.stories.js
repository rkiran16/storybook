import { Returnable } from "./Returnable";

export default {
  title: "Components/ProductLabels/Misc/Returnable",
  parameters: {
    layout: "centered",
    zeplinLink:
      "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/63053ee9c9b39414a05fab9b",
  },
};

const ReturnableTemplate = (args) => Returnable(args);

export const Standard = ReturnableTemplate.bind({});
Standard.args = {
  isReturnable: true,
};
