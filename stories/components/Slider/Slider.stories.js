import { Slider } from "./Slider";

export default {
    title: "Components/Slider",
    parameters: {
        zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62aa18a0aa9226306da938b5"
    },
    argTypes: {
        range: {
            name: "Range Slider", 
            type: { name: 'boolean', required: false},
            description: "Show Range Slider",
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
            description: "Disable Slider",
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

const Template = (args) => Slider(args);

export const ValueSlider = Template.bind({});
ValueSlider.args = {
    range: false
}

export const RangeSlider = Template.bind({});
RangeSlider.args = {
    range: true
}
