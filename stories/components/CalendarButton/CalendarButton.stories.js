import { CalendarButton } from "./CalendarButton";

export default {
   title: 'Components/Buttons/CalendarButton',
   argTypes: {
      checked: {
         name: "Selected",
         type: { name: 'boolean', required: false},
         description: "Selected state of Calendar button",
         defaultValue: false,
         table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
         },
         control: {type: 'boolean'}
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
      },
      isCurrentDay: {
         name: "Current Day",
         type: { name: 'boolean', required: false},
         defaultValue: false,
         description: "current day state",
         control: {
            type: 'boolean'
         }
      }
   }
}

const Template = (args) => CalendarButton(args);

export const Standard = Template.bind({});
