import { html } from "lit-html";
import { IconButtonWithDropdown } from "../IconButtonWithDropdown/IconButtonWithDropdown";
import { Link } from "../Link/Link";

const Card = () => {
  return html`
    <div class="card">
      <div class="card-header d-flex justify-content-between">
          <div>
            <h5 class="card-title">Lorem Ipsum Dolor</h5>
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          ${IconButtonWithDropdown({textDirection: 'horizontal', inverse: false, disabled: false, iconName: 'more_vert', buttonText: 'Actions', className: 'p-0'})}
      </div>
      <div class="card-body">
        <p class="card-text pb-4">
           
        </p>
      </div>
      <div class="card-footer">
       ${Link({})}
      </div>
    </div>
  `;
}

export const CardFull = ({size}) => {
  const sizeClass = `col-md-12 col-lg-${size}`;
  return html`
    <div class="container">
        <div class="row">
          <div class=${sizeClass}>
              ${Card()}
          </div>
        </div>
    </div>
  `;
}