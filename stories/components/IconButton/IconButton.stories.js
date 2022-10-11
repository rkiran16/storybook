import { IconButton } from './IconButton';

export default {
  title: 'Components/Buttons/IconButton',
  parameters: {
    layout: 'centered',
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62f6596c524c4769bad620ac",
  },
  argTypes: {
    iconName: {
      name: "Icon",
      control: { type: 'select'},
      description: "Select Icon Name",
      defaultValue: "close",
      options: ['close', 'delete', 'edit', 'add', 'print', 'logout', 'settings', 'replay'],
   },
   buttonText: {
      name: 'Button text',
      type: { name: 'string', required: false },
      defaultValue: '',
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

const Template = (args) => IconButton(args);


export const Standard = Template.bind({});
Standard.parameters = {
  layout: 'centered',
};
Standard.args = {
  iconName: 'close',
  disabled: false,
  inverse: false,
  buttonText: '',
  textDirection: 'vertical'
};

export const Inverse = Template.bind({});
Inverse.parameters = {
  layout: 'centered',
};
Inverse.args = {
  iconName: 'close',
  disabled: false,
  inverse: true,
  buttonText: '',
  textDirection: 'vertical'
};

export const Disabled = Template.bind({});
Disabled.parameters = {
  layout: 'centered',
};
Disabled.args = {
  iconName: 'close',
  disabled: true,
  inverse: false,
  buttonText: '',
  textDirection: 'vertical'
};

export const DisabledInverse = Template.bind({});
DisabledInverse.parameters = {
  layout: 'centered',
};
DisabledInverse.args = {
  iconName: 'close',
  disabled: true,
  inverse: true,
  buttonText: '',
  textDirection: 'vertical'
};

export const StandardWithText = Template.bind({});
StandardWithText.parameters = {
  layout: 'centered',
};
StandardWithText.args = {
  iconName: 'edit',
  disabled: false,
  inverse: false,
  buttonText: 'Edit',
  textDirection: 'vertical'
};

export const InverseWithText = Template.bind({});
InverseWithText.parameters = {
  layout: 'centered',
};
InverseWithText.args = {
  iconName: 'edit',
  disabled: false,
  inverse: true,
  buttonText: 'Edit',
  textDirection: 'vertical'
};

export const DisabledWithText = Template.bind({});
DisabledWithText.parameters = {
  layout: 'centered',
};
DisabledWithText.args = {
  iconName: 'edit',
  disabled: true,
  inverse: false,
  buttonText: 'Edit',
  textDirection: 'vertical'
};

export const DisabledInverseWithText = Template.bind({});
DisabledInverseWithText.parameters = {
  layout: 'centered',
};
DisabledInverseWithText.args = {
  iconName: 'edit',
  disabled: true,
  inverse: true,
  buttonText: 'Edit',
  textDirection: 'vertical'
};

export const StandardWithHorizontalText = Template.bind({});
StandardWithHorizontalText.parameters = {
  layout: 'centered',
};
StandardWithHorizontalText.args = {
  iconName: 'edit',
  disabled: false,
  inverse: false,
  buttonText: 'Edit',
  textDirection: 'horizontal'
};

export const InverseWithHorizontalText = Template.bind({});
InverseWithHorizontalText.parameters = {
  layout: 'centered',
};
InverseWithHorizontalText.args = {
  iconName: 'edit',
  disabled: false,
  inverse: true,
  buttonText: 'Edit',
  textDirection: 'horizontal'
};

export const DisabledWithHorizontalText = Template.bind({});
DisabledWithHorizontalText.parameters = {
  layout: 'centered',
};
DisabledWithHorizontalText.args = {
  iconName: 'edit',
  disabled: true,
  inverse: false,
  buttonText: 'Edit',
  textDirection: 'horizontal'
};

export const DisabledInverseWithHorizontalText = Template.bind({});
DisabledInverseWithHorizontalText.parameters = {
  layout: 'centered',
};
DisabledInverseWithHorizontalText.args = {
  iconName: 'edit',
  disabled: true,
  inverse: true,
  buttonText: 'Edit',
  textDirection: 'horizontal'
};