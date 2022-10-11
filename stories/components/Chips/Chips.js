import { html, nothing } from "lit-html";


export const Chip = ({checked, disabled, icon= 'done', label = "Choice Chip", inputType = 'checkbox', showLeftIcon = false, showRightIcon = false}) => {
   return html`
      <div class="chip">
         <input type=${inputType} class="btn-check" id=${`chip-${icon}`} ?disabled=${disabled} ?checked=${checked} autocomplete="off">
         <label class="btn rounded-pill" for=${`chip-${icon}`}>
             <span class=${`material-icons me-2 ${!showLeftIcon || checked? 'icon' : ''}`}>${icon}</span>
             ${label}
            ${showRightIcon ? html`<span class="material-icons ms-2">close</span>` : nothing} 
         </label>
      </div>`
}

export const FilterChip = () => {
   return html`
      <div class="chip chip--filter">
         <input type="checkbox" class="btn-check" id='filter-chip' autocomplete="off">
         <label class="btn rounded-pill" for='filter-chip'>
            Filter
            <span class="material-icons icon"></span>
         </label>
      </div>`
}