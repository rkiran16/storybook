import { Tabs } from "./Tabs";
import docs from "./Tabs.mdx";

export default {
   title: "Components/Tabs",
   parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62b4a1b7f3c68b1ed9a3e4ab",
    docs: {
      page: docs
    }
   },
   argTypes: {
    tabCount: {
      name: "Number of tabs",
      control: {type: "select"},
      defaultValue: 4,
      options:[1,2,3,4,7,10]
    },
    disabled: {
      name: "Disable tabs",
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
      name: "Show icon",
      type: { name: 'boolean', required: false},
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean'
      }
    },
    alignment: {
      name: "Tab alignment",
      control: { type: 'select'},
      description: "Change the horizontal alignment of your nav with flexbox utilities.By default, navs are left-aligned, but you can easily change them to center or right aligned.",
      defaultValue: "left",
      options: ['left', 'center', 'right'],
      mapping: {
        left: 'left-align',
        center: 'center-align',
        right: 'right-align'
      },
    },
    whiteActiveTab: {
      name: "White background for active tab",
      control: { type: 'boolean', required: false},
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

const Template = args => Tabs(args);

export const Standard = Template.bind({});
Standard.args = {
  disabled: false
}

export const Disabled = Template.bind({})
Disabled.args = {
   disabled:true
}