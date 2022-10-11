import { RadioButton } from './RadioButton';

export default {
   title: "Forms/RadioButton",
   parameters: {
      zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62a517bcf3187f14ebf6e27c",
   },
   argTypes : {
      isDisabled: {
         name: "isDisabled",
         type: { name: 'boolean', required: false},
         description: "Use when the user cannot proceed or until an input is collected",
         defaultValue: false,
         table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
         },
         control: { type: 'boolean'}
      },
      checked: {
         name: "checked",
         type: { name: 'boolean', required: false},
         description: "Use when the user cannot proceed or until an input is collected",
         defaultValue: false,
         table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
         },
         control: { type: 'boolean'}
      },
      label: {
         name: 'label',
         type: { name: 'string', required: true },
         description: "Radio button label",
         defaultValue: "Check this custom radio",
         control: { type: 'text'}
      }
   }
}

const RadioButtonTemplate = (args) => RadioButton(args);

export const Standard = RadioButtonTemplate.bind({});

export const Disabled = RadioButtonTemplate.bind({});
Disabled.args = {
   isDisabled: true
}

export const DisabledSelected = RadioButtonTemplate.bind({});
DisabledSelected.args = {
   isDisabled: true,
   checked: true
}

export const Group = RadioButtonTemplate.bind({});
Group.args = {
   isDisabled: false,
   checked: false,
   isGroup: true
}