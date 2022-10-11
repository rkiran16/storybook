import { html } from 'lit-html';
import { CheckBox } from "../../form/CheckBox/CheckBox";
import { Link } from "../Link/Link";
import { ProductPrice } from "../ProductTile/components/ProductPrice";

const CartDetails = () => {
    return html`
        <div class="d-flex w-100 flex-column">
            <div class="d-flex flex-column flex-sm-row">
                <div class="me-sm-2">
                    <span class="text-muted sub-title-3 me-1">PO#:</span>
                    <span class="sub-title-3">12345123451234512345</span>
                </div>  
                <div>
                    <span>
                        <span class="text-muted sub-title-3 me-1">Lines:</span>
                        <span class="sub-title-3">4</span>
                    </span>
                    <span class="ms-2">
                        <span class="text-muted sub-title-3 me-1">Pieces:</span>
                        <span class="sub-title-3">6</span>
                    <span> 
                </div>
            </div>
            <div>
                <span>
                    <span class="text-muted sub-title-3 me-1">Last Updated:</span>
                    <span class="sub-title-3">
                        Sreekanth_Kanamarlapudi 11/04/2021 8:30 AM
                    </span>
                </span>
            </div>
        </div>
    `
}


const CartTileInfo = (hideCheckBox) => {
    return html`
        <div class="tile__info">
            <div class="tile__info__controls">
                ${!hideCheckBox ? CheckBox({checked: false, showLabel: false}) : ''}
                <div class="w-100 d-flex justify-content-end tile-control">
                    <button type="button" class="btn btn-icon btn-icon-w-text horizontal">
                        Remove
                        <span class="material-icons-outlined ms-1">delete</span>
                    </button>
                </div>
            </div>
            <div class="d-flex flex-column w-100">
                <div class="mb-2">
                    ${Link({label:"Heparin Sodium 5000 units/0.5 mL Preservative-Free CarpujectTM Syringe, 0.5 mL x 50 EA",
                    href: "http://www.cardinalhealth.com",target :"_self",
                    showIcon : false, inline: true, additionalClass: "text-break tile-title"})}
                </div> 
                <div class="d-flex flex-column flex-sm-row justify-content-between w-100">
                    ${CartDetails()}
                    <div class="d-flex flex-column mt-3 mt-sm-0 justify-content-end">
                        ${ProductPrice()}
                        <div class="form-check mt-2 form-switch toggle">
                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault" aria-label="Toggle Switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Toggle Switch</label> 
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    `
}

export const CartTile = ({hideViewMore = false, hideCheckBox = false}) => {
     return html`
        <div class="tile cart-tile">
            ${CartTileInfo(hideCheckBox)}
        </div>
     `
}