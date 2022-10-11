import { html } from "lit-html";

const ToolTipContent = () => `
    <div class="text-start">
      <p class="mb-1">
          This is a few lines of tooltip text. 
          This box shows the maximum amount of content that should be displayed inside.
          If more room is needed, use a modal instead.
      </p>   
      <a type="button" href="#" class="btn btn-tertiary">Tertiary Button</a> 
    </div>  
`

export const ToolTip = ({showText = false}) => {
   return html`
    <script>
      window.addEventListener("DOMContentLoaded", () => {
        var tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });
      });
    </script>
    <button class="btn btn-link link-secondary text-decoration-none d-flex align-items-center p-2" data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="bottom" title=${ToolTipContent()}>
      ${showText ? html`<span class="text-decoration-underline me-2">Tooltip Text</span>` : ''}
      <span class="material-icons-outlined m-0">info</span>
    </button>
   `
}