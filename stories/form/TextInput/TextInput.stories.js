import { TextInput } from "./TextInput";

export default {
  title: 'Forms/TextInput',
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62a9fb01c9b9111d8a460042",
  },
  argTypes: {
    label: {
      type: {name: 'string', required: false},
      description: "Label for text input",
      defaultValue: 'Label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "Label" },
      },
    },
    icon: {
      control: { type: 'radio' },
      description: "Select which icon appears, if any",
      table: {
        type: { summary: ['open', 'close', 'openClose', 'loading', 'search', 'tooltip', 'none'] },
        defaultValue: { summary: '' },
      },
      options: ['open', 'close', 'openClose', 'loading', 'search', 'tooltip', 'none'],
    },
      isInvalid: {
        type: { name: 'boolean', required: false},
        description: "Set Error State",
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
      size: {
        control: { type: 'radio' },
        description: "Define the size of a button",
        table: {
          type: { summary: ["sm" , "lg"] },
          defaultValue: { summary: 'default' },
        },
        options: ['sm', 'lg', 'default'],
      },
      showHelper: {
        type: { name: 'boolean', required: false},
        description: "Show helper Text",
        defaultValue: false,
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: false },
        },
        control: {
          type: 'boolean'
        }
      },
      placeholderText: {
        type: { name: 'string', required: false}, 
        description: "Label for placeholder",
        defaultValue: 'Placeholder Text',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: "Placeholder Text" },
        }
      }
  }
};

const TextInputTemplate = args => TextInput(args);

export const Standard = TextInputTemplate.bind({});
Standard.parameters = {
  layout: 'centered',
};

export const ErrorState = TextInputTemplate.bind({});
ErrorState.args = {
  isInvalid: true
}

export const Disabled = TextInputTemplate.bind({});
Disabled.args = {
   disabled: true
}

export const HelperState = TextInputTemplate.bind({});
HelperState.args = {
  showHelper: true
}