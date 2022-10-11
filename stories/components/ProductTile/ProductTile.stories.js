import { ProductTile } from "./ProductTile";

export default {
  title: "Components/Tiles/ProductTile",
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/630f8cadffbe82631468c9c3",
  },
  argTypes: {
    hideViewMore: {
      name: "Hide View Alternatives",
      type: { name: 'boolean', required: false},
      description: "Hide View More section",
      defaultValue: false,
      table: {
         type: { summary: 'boolean' },
         defaultValue: { summary: false },
      },
      control: { type: 'boolean'}
    },
    hideCheckBox: {
      name: "Hide Checkbox",
      type: { name: 'boolean', required: false},
      description: "Hide CheckBox",
      defaultValue: false,
      table: {
         type: { summary: 'boolean' },
         defaultValue: { summary: false },
      },
      control: { type: 'boolean'}
    },
  }
}

const Template = (args) => ProductTile(args);

export const Standard = Template.bind({});