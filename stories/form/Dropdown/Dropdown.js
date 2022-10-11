import { html} from "lit-html";
import Choices from "choices.js";

window.addEventListener('DOMContentLoaded', (event) => {
    new Choices('#standardDropDown', { searchEnabled: false});
});


export const Dropdown = ({error= false}) => {
   return html`
    <div class=${`ch-drop-down ${error ? 'ch-drop-down--error' : ''}`}>
        <label for="standardDropDown">Label</label>
        <select name="standardDropDown" id="standardDropDown" aria-label="Standard DropDown">
          <option value="">Placeholder Text</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
          <option>Option 6</option>
        </select>
        <span class="error-text">
           <span class="material-icons md-16 me-2">error_outline</span>
           Error message here
        </span>
    </div>
   `
}

export const DisabledDropdown = ({error= false}) => {
  return html`
   <div class=${`ch-drop-down ${error ? 'ch-drop-down--error' : ''}`}>
       <label for="standardDropDown">Label</label>
       <select name="standardDropDown" id="standardDropDown" disabled aria-label="Standard DropDown">
         <option value="">Placeholder Text</option>
         <option>Option 1</option>
         <option>Option 2</option>
         <option>Option 3</option>
         <option>Option 4</option>
         <option>Option 5</option>
         <option>Option 6</option>
       </select>
       <span class="error-text">
          <span class="material-icons md-16 me-2">error_outline</span>
          Error message here
       </span>
   </div>
  `
}