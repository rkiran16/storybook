import { html } from "lit-html";

export const Button = ({disabled = false, hasIcon = false, size = 'default', variation, label = "Primary Button", iconName = "add"}) => {
  const iconClasses = hasIcon ? "btn-w-icon d-flex justify-content-center align-items-center" : '';
  const sizeClass = size === 'skinny' && hasIcon ? 'btn-sm btn-w-icon-sm' : size === 'skinny' ? 'btn-sm' : '';

  return html`
    <button type="button" ?disabled=${disabled} class=${['btn', variation, iconClasses, sizeClass].join(' ')}>
      ${hasIcon ? html`<span class="material-icons md-16 me-2">${iconName}</span>` : ''}
      ${label}
    </button>
  `;
};
