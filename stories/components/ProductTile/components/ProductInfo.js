import { html } from "lit-html";

export const ProductInfo = () => {
   return html`
    <div class="product-info">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column me-5">
          <span class="d-flex">
            <span class="text-muted me-1">CIN:</span>
            <span>999999</span>
          </span>
          <span class="d-flex">
            <span class="text-muted me-1">Net cost:</span>
            <span>$99,999.99</span>
          </span>
          <span class="d-flex">
            <span class="text-muted me-1">MFR:</span>
            <span class="text-uppercase">astellas pharma</span>
          </span>
        </div>
        <div class="d-flex flex-column me-5">
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
      <div class="d-flex mt-4 justify-content-md-between justify-content-lg-start">
            <span class="position-relative d-flex align-items-center w-25 me-5">
              <span class="me-2 material-icons">check</span>
              <strong class="sub-title-3 fw-bold">DROP SHIP</strong>
            </span>
            <span class="position-relative  d-flex align-items-center">
              <span class="me-2 material-icons">done</span>
              <strong class="sub-title-3 fw-bold">RETURNABLE</strong>
            </span>
            <span class="d-none  d-md-flex d-lg-none">
              <span class="text-muted me-1">Last Ordered:</span>
              <span>10/11/21</span>
            </span>
        </div>
        <div class="d-flex d-md-none d-lg-flex mt-sm-3 mt-lg-5">
            <span class="d-flex">
              <span class="text-muted me-1">Last Ordered:</span>
              <span>10/11/21</span>
            </span>
        </div>
    </div>
   `
}