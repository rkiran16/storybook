import { html } from "lit-html";
import { TextInput } from "../../form/TextInput/TextInput";

export const Slider = ({range, disabled}) => {
    return html`
        <div class="slider ${disabled ? "disabled" : ""}">
            <label for="rangeSlider" class="form-label">Slider label</label>
            <div class="d-flex align-items-center">
                <p class="left-label">0</p>
                <input type="range" class="form-range" id="rangeSlider">
                <p>100</p>
                ${range ? html`<div class="textInput">${TextInput({label: "Min", placeholderText: "0", disabled: disabled})}</div>
                <div class="textInput">${TextInput({label: "Max", placeholderText: "100", disabled: disabled})}</div>
                ` : html`<div class="textInput">${TextInput({label: "Qty", placeholderText: "0", disabled: disabled})}</div>
                `}
            </div>
        </div>
    `;
}
