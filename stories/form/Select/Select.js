import { html } from "lit-html";

export const Select = () => {
    return html`
    <form class="d-flex align-items-center">
        <label class="my-1 me-2" for="inlineFormCustomSelectPref">Select label</label>
        <select class="form-select w-25"  id="inlineFormCustomSelectPref">
        <option value="1">10MG</option>
        <option value="2">20MG</option>
        <option value="3">30MG</option>
        </select>
    </form>
    `;
}