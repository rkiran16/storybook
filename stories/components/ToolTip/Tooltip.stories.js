import { ToolTip } from "./Tooltip";

export default {
  title: 'Components/ToolTip',
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/630d28ac8bfb866494ca7a35",
  },
  argTypes: {
    showText: {
      type: { name: 'boolean', required: false},
      description: "Show Text",
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
    }
  }
}

const Template = args => ToolTip(args);

export const Icon_Only = Template.bind({});

export const With_Text = Template.bind({});
With_Text.args = {
  showText: true
}
