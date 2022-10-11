import { InputSpinner } from "./InputSpinner";

export default {
  title: 'Forms/InputSpinner',
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62a9fb01c9b9111d8a460042",
  },
  argTypes: {
    disabled: {
      name: "disabled",
      type: { name: 'boolean', required: false},
      description: "Use when the user cannot proceed or until an input is collected",
      defaultValue: false,
      table: {
         type: { summary: 'boolean' },
         defaultValue: { summary: false },
      },
      control: { type: 'boolean'}
    },
  }
};

const InputSpinnerTemplate = args => InputSpinner(args);

export const Default = InputSpinnerTemplate.bind({});