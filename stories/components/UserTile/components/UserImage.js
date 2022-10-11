import { html } from "lit-html";
import UserImg from "../../../../src/assets/images/user-profile.png"

export const UserImage = (bgColor = 'bg-danger', hasUserImg) => {
   return html`
    ${hasUserImg ? html`<img class="user-img-placeholder rounded-circle" src=${UserImg} />` : html`<span class=${`user-img-placeholder rounded-circle ${bgColor}`}>
    <span class="fs-3 fw-bold text-uppercase text-white">as</span> 
 </span>`}
   `
}