import { html } from "lit-html";

function insertBR() {
   return html`
      <div>
       ${Array(50).fill('').map(ele => { return  html`<br>` })}
      </div>
   `
}

export const ModalHeader = () => {
  return html`
     <div class="modal-header align-items-start">
       <div>
         <span class="material-icons text-success md-48">check_circle_outline</span>
         <h5 class="modal-title" id="exampleModalLabel">Lorem ipsum dolor</h5>
       </div>
       <button type="button" class="btn btn-icon" data-bs-dismiss="modal" aria-label="Close">
            <span class="material-icons ">close</span>
        </button>
     </div>
  `
}

export const ModalFooter = () => {
   return html`
    <div class="py-3 px-4 border-top">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="customCheck111-33" />
          <label class="form-check-label" for="customCheck111-33">Don't show this again</label>
        </div>
    </div>
    <div class="modal-footer">
        <div class="d-grid w-100 gap-3 d-sm-flex align-items-sm-center  flex-sm-row-reverse justify-content-sm-between">
          <div class="d-grid gap-3 d-sm-flex flex-sm-row-reverse">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-outline-secondary me-md-2">Secondary</button>
          </div>
          <button type="button" data-bs-dismiss="modal" class="btn  btn-tertiary">Teritary Button</button>
        </div>
    </div>
   `
}

export const Modal = ({size = "default"}) => {
   return html`
    <div class="modal fade" tabindex="-1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class=${`modal-dialog modal-dialog-centered modal-fullscreen-sm-down ${size}`}>
          <div class="modal-content">
            ${ModalHeader()}
            <div class="modal-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec suscipit lacinia pellentesque. Maecenas a lectus in nulla condimentum accumsan finibus lobortis enim.
                Etiam pretium efficitur dolor, sed faucibus lectus.
                Proin non euismod tellus. Nunc id commodo enim. Duis efficitur convallis efficitur. Integer porttitor.
              </p>
              <div style="height: 183px; background-color: #e2e9ea"></div>
            </div>
            ${ModalFooter()}
          </div>
        </div>
   </div>
   `
}