import { html } from "lit-html";

export function StockStatus({ title, variation, count }) {
  return html`
    <div>
      <span
        class="sub-title-3 rounded-pill p-1 ${count < 10
          ? "px-2"
          : ""} bg-${variation} text-white "
        >${count}</span
      >
      <span class=${`sub-title-3 text-${variation}`}>${title}</span>
    </div>
  `;
}
