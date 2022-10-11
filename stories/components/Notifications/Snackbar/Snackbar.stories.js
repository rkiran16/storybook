import { Snackbar } from "./Snackbar";
import { html } from "lit-html";
import docs from "./Snackbar.mdx";

export default {
  title: "Components/Notifications/Snackbar",
  parameters: {
    zeplinLink:
      "  https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d1c10223a41149c68958",
    docs: {
      page: docs,
    },
  },
  argTypes: {
    color: {
      name: "Color",
      control: { type: "select" },
      defaultValue: "success",
      options: ["success", "danger", "warning", "info"],
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

const Template = (args) => html`${Snackbar(args)}`;

export const Default = Template.bind({});
Default.args = {
  title: "Success!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "success",
  icon: "success",
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: "Success!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "success",
  icon: "success",
  href: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d1c10223a41149c68958",
  linkTitle: "Link Action",
};
export const Error = Template.bind({});
Error.args = {
  title: "Error!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "danger",
};
export const Warning = Template.bind({});
Warning.args = {
  title: "Warning!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "warning",
  icon: "warning",
};
export const Info = Template.bind({});
Info.args = {
  title: "Info!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "info",
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: "Info!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "info",
  button: true,
};

export const WithButtonAndAction = Template.bind({});
WithButtonAndAction.args = {
  title: "Info!",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  color: "info",
  button: true,
  href: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6303d1c10223a41149c68958",
  linkTitle: "Link Action",
};
