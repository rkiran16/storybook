import { html } from "lit-html";
import { StockStatus } from "../../ProductLabels/StockStatus/StockStatus";
import { InputSpinner } from "../../../form/InputSpinner/InputSpinner";
import { Toggle } from "../../Toggle/Toggle";

const mobileButtonContainer = () => {
   return html`
    <div class="d-flex w-100 justify-content-between">
      ${InputSpinner({})}
      <button type="button" class="btn ms-2 w-100 btn-outline-secondary">Buy now</button>
    </div>
    <button type="button" class="btn w-100 mt-2 btn-primary">Add to cart</button>
  `
}

const desktopButtonContainer = () => {
   return html`
    <div class="d-flex justify-content-between align-items-center">
      ${InputSpinner({})}
      <button type="button" class="btn mx-3 w-100 btn-primary">Add to cart</button>
      <button type="button" class="btn w-100 btn-outline-secondary bg-white">Buy now</button>
    </div>
   `
}

export const ProductControls = () => {
  return html`
    <div class="d-flex flex-column">
      ${StockStatus({
        title: "IN STOCK",
        variation: "success",
        count: 378,
      })}
      <span class="sub-title-4 mt-2">Up to 900 available, additional express charges may apply.</span>
      <div class="d-block mt-2 d-sm-none">${mobileButtonContainer()}</div>
      <div class="d-none mt-3 d-sm-block">${desktopButtonContainer()}</div>
      <div class="d-flex mt-3 justify-content-between align-items-center w-100">
        <div class="form-check form-switch toggle">
          <input class="form-check-input" type="checkbox" checked id="flexSwitchCheckDefault" aria-label="Toggle Switch">
          <label class="form-check-label sub-title-4" for="flexSwitchCheckDefault">Allow substitutions</label> 
        </div>
        <button type="button" class="btn btn-tertiary btn-w-icon d-flex justify-content-center align-items-center ">
          <span class="material-icons md-16 me-2">add</span>
          Add to list
        </button>
      </div>
    </div>
  `
}