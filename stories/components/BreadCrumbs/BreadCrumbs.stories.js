import { BreadCrumbs } from "./BreadCrumbs";

export default {
   title: "Components/BreadCrumbs",
   parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62ab81201300101c6d1dcba7",
   },
   argTypes: {
     overflow: {
      name: "Show Overflow", 
      type: { name: 'boolean', required: false},
      description: "Show overflow Component",
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
      description: "Disable Breadcrumb",
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
     }
   }
}

const Template = (args) => BreadCrumbs(args);

export const Standard = Template.bind({});

export const OverflowBreadcrumb = Template.bind({});
OverflowBreadcrumb.args = {
   name: "Overflow Breadcrumb",
   overflow: true
}