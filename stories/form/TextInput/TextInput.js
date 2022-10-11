import { html } from "lit-html";

export const TextInput = ({ label, isInvalid, disabled, size, showHelper, icon, placeholderText }) => {

  const icons = {
    open: 'expand_less',
    close: 'expand_more',
    openClose: 'unfold_more',
    tooltip: 'info_outline',
    search: 'search',
    loading: 'loading',
  }

  const helperHTML = html`<div id="emailHelp" class="form-text">Helper Text</div>`;
  const iconHTML = icon === 'loading' ? 
  html`<div class="spinner-border spinner-border-sm text-primary" role="status">
  <span class="visually-hidden">Loading...</span></div>`
  : 
  html`<span class="material-icons inline-icon--right">${icons[icon]}</span>`;
  const invalidHTML = html`<div class="invalid-feedback"><span class="material-icons md-16 me-2">info_outline</span>Error message goes here.</div>`

  const iconClass = icon ? 'form-group--icon' : '';
  const sizeClass = size !== "default" ? `form-control-${size}` : '';
  const invalidClass = isInvalid ? 'is-invalid' : '';
  const inputClasses = `form-control ${sizeClass} ${invalidClass}`

  return html`
      <div class="form-group ${iconClass}">
        <input type="text"
        class=${inputClasses} 
        ?disabled=${disabled} id="floatingInput" placeholder="${placeholderText}">
        <label for="floatingInput">${label}</label>
        ${iconClass ? iconHTML : ''}
        ${isInvalid ? invalidHTML : ''}
        ${showHelper ? helperHTML : ''}
      </div>
  `
}