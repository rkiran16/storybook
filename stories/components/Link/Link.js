import { html } from "lit-html";


export const Link = ({label = "Link action",href = "http://www.cardinalhealth.com",target = "_self", showIcon = false, inline = false, additionalClass = ""}) => {
    const linkWithIcon = () => html`
         <a href=${href} target=${target} class="d-inline-flex align-items-center text-decoration-none">
            <span class="text-decoration-underline">${label}</span>
            <span class="material-icons ms-1 mt-1 md-16">open_in_new</span>
         </a>`
    

    if (inline) {
        return html `<a href=${href} class=${`inline ${additionalClass}`} target=${target}>${label}</a>`;
    } else {
        return showIcon ? linkWithIcon() : html`<a href=${href} target=${target}>${label}</a>` ;
    }
}