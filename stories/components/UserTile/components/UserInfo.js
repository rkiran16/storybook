import { html } from "lit-html";
import { UserImage } from "./UserImage";
import { Link } from "../../Link/Link";

export const UserInfo = (hasUserImg) => {
   return html`
    <div class="user-info">
        ${UserImage('bg-danger', hasUserImg)}
        <div class="user-info__details">
          ${Link({label:"Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr",
                        href: "http://www.cardinalhealth.com",target :"_self",
                        showIcon : false, inline: true, additionalClass: "mb-3 text-break tile-title"})}
          <p class="mb-1">
            <span class="text-muted">Role:</span>
            <span class="d-inline-flex align-items-center">
              Admin
              <span class="material-icons ms-2">info</span>
            </span>
          </p>
          <p class="mb-1">
            <span class="text-muted">User ID:</span>
            <span>Chris_Falcom</span>
          </p>
          <p class="mb-1">
            <span class="text-muted">Last Modified:</span>
            <span>12/14/2022</span>
          </p>
          <p class="mb-1">
            <span class="text-muted">User Properties:</span>
            <span>Value</span>
          </p>
          <p class="mb-1">
            <span class="text-muted">User Properties:</span>
            <span>Value</span>
          </p>
          <p class="mb-1">
            <span class="text-muted">User Properties:</span>
            <span>Value</span>
          </p>
        </div>
    </div>
   `
}