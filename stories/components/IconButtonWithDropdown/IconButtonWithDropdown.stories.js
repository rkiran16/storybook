import { IconButtonWithDropdown, IconButtonWithOrganizedDropdown } from './IconButtonWithDropdown';

export default {
  title: 'Components/Buttons/IconButtonWithDropdown',
  parameters: {
    layout: 'centered',
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62f6596c524c4769bad620ac",
  },
  argTypes: {
    iconName: {
      name: "Icon",
      control: { type: 'select'},
      description: "Select Icon Name",
      defaultValue: "overflow",
      options: ['overflow', 'print', 'export'],
      mapping: {
        overflow: 'more_vert',
        print: 'print',
        export: 'logout'
      }
   },
   buttonText: {
      name: 'Button text',
      type: { name: 'string', required: false },
      defaultValue: 'Actions',
      description: 'Button Text',
      control: {
        type: 'text'
      }
   },
   textDirection: {
       name: "Text direction",
       control: { type: 'select'},
       description: "Alignment of text in relation to the icon",
       defaultValue: "vertical",
       options: ['vertical', 'horizontal'],
       table: {
        type: { summary: ['vertical', 'horizontal'] },
        defaultValue: { summary: 'vertical' },
      } 
    },
    inverse: {
      name: "Invert Colors",
      type: { name: 'boolean', required: false},
      description: "Invert colors",
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      name: "Disabled",
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

const Template = (args) => IconButtonWithDropdown(args);

export const Standard = Template.bind({});
Standard.parameters = {
  layout: 'centered',
};
Standard.args = {
  iconName: 'more_vert',
  buttonText: 'Actions',
  textDirection: 'vertical',
  disabled: false,
  inverse: false,
};

const OrganizedTemplate = (args) => IconButtonWithOrganizedDropdown(args);

export const Organized = OrganizedTemplate.bind({});
Organized.parameters = {
  layout: 'centered',
};
Organized.args = {
  iconName: 'more_vert',
  buttonText: 'Actions',
  textDirection: 'vertical',
  disabled: false,
  inverse: false,
};