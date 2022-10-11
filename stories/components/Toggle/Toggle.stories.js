import { Toggle } from "./Toggle";

export default {
  title: "Components/Toggle",
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62e2e6811adf0a64d7db8a1c",
  },
  argTypes: {
    disabled: {
      name: "Disabled State",
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
    },
    checked: {
      name: "On State",
      type: { name: 'boolean', required: false},
      description: "when switch is turned on or auto switch",
      defaultValue: false,
      table: {
         type: { summary: 'boolean' },
         defaultValue: { summary: false },
      },
      control: { type: 'boolean'}
    },
    variation: {
      name: "Toggle Variations",
      defaultValue: "default",
      description: "Toggle Size Variations",
      control: { type: 'radio'},
      table: {
         type: { summary: 'radio' },
         defaultValue: { summary: 'default' },
      },
      options: ['default', 'large'],
      mapping: {
         default: 'toggle',
         large: 'toggle toggle--large',
      }
   }
  }
}


const Template = args => Toggle(args);

export const Standard = Template.bind({});
Standard.args = {}

export const WithLabel = Template.bind({});
WithLabel.args = {
   label: "Toggle Switch"
}

export const Selected = Template.bind({});
Selected.args = {
   checked: true
}

export const Large = Template.bind({});
Large.args = {
   variation: "toggle toggle--large"
}