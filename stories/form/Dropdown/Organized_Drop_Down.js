
import { html} from "lit-html";
import Choices from "choices.js";


window.addEventListener('DOMContentLoaded', (event) => {
  new Choices('#organizedDropDown', { searchEnabled: false});
});

export const OrganizedDropdown = ({error}) => {
  return html`
    <div class=${`ch-drop-down ${error ? 'ch-drop-down--error' : ''}`}>
        <label for="organizedDropDown">Label</label>
        <select name="organizedDropDown" id="organizedDropDown"  aria-label="organized DropDown">
          <option value="">Placeholder Text</option>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
        <span class="error-text">
          <span class="material-icons md-16 me-2">error_outline</span>
          Error message here
        </span>
    </div>
  `;
}