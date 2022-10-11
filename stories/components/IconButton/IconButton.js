import { html } from "lit-html";

export const IconButton = ({ textDirection, inverse = false, disabled = false, iconName, buttonText }) => {
  const mode = inverse ? 'inverse' : '';
  const direction = textDirection === 'vertical' ? '' : 'horizontal';
  const modeBackground = inverse ? 'background-color:#27251F' : '';
  const textClass = buttonText ? 'btn-icon-w-text' : '';
  const spacingClass = textDirection === 'horizontal' ? 'me-1' : '';
  const btnClass = `btn btn-icon ${textClass} ${direction} ${mode}`;

  return html`
    <div class="d-inline-block p-3" style=${modeBackground}>
      <button
        type="button"
        ?disabled=${disabled}
        class=${btnClass}
      >
        <span class="material-icons ${spacingClass}">${iconName}</span>
        ${buttonText}
      </button>
    </div>
  `;
};
