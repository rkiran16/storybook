import { html } from 'lit-html';
import { Button } from  './Button';

export default {
  title: 'Components/Buttons/Button',
  parameters: {
    layout: 'centered',
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6297bdfb36de85127d3e27cc",
  },
  argTypes: {
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
    hasIcon: {
      name: "Leading Icon",
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
      name: "Size",
      defaultValue: 'default',
      control: { type: 'radio' },
      description: "Select Size",
      table: {
         type: { summary: 'radio' },
         defaultValue: { summary: 'default' },
      },
      options: ['default', 'skinny']
    },
    variation: {
       name: "Button Variations",
       defaultValue: "primary",
       control: { type: 'radio'},
       table: {
          type: { summary: 'radio' },
          defaultValue: { summary: 'primary' },
       },
       options: ['primary', 'secondary', 'tertiary'],
       mapping: {
          primary: 'btn-primary',
          secondary: 'btn-outline-secondary',
          tertiary: 'btn-tertiary'
       }
    }
  },
};

const Template = (args) => Button(args);


export const PrimaryButton = Template.bind({});
PrimaryButton.args = {}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
   label: "Secondary Button",
   variation: "secondary"
}

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
   label: "Tertiary Button",
   variation: "tertiary"
}

const TertiaryButtonTemplate = args => {
   return html`
      <div class="d-flex w-100">
        <div class="me-3">${Button({label: "Upload button", iconName: 'file_upload', variation: "btn-tertiary", hasIcon: true})}</div>
        <div class="me-3">${Button({label: "Download button", iconName: 'file_download', variation: "btn-tertiary", hasIcon: true})}</div>
        <div class="me-3">${Button({label: "Show more", iconName: 'expand_more', variation: "btn-tertiary", hasIcon: true})}</div>
        <div class="me-3">${Button({label: "Show less", iconName: 'expand_less',  variation: "btn-tertiary", hasIcon: true})}</div>
      </div>
   `
}

export const TertiaryButtonVariations = TertiaryButtonTemplate.bind({});
TertiaryButtonVariations.args = {};