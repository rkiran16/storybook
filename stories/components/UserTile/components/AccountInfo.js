import { html } from "lit-html";

export const AccountInfo = ({iconName, typeOfContact, contactInfo }) => {
  return html`
   <div class="d-flex flex-column mb-3">
     <div class="d-flex mb-2 align-items-center">
       <span class="material-icons-outlined me-3">${iconName}</span>
       <span class="text-muted">${typeOfContact}</span>
     </div>
     <div class="d-flex flex-column ms-0 ms-sm-6">
       ${contactInfo.map((contact) => html`<span class="text-break">${contact}</span>`)}
     </div>
   </div>
  `
}