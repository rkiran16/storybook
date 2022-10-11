import { html } from "lit-html";
import { Link } from "../../Link/Link";
import { IconButton } from "../../IconButton/IconButton";

const Icon = (type) => {
  switch (type) {
    case "warning":
      return html` <span class="material-icons "> warning_amber </span> `;
    case "success":
      return html`
        <span class="material-icons "> check_circle_outline </span>
      `;
    default:
      return html` <span class="material-icons "> error_outline </span> `;
  }
};

export const InlineNotification = ({
  title,
  label,
  color = "danger",
  icon = "default",
  href,
  linkTitle,
  href2,
  linkTitle2,
  dismiss = "true",
}) => {
  return html`
      <div
        class="alert alert-${color} border-${color} alert-dismissible d-flex justify-content-between align-items-center "
        role="alert"
      >

          <div class="d-flex">

          ${icon ? Icon(icon) : null}
          <div class="ms-2">
          <span>
            <strong class="text-${color}">${title}</strong>
            <span class="text-black text-break"> ${label}</span>
            <span class="ps-2">
              ${
                href
                  ? Link({
                      label: href && linkTitle ? linkTitle : "Link Action",
                      href: href,
                      variations: "secondary",
                    })
                  : null
              }
            </span>
            <span class="ps-2 ">
              ${
                href2
                  ? Link({
                      label: href2 && linkTitle2 ? linkTitle2 : "Link Action",
                      href: href2,
                      variations: "secondary",
                    })
                  : null
              }
            </span>
            </span>
            </div>
          </div>
 ${
   dismiss
     ? html` <button
         type="button"
         class="btn-close"
         data-bs-dismiss="alert"
         aria-label="Close"
       ></button>`
     : null
 }
         
        </div>
      </div>
  `;
};
//  ? html` <div>
//          ${IconButton({
//            textDirection: "vertical",
//            inverse: false,
//            disabled: false,
//            iconName: "close",
//            class: "p-0",
//          })}
//        </div>`
