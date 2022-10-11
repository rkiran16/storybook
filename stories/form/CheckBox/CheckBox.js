import { html } from "lit-html";

export const CheckBox = ({checked, isDisabled, isGroup, showLabel = true}) => {
    const itemTemplates = [];
    const items = [1, 2, 3, 4, 5];
    for (const i of items) {
        itemTemplates.push(html`
            <div class="form-check">
                <input type="checkbox" class="form-check-input" ?checked=${checked}  ?disabled=${isDisabled} id="customCheck${i}" />
                <label class=${`form-check-label ${showLabel ? '' : 'visually-hidden'}`} for="customCheck111-33">Check this custom checkbox</label>
            </div>`);
    }
    if (!isGroup) {
        return html`
            <div class="form-check">
                <input type="checkbox" class="form-check-input" ?checked=${checked}  ?disabled=${isDisabled} id="customCheck111-33" />
                <label class=${`form-check-label ${showLabel ? '' : 'visually-hidden'}`} for="customCheck111-33">Check this custom checkbox</label>
            </div>
        `;
    } else {
        return html`
        <fieldset>
            <legend>Group Label</legend>
            ${itemTemplates}
        </fieldset>
        `;
    }
    
}