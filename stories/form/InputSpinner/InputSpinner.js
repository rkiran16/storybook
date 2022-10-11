import { html } from "lit-html";

export const InputSpinner = ({ disabled }) => {

  const isDisabled = disabled? 'disabled' : '';

  return html`
    <div class=${["input-spinner", isDisabled].join(" ")} for="quantity">
      <button ?disabled=${disabled} onclick="" class="btn icon-button left">
        <span class="material-icons">
          remove
        </span>
      </button>
      <input ?disabled=${disabled} class="quantity" id="quantity" value="0" min="0" max="9999" name="quantity" type="number">
      <label for="quantity">Qty</label>
      <button ?disabled=${disabled} onclick="" class="btn icon-button right">
        <span class="material-icons">
          add
        </span>
      </button>
    </div>
  `
}