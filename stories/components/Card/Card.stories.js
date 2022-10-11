import { CardFull } from "./Card";

export default {
   title: "Components/Card",
   parameters: {
      layout: 'centered',
      zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6307938941ea6181917cde3f",
   },
   argTypes: {
      size: {
         name: "Card Size",
         control: { type: 'select'},
          description: "Define the size of the Card",
          defaultValue: 6,
          options: [ 4, 6, 9, 12],
      }
   }
}

const Template = (args) => CardFull(args);

export const Standard = Template.bind({});