import { TextArea } from "./TextArea";

export default {
   title: "Forms/TextArea"
}

const TextAreaTemplate = args => TextArea(args);

export const Default = TextAreaTemplate.bind({})
Default.parameters = {
  layout: 'centered',
};