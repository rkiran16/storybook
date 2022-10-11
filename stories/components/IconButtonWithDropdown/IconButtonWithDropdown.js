import { html } from "lit-html";

export const IconButtonWithDropdown = ({ textDirection, inverse = false, disabled = false, iconName, buttonText, className = 'p-3' }) => {
  const mode = inverse ? 'inverse' : '';
  const direction = textDirection === 'vertical' ? '' : 'horizontal flex-row-reverse';
  const modeBackground = inverse ? 'background-color:#27251F' : '';
  const textClass = buttonText ? 'btn-icon-w-text' : '';
  const spacingClass = textDirection === 'horizontal' ? 'ms-1' : '';
  const btnClass = `btn btn-icon ${textClass} ${direction} ${mode}`;

  return html`
    <div class=${`d-inline-block ${className}`} style=${modeBackground}>
      <div class="dropdown">
        <button
          type="button"
          ?disabled=${disabled}
          class=${`dropdown-toggle ${btnClass}`}
          id="dropdownIconButton" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          <span class="material-icons ${spacingClass}">${iconName}</span>
          ${buttonText}
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="dropdownIconButton">
          <li tabIndex="-1" class="dropdown-item">Action </li>
          <li tabIndex="-1" class="dropdown-item"><a tabIndex="-1" href="#">Link</a></li>
          <li tabIndex="-1" class="dropdown-item">Another Action</li>
        </ul>
      </div>
    </div>
  `;
};

export const IconButtonWithOrganizedDropdown = ({ textDirection, inverse = false, disabled = false, iconName, buttonText, className = 'p-3' }) => {
  const mode = inverse ? 'inverse' : '';
  const direction = textDirection === 'vertical' ? '' : 'horizontal flex-row-reverse';
  const modeBackground = inverse ? 'background-color:#27251F' : '';
  const textClass = buttonText ? 'btn-icon-w-text' : '';
  const spacingClass = textDirection === 'horizontal' ? 'ms-1' : '';
  const btnClass = `btn btn-icon ${textClass} ${direction} ${mode}`;

  return html`
    <div class=${`d-inline-block ${className}`} style=${modeBackground}>
      <div class="organized-dropdown dropdown">
        <button
          type="button"
          ?disabled=${disabled}
          class=${`dropdown-toggle ${btnClass}`}
          id="dropdownIconButton" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          <span class="material-icons ${spacingClass}">${iconName}</span>
          ${buttonText}
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="dropdownMenuButton">
          <li class="dropdown-header" tabindex="-1"><h6>Organized list header 1</h6></li>
          <li tabIndex="-1" class="dropdown-item">Action</li>
          <li tabIndex="-1" class="dropdown-item">Another Action</li>
          <li tabIndex="-1" class="dropdown-item"><a tabIndex="-1" href="#">Links work too</a></li>
          <li class="dropdown-header" tabindex="-1"><h6>Organized list header 2</h6></li>
          <li tabIndex="-1" class="dropdown-item">Action 2</li>
          <li tabIndex="-1" class="dropdown-item">Another Action 2</li>
          <li tabIndex="-1" class="dropdown-item"><a tabIndex="-1" href="#">Link 2</a></li>
        </ul>
      </div>
    </div>
  `;
};
