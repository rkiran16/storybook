import { html} from "lit-html";


export const Toggle = ({disabled = false, checked = false, variation, label = ""}) => {
   return html`
    <div class=${`form-check form-switch ${variation}`}>
        <input class="form-check-input" ?disabled=${disabled} ?checked=${checked} type="checkbox" id="flexSwitchCheckDefault" aria-label="Toggle Switch" aria-hidden="true">
        ${label !== "" ? html`<label class="form-check-label" for="flexSwitchCheckDefault">${label}</label>` : ""} 
    </div>
   `;
}