import { Accordion, MultipleAccordion } from "./Accordion";

export default {
   title: "Components/Accordion",
   parameters: {
      layout: 'centered',
      zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62902abd06999bae8aaf71a0",
   },
   argTypes: {
      isOpen: {
         type: { name: 'boolean', required: false},
         description: "Whether or not the accordion is open",
         table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
         },
         control: {
            type: 'boolean'
         }
      },
      label: {
         name: 'label',
         type: { name: 'string', required: false },
         defaultValue: 'Accordion label',
         description: 'The label of the collapse',
         control: {
           type: 'text'
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
      }
   }
}



const Template = (args) => Accordion(args);
const MultipleAccordionTemplate = (args) => MultipleAccordion(args);

export const Standard = Template.bind({});
Standard.args = {
   accordionId: "AccordionOne",
   collapseContainerId: "AccordionExample"
}

export const AlwaysOpen = Template.bind({});
AlwaysOpen.args = {
   isOpen: true,
   accordionId: "accordionOpen",
   collapseContainerId: "AccordionTwo"
}

export const Small = Template.bind({});
Small.args = {
   accordionId: "accordionSmall",
   collapseContainerId: "AccordionThree",
   accordionSmall: true
}

export const No_Border = Template.bind({});
No_Border.args = {
   accordionId: "accordionNoBorder",
   collapseContainerId: "AccordionNoBorderContainer",
   accordionSmall: true,
   accordionNoBorder: true
}

export const MultipleAccordionItems = MultipleAccordionTemplate.bind({});
MultipleAccordionItems.args = {
   accordionSmall: false
}
