import { Dropdown , DisabledDropdown } from './Dropdown';
import { html} from "lit-html";
import { OrganizedDropdown } from "./Organized_Drop_Down";
import docs from "./Dropdown.mdx";

export default {
  title: "Forms/Dropdown",
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62aa24120581cc1a89ee0590",
    docs: {
      page: docs
    }
  },
  argTypes: {
    error: {
      name: "Error state",
      type: { name: 'boolean', required: false},
      description: "Use when the dropdown has an error",
      defaultValue: false,
      table: {
         type: { summary: 'boolean' },
         defaultValue: { summary: false },
      },
      control: { type: 'boolean'}
    }
  }
}

const DropdownTemplate = (args) => html`${Dropdown(args)}`;
const DisabledDropdownTemplate = args => html`${DisabledDropdown(args)}`;

const OrganizedTemplate = (args) => html`${OrganizedDropdown(args)}`;

export const Standard = DropdownTemplate.bind({});
Standard.args = {error: false};

export const Disabled = DisabledDropdownTemplate.bind({});
Disabled.args = {error: false};

export const Organized_Dropdown = OrganizedTemplate.bind({});
Organized_Dropdown.args = {error:false}
