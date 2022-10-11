import { html } from "lit-html";
import ProductImg from "../../../../src/assets/images/product-thumbnail-fpo.png"

export const ProductImage = () => {
   return html`<img src=${ProductImg} class="product-thumbnail" alt="alt text goes here"/>`
}