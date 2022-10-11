import { html } from "lit-html";

export const ProductPrice = () => {
   return html`
    <div class="product-price">
      <span class="sub-title-3 text-muted text-uppercase">invoice cost</span>
      <span class="h5 mb-1 lh-1">$999.99</span>
      <span class="lh-1"><span class="text-uppercase text-muted">UOI: </span>$99.9999</span>
    </div>
   `
}