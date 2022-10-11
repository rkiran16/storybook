import { StepperButton } from './StepperButton';

export default {
  title: 'Components/Buttons/StepperButton',
  argTypes: {
    iconName: {
      name: "Stepper Increment/Decrement",
      control: { type: 'select'},
      description: "Select Icon Name",
      defaultValue: "add",
      options: ['add', 'remove'],
    },
    disabled: {
      type: { name: 'boolean', required: false},
      description: "Use when the user cannot proceed or until an input is collected",
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
    }
  },
};

const Template = (args) => StepperButton(args);


export const Standard = Template.bind({});
Standard.parameters = {
  layout: 'centered',
};

Standard.args = {
   disabled: false
}
