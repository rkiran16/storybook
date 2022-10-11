import { ContractIndicator } from "./ContractIndicator";
import { html } from 'lit-html';


export default {
  title: "Components/ContractIndicator",
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6305428474d6e412c3a078a3",
  },
  argTypes: {
     variation: {
        name: "Color Variations",
        control: { type: 'select'},
        description: "Assign Color Variations",
        defaultValue: "info",
        options: ['dark', 'primary', 'info', 'secondary', 'success', 'danger', 'warning'],
        table: {
          type: { summary: 'select' },
          defaultValue: { summary: "info" },
        },
     }
  }
}

const Template = args => ContractIndicator(args);
const TemplateWTitle = args => {
   return html `
    <div>
      ${ContractIndicator(args)}
      <h1 class="ms-n1 mt-2">Heading 1</h1>
    </div>
   `
}

export const Standard = Template.bind({});
Standard.args = {
   label: "CONTRACT 33590890"
}

export const EyeBrow = Template.bind({});

EyeBrow.args = {
  label: 'NEW!',
  hasIcon: false
}

export const EyeBrow_W_Title = TemplateWTitle.bind({});
EyeBrow_W_Title.args = {
   label: 'NEW!',
   hasIcon: false
}