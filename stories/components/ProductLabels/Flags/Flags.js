import { html } from "lit-html";

export const Flags = ({ single, title1, title2 }) => {
  if (single) {
    return html`
      <span
        class="sub-title-4 single-flag badge bg-info text-uppercase fw-normal"
        >${title1}</span
      >
    `;
  } else {
    return html`
      <span
        class="sub-title-4 badge bg-info double-flag-1 text-uppercase fw-normal"
        >${title1}</span
      >
      <span
        class="sub-title-4 badge bg-info double-flag-2 text-uppercase fw-normal"
        >${title2}</span
      >
    `;
  }
};
