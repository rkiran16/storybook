import { html } from 'lit-html';
import { CheckBox } from './CheckBox';
import script from './script';

export default {
   title: "Forms/CheckBox",
   parameters: {
      zeplinLink: 'https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62a8d982f6be772c3587fe99'
   },
   argTypes: {
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
      indeterminate: {
         control: false
      }
   },
   decorators: [(story, context) => {
      return (
         html`${CheckBox(context.args)}
         <script>${script(context.args)}</script>
         `
      );
   }]
}

const CheckBoxTemplate = (args) => CheckBox(args);

export const Standard = CheckBoxTemplate.bind({});

export const Disabled = CheckBoxTemplate.bind({});
Disabled.args = {
   isDisabled: true
}

export const DisabledSelected = CheckBoxTemplate.bind({});
DisabledSelected.args = {
   isDisabled: true,
   checked: true
}

export const Indeterminate = CheckBoxTemplate.bind({});
Indeterminate.args = {
   indeterminate: true
}

export const Group = CheckBoxTemplate.bind({});
Group.args = {
   isGroup: true
}