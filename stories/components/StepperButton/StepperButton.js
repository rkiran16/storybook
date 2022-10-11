import { html } from "lit-html";

export const StepperButton = ({ disabled = false, iconName }) => {

  return html`
    <button
      type="button"
      ?disabled=${disabled}
      class="btn btn-icon btn-stepper"
    >
      <span class="material-icons">${iconName}</span>
    </button>
  `;
};
