import { html } from "lit-html";
import { CheckBox } from "../../form/CheckBox/CheckBox";
import { ProductImage } from "./components/ProductImage";
import { ProductPrice } from "./components/ProductPrice";
import { ProductInfo as ProductInfoComponent } from "./components/ProductInfo";
import { ProductControls } from "./components/ProductControls";
import { ProductInfoMobile } from "./components/ProductInfoMobile";
import { ContractIndicator } from "../ContractIndicator/ContractIndicator";
import { Link } from "../Link/Link";
import { InlineNotification } from "../Notifications/Inline/Inline";

const productAlternatives = (hideCheckBox) => {
  return html`
   <div class="accordion accordion-small product-tile__view-alternatives accordion-no-border" id="accordionNoBorder">
       <div class="accordion-item bg-transparent">
         <h5 class="accordion-header px-4 py-3" id="headingOne">
           <button type="button" data-bs-toggle="collapse" class="accordion-button collapsed" data-bs-target="#AccordionNoBorderContainer" aria-expanded="false" aria-controls="AccordionNoBorderContainer">
             View Alternatives
           </button>
         </h5>
         <div aria-labelledby="headingOne" id="AccordionNoBorderContainer" class="accordion-collapse collapse " data-bs-parent="#accordionNoBorder">
           <div class="accordion-body p-0">
              ${productInfo(hideCheckBox)}
              <hr />
              ${productInfo(hideCheckBox)}
           </div>
         </div>
       </div>
     </div>
  `
}

const productInfo = (hideCheckBox) => {
  return html `
    <div class="tile__info">
      <div class="tile__info__controls">
        ${!hideCheckBox ? CheckBox({checked: false, showLabel: false}) : ''}
        <div class="w-100 d-flex justify-content-end tile-control">
          <button type="button" class="btn btn-icon btn-icon-w-text horizontal">
            Remove
            <span class="material-icons ms-1">delete</span>
          </button>
        </div>
      </div>
      <div class="d-flex flex-column w-100">
          <div class="d-flex w-100">
            ${ProductImage()}
            <div class="d-flex align-items-center justify-content-between w-100">
              <div class="title-section">
                ${ContractIndicator({variation: 'danger', label: "Apexes generics portfolio b", hasIcon: true})}
                ${Link({label:"Heparin Sodium 5000 units/0.5 mL Preservative-Free CarpujectTM Syringe, 0.5 mL x 50 EA",
                        href: "http://www.cardinalhealth.com",target :"_self",
                        showIcon : false, inline: true, additionalClass: "mt-2 text-break tile-title"})}
              </div>
              <div class="d-none d-sm-flex mt-4">${ProductPrice()}</div>
            </div>
          </div>
          <div class="product-details">
            <div class="product-details__info">${ProductInfoComponent()}</div>
            <div class="product-details__info-mobile">${ProductInfoMobile()}</div>
            <div class="product-details__controls">${ProductControls()}</div>
          </div>
          <div class="mt-4">${InlineNotification({
            title: "Error!",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          })}</div>
      </div>
    </div>
  `
}

export const ProductTile = ({hideViewMore = false, hideCheckBox = false}) => {
  return html`
    <div class="tile product-tile position-relative">
      <div class="product-tile__flags">
        <span class="sub-title-4 badge bg-info double-flag-1 text-uppercase">New</span>
        <span class="sub-title-4 badge bg-info double-flag-2 text-uppercase">Recommended</span>
      </div>  
      ${productInfo(hideCheckBox)}
      ${hideViewMore ? '' : productAlternatives(hideCheckBox)}
    </div>
  `
}