import { Tile } from "./Tile";

export default {
    title: "Components/Tiles/Tile",
    argTypes: {
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

const Template = (args) => Tile(args);

export const Tile_Skeleton = Template.bind({});