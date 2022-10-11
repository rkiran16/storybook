import { html } from "lit-html";
import { Link } from "../Link/Link";
import { CheckBox } from "../../form/CheckBox/CheckBox";

export const Tile = ({hideCheckBox = false}) => {
    return html `
        <div class="tile">
            <div class="tile__info"  style="height: 300px">
                <div class="tile__info__controls">
                    ${!hideCheckBox ? CheckBox({checked: false, showLabel: false}) : ''}
                    <div class="w-100 d-flex justify-content-end tile-control">
                        <button type="button" class="btn btn-icon btn-icon-w-text horizontal">
                            Remove
                            <span class="material-icons-outlined ms-1">delete_outline</span>
                        </button>
                    </div>
                </div>
                <div class="d-flex flex-column w-100">
                    <div class="mb-2">
                        ${Link({label:"Title Goes Here",
                        href: "http://www.cardinalhealth.com",target :"_self",
                        showIcon : false, inline: true, additionalClass: "text-break tile-title"})}
                    </div> 
                    <div class="d-flex flex-column flex-sm-row justify-content-between w-100">
                      <p>REST OF CONTENT GOES HERE
                    </div> 
                </div>
            </div>
        </div>
    `
}