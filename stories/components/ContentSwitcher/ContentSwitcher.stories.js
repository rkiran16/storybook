import { ContentSwitcher, SwitcherWithIcon } from "./ContentSwitcher";

export default {
  title: "Components/Buttons/ContentSwitcher",
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62a51dc67f8c4b10d72f66df",
 },
  argTypes: {
    label: {
      name: "label",
      type: { name: "object", required: true },
      defaultValue: {
        left: "Left Section",
        middle: "Middle Section",
        right: "Right Section",
      },
      description: "Use to label the left, middle, and right sections",
      control: "object",
    },
    disabled: {
      type: { name: "boolean", required: false },
      description:
        "Use when the user cannot proceed or until an input is collected",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => ContentSwitcher(args);
const SwitcherWithIconTemplate = (args) => SwitcherWithIcon(args);

export const Standard = Template.bind({});

export const WithIcon = SwitcherWithIconTemplate.bind({});
WithIcon.args = {
  label: {
    left: "Less detail",
    right: "More detail",
  },
};
