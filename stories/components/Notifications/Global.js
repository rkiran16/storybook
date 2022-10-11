import { html } from "lit-html";
import { Link } from "../Link/Link";

const GlobalIcon = (type) => {
  console.log(type);
  switch (type) {
    case "warning":
      return html` <span class="material-icons"> warning_amber </span> `;
    case "success":
      return html` <span class="material-icons"> check_circle_outline </span> `;
    default:
      return html` <span class="material-icons"> error_outline </span> `;
  }
};

export const GlobalNotification = ({
  title,
  label,
  color = "black",
  icon = "default",
  href,
  linkTitle,
}) => {
  return html`
      <div
        class="alert alert-custom bg-${color} alert-dismissible d-flex align-items-center text-white rounded-0 global-notification"
        role="alert"
      >
        <div class="container d-flex position-relative">
        ${icon ? GlobalIcon(icon) : null}
        <div>
          <strong class="p-2">${title}</strong>
          <span> ${label}</span>
          <span class="ms-2 text-white">
            ${
              href
                ? html`<a class="inline text-white" href=${href}>${linkTitle}</a>`
                : null
            }
          </span>
        </div>
        <button
          type="button"
          class="btn-close btn-close-white p-1" 
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      </div>
    </div>
  `;
};
