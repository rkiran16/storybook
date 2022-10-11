import { GlobalNotification } from "./Global";
import docs from "./Global.mdx";
import { html } from "lit-html";

export default {
  title: "Components/Notifications/Global",
  parameters: {
    zeplinLink:
      "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d1e19f494b0fe0a52218",
      docs: {
        page: docs,
      },
  },
  argTypes: {
    color: {
      name: "Color",
      control: { type: "select" },
      defaultValue: "black",
      options: ["black", "warning", "success", "info", "error"],
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

const Template = (args) => html`${GlobalNotification(args)}`;

export const Default = Template.bind({});
Default.args = {
  title: "Error!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "black",
};
export const DefaultWithAction = Template.bind({});
DefaultWithAction.args = {
  title: "Lorem Ipsum!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "black",
  href: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d1e19f494b0fe0a52218",
  linkTitle: "Link Action",
};
export const Error = Template.bind({});
Error.args = {
  title: "Error!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "danger",
};
export const Warning = Template.bind({});
Warning.args = {
  title: "Warning!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "warning",
  icon: "warning",
};
export const Success = Template.bind({});
Success.args = {
  title: "Success!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "success",
  icon: "success",
};
export const Information = Template.bind({});
Information.args = {
  title: "Info!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "info",
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: "Error!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  href: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d1e19f494b0fe0a52218",
  linkTitle: "Link Action",
  color: "danger",
};
