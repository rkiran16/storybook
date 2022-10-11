import { html } from "lit-html";

export const Returnable = ({ isReturnable = true }) => {
  if (isReturnable) {
    return html`
      <span class="position-relative me-2 d-flex align-items-center">
        <span class="m-2 material-icons">done</span>
        <strong class="sub-title-3 fw-bold">RETURNABLE</strong>
      </span>
    `;
  } else {
    return html`
      <span class="position-relative me-2 d-flex align-items-center">
        <span class="m-2 material-icons">clear</span>
        <strong class="sub-title-3 fw-bold">RETURNABLE</strong>
      </span>
    `;
  }
};
