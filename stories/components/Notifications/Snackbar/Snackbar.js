import { html } from "lit-html";
import { IconButton } from "../../IconButton/IconButton";

const Icon = (type) => {
  switch (type) {
    case "warning":
      return html` <span class="material-icons"> warning_amber </span> `;
    case "success":
      return html` <span class="material-icons"> check_circle_outline </span> `;
    default:
      return html` <span class="material-icons"> error_outline </span> `;
  }
};

export const Snackbar = ({
  title,
  label,
  href,
  linkTitle,
  color = "primary",
  icon = "default",
  button = false,
}) => {
  return html`
    <div class="alert alert-custom  bg-${color} alert-dismissible pe-3 text-white"role="alert">
      <div class="d-flex flex-row justify-content-between align-items-start align-items-md-center w-100 ">
         <div class="d-flex align-items-start align-items-lg-center me-2">${icon ? Icon(icon) : null}</div>
          <div class="d-flex flex-column flex-sm-row align-items-sm-center w-100">
            <span>
                <strong>${title}</strong>
                <span class="lh-1">${label}</span>
            </span>
            <div class="d-flex justify-content-between align-items-center w-100 mt-2 mt-sm-0">
              ${linkTitle ? html`<a href="#" class="text-white ms-sm-2 inline">${linkTitle}</a>` : ''}
              ${button ? html `<button type="button" class="btn btn-icon btn-icon-w-text horizontal inverse">
              Undo
              <span class="material-icons me-1">replay</span>
            </button>` : ''}
            </div>
        </div>
        <div class="d-flex">
          <button type="button" class="btn btn-icon w-auto h-auto text-white" data-bs-dismiss="alert" aria-label="Close">
            <span class="material-icons">close</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
