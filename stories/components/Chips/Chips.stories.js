import { Chip, FilterChip } from "./Chips";
import { html } from 'lit-html';

export default {
   title: "Components/Chips",
   parameters: {
      layout: 'centered',
      zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/62e09078d2dcad13d00cf021",
    },
   argTypes: {
      checked: {
         name: "Selected",
         type: { name: 'boolean', required: false},
         description: "Chip selected state",
         defaultValue: false,
         table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
         },
         control: {type: 'boolean'}
      },
      showLeftIcon: {
         name: "Leading Icon",
         type: { name: 'boolean', required: false},
         description: "Show Leading Icon",
         defaultValue: false,
         table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
         },
         control: {type: 'boolean'}
      },
      showRightIcon: {
         name: "Trailing Icon",
         type: { name: 'boolean', required: false},
         description: "Show Trailing Icon",
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
      inputType: {
         name: "Input Type",
         defaultValue: 'checkbox',
         control: { type: 'radio' },
         description: "Select Input Type",
         table: {
            type: { summary: 'radio' },
            defaultValue: { summary: 'checkbox' },
         },
         options: ['checkbox', 'radio'],
      },
      icon: {
         name: "Icon",
         control: { type: 'select'},
         description: "Select Icon",
         defaultValue: "done",
         options: ['default','sort', 'place', 'bike'], 
         table: {
            type: { summary: 'select' },
            defaultValue: { summary: 'done' },
         },
         mapping: {
            default: 'done',
            sort: 'filter_alt',
            place: 'place',
            bike: 'directions_bike'
         },
      }
   }
}

const StandardTemplate = args => Chip(args);
// Standard Chip
export const Standard = StandardTemplate.bind({});
// Selected Chip
export const SelectedChip = StandardTemplate.bind({});
SelectedChip.args = {
    checked: true
}
// Sort & Filter Chip
export const SortAndFilterChip = StandardTemplate.bind({});
SortAndFilterChip.args = {
    showLeftIcon: true,
    icon: "filter_alt",
    label: "Sort & Filter"
}

// Filter Chip
const FilterChipTemplate = args => FilterChip(args);
export const FilterChips = FilterChipTemplate.bind({});
FilterChips.args = {}


//Chips Row
const ChipsRowTemplate = () => {
   return html`
      <div class="d-flex">
        <div class="me-2">${Chip({label: "Choice Chip 1", icon: 'alarm', showLeftIcon: true})}</div>
        <div class="me-2">${Chip({label: "Choice Chip 2", icon: 'place', showLeftIcon: true})}</div>
        <div class="me-2">${Chip({label: "Choice Chip 3", icon: 'search', showLeftIcon: true})}</div>
        <div class="me-2">${Chip({label: "Choice Chip 4", icon: 'directions_bike', showLeftIcon: true})}</div>
      </div>
    `
}

export const ChipsRow = ChipsRowTemplate.bind({});
ChipsRow.args = {}