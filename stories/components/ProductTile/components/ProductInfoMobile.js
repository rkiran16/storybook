import { html } from "lit-html";
import { ProductPrice } from "./ProductPrice";

export const ProductInfoMobile = () => {
   return html`
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column">
          <span class="d-flex">
            <span class="sub-title-3 text-muted me-1">CIN:</span>
            <span class="sub-title-3">999999</span>
          </span>
          <span class="d-flex">
            <span class="sub-title-3 text-muted me-1">Net cost:</span>
            <span class="sub-title-3">$99,999.99</span>
          </span>
          <span class="d-flex">
            <span class="sub-title-3 text-muted me-1">MFR:</span>
            <span class="sub-title-3 text-uppercase">astellas pharma</span>
          </span>
        </div>
        ${ProductPrice()}
      </div>
      <div class="accordion accordion-small accordion-no-border" id="productInfoMobile">
        <div class="accordion-item">
          <h5 class="accordion-header" id="headingOne">
            <button type="button" data-bs-toggle="collapse" class="accordion-button collapsed" data-bs-target="#productInfoMobileContainer" aria-expanded="false" aria-controls="productInfoMobileContainer">
              See more
            </button>
          </h5>
          <div aria-labelledby="headingOne" id="productInfoMobileContainer" class="accordion-collapse collapse " data-bs-parent="#productInfoMobile">
            <div class="accordion-body p-0 pt-3">
              <div class="d-flex flex-column">
                <span class="d-flex">
                  <span class="text-muted me-1">NDC:</span>
                  <span>99999-999-99</span>
                </span>
                <span class="d-flex">
                  <span class="text-muted me-1">Net UOI:</span>
                  <span>$99,999.99</span>
                </span>
                <span class="d-flex">
                  <span class="text-muted me-1">AB Rating:</span>
                  <span class="text-uppercase">ZB</span>
                </span>
              </div>
              <div class="d-flex flex-column">
                <span class="d-flex">
                  <span class="text-muted me-1">UPC:</span>
                  <span>999999-999999</span>
                </span>
                <span class="d-flex">
                  <span class="text-muted me-1">Retail:</span>
                  <span>$99,999.99</span>
                </span>
                <span class="d-flex">
                  <span class="text-muted me-1">Unit dose:</span>
                  <span class="text-uppercase">UD</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   `
}