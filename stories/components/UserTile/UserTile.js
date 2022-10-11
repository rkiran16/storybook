import { html } from "lit-html";
import { CheckBox } from "../../form/CheckBox/CheckBox";
import { IconButtonWithDropdown } from "../IconButtonWithDropdown/IconButtonWithDropdown";
import { UserInfo } from "./components/UserInfo";
import { AccountInfo } from "./components/AccountInfo";

const UserViewMore = () => {
   return html`
    <div class="accordion accordion-small user-tile__more-section accordion-no-border" id="accordionNoBorder">
        <div class="accordion-item">
          <h5 class="accordion-header" id="headingOne">
            <button type="button" data-bs-toggle="collapse" class="accordion-button collapsed" data-bs-target="#AccordionNoBorderContainer" aria-expanded="false" aria-controls="AccordionNoBorderContainer">
              Show more
            </button>
          </h5>
          <div aria-labelledby="headingOne" id="AccordionNoBorderContainer" class="accordion-collapse collapse " data-bs-parent="#accordionNoBorder">
            <div class="accordion-body p-0 pt-3">
              ${AccountInfo({iconName: "switch_account", typeOfContact: "Assigned accounts:", contactInfo: ["+1 (513) 555-5555 ext.55555", "+1 (513) 555-5556 ext.55556", "+1 (513) 555-5557 ext.55557"]})}
              ${AccountInfo({iconName: "mail", typeOfContact: "Primary email:", contactInfo: ["Anthony_Stark@lakewoodPharmacy.com"]})}
              ${AccountInfo({iconName: "phone", typeOfContact: "Primary phone number:", contactInfo:[ "+1 (513) 555-5555 ext.55555"]})}
              ${AccountInfo({iconName: "phone_iphone", typeOfContact: "Mobile phone number:", contactInfo: ["+1 (513) 555-5555 ext.55555"]})}
              ${AccountInfo({iconName: "phone_iphone", typeOfContact: "Mobile phone number:", contactInfo: ["+1 (513) 555-5555 ext.55555"]})}
            </div>
          </div>
        </div>
      </div>
   `
}

const UserTileInfo = (hideCheckBox,hasUserImg) => {
  return html`
    <div class="tile__info">
        <div class="tile__info__controls">
            ${!hideCheckBox ? CheckBox({checked: false, showLabel: false}) : ''}
            <div class="w-100 d-flex justify-content-end tile-control">
              ${IconButtonWithDropdown({textDirection: 'horizontal', inverse: false, disabled: false, iconName: 'more_vert', buttonText: 'Actions', className: "p-0"})}
            </div>
        </div>
        <div class="d-flex flex-column w-100">
          ${UserInfo(hasUserImg)}
        </div>
    </div>
  `
}


export const UserTile = ({hideViewMore = false, hideCheckBox = false,hasUserImg = true}) => {
  return html`
    <div class="tile user-tile">
      ${UserTileInfo(hideCheckBox,hasUserImg)}
      ${hideViewMore ?  '' : UserViewMore()}
    </div>
   `
}

