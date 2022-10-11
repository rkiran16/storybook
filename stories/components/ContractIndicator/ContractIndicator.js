import { html } from 'lit-html';

const contractIcon = () => {
   return html`
    <span class="position-relative me-2 d-flex align-items-center">
      <label class="position-absolute top-50 start-50 sub-title-4 translate-middle text-white lh-1">8</label>
      <svg role="img" aria-labelledby="count" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <title id="count">8</title>
        <path fill="currentColor" d="m25 12.955-2.662-3.044.371-4.025-3.938-.895L16.709 1.5 13 3.093 9.291 1.5 7.229 4.98l-3.938.884.371 4.036L1 12.955 3.662 16l-.371 4.036 3.938.895 2.062 3.48L13 22.805l3.709 1.595 2.062-3.48 3.938-.895L22.338 16Z"/>
      </svg>
    </span>
   `
}


export const ContractIndicator = ({variation = 'secondary', label = "CONTRACT 33590890", hasIcon = true}) => {
   return html `
      <span class=${`d-flex align-items-center text-${variation}`}>
        ${hasIcon ? contractIcon() : '' } 
        <strong class="pt-1">${label}</strong>
      </span>
   `
}