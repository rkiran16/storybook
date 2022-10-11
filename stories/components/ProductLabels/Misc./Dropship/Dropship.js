import { html } from "lit-html";

export const Dropship = ({ isDropship = true }) => {
  if (isDropship) {
    return html`
      <span class="position-relative me-2 d-flex align-items-center">
        <span class="m-2 material-icons">check</span>
        <strong class="sub-title-3 fw-bold">DROP SHIP</strong>
      </span>
    `;
  } else {
    return html`
      <span class="position-relative me-2 d-flex align-items-center">
        <span class="m-2 material-icons">clear</span>
        <strong class="sub-title-3 fw-bold">DROP SHIP</strong>
      </span>
    `;
  }
};
