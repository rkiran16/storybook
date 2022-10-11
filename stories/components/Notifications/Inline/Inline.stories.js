import { InlineNotification } from "./Inline";
import docs from "./Inline.mdx";
import { html } from "lit-html";

export default {
  title: "Components/Notifications/Inline",
  parameters: {
    zeplinLink:
      "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d21f83d705123f9ece5b",
    docs: {
      page: docs,
    },
  },
  argTypes: {
    color: {
      name: "Color",
      control: { type: "select" },
      defaultValue: "danger",
      options: ["success", "info", "warning", "danger"],
    },
    icon: {
      name: "Icon",
      control: { type: "select" },
      defaultValue: "default",
      options: ["none", "default", "warning", "success"],
      mapping: {
        none: false,
        default: "same",
        warning: "warning",
        success: "success",
      },
    },
  },
};

const Template = (args) => html`${InlineNotification(args)}`;

export const Default = Template.bind({});
Default.args = {
  title: "Error!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};
export const Warning = Template.bind({});
Warning.args = {
  title: "Warning!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "warning",
};

export const Success = Template.bind({});
Success.args = {
  title: "Success!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "success",
};
export const Info = Template.bind({});
Info.args = {
  title: "Info!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "info",
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: "Error!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  href: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d21f83d705123f9ece5b",
  linkTitle: "Link Action",
};

export const WithNoDismissal = Template.bind({});
WithNoDismissal.args = {
  title: "Error!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  dismiss: false,
};

export const TwoActions = Template.bind({});
TwoActions.args = {
  title: "Error!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  href: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d21f83d705123f9ece5b",
  linkTitle: "Link Action",
  href2:
    "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d21f83d705123f9ece5b",
  linkTitle2: "Link Action",
};
