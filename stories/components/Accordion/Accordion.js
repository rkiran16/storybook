import { html } from "lit-html";

export const Accordion = ({isOpen = false, label, collapseContainerId, accordionId, disabled = false, accordionSmall = false, accordionNoBorder = false}) => {
  const show = isOpen ? 'show': '';
  const btnCollapseClass = isOpen ? '': 'collapsed';
  const ariaExpanded = isOpen ? true: false;
  const smallAccordionClass = accordionSmall ? 'accordion-small': '';
  const accordionNoBorderClass = accordionNoBorder ? 'accordion-no-border': ''; 

  return html `
    <div class=${["accordion", smallAccordionClass, accordionNoBorderClass].join(" ")} id=${accordionId}>
      <div class="accordion-item">
        <h5 class="accordion-header" id="headingOne">
          <button class=${["accordion-button", btnCollapseClass].join(" ")} ?disabled=${disabled} type="button" data-bs-toggle="collapse" 
                  data-bs-target=${['#', collapseContainerId].join("")} aria-expanded=${ariaExpanded} aria-controls=${collapseContainerId} >
            ${label}
          </button>
        </h5>
        <div id=${collapseContainerId} class=${["accordion-collapse collapse", show ].join(' ')} 
             aria-labelledby="headingOne" data-bs-parent=${['#', accordionId].join("")}>
          <div class="accordion-body">
             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo mauris, scelerisque quis condimentum sed, blandit convallis lacus. 
                Phasellus consequat, nibh sed vestibulum posuere, ipsum nunc consequat tortor, 
                nec scelerisque ligula dolor nec neque. Integer faucibus nunc non consequat venenatis.
             </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export const MultipleAccordion = ({disabled = false, accordionSmall = false}) => {
  const smallAccordionClass = accordionSmall ? 'accordion-small': '';

   return html`
   <div class=${["accordion", smallAccordionClass].join(" ")} id="accordionPanelsStayOpenExample">
   <div class="accordion-item">
     <h5 class="accordion-header" id="panelsStayOpen-headingOne">
       <button class="accordion-button" ?disabled=${disabled} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
         Accordion Item #1
       </button>
     </h5>
     <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
       <div class="accordion-body">
          Accordion Body Goes Here
       </div>
     </div>
   </div>
   <div class="accordion-item">
     <h5 class="accordion-header" id="panelsStayOpen-headingTwo">
       <button class="accordion-button collapsed" ?disabled=${disabled} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
         Accordion Item #2
       </button>
     </h5>
     <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
       <div class="accordion-body">
         Accordion Body Goes Here
       </div>
     </div>
   </div>
   <div class="accordion-item">
     <h5 class="accordion-header" id="panelsStayOpen-headingThree">
       <button class="accordion-button collapsed" ?disabled=${disabled} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
         Accordion Item #3
       </button>
     </h5>
     <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
       <div class="accordion-body">
          Accordion Body Goes Here
       </div>
     </div>
   </div>
 </div>
   `
}