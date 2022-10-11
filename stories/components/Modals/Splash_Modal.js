import { html } from 'lit-html';
import { Link } from "../Link/Link";

export const SplashModal = () => {
  return html `
    <div class="modal fade" tabindex="-1" id="splashModal" aria-labelledby="splashModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-sm">
        <div class="modal-content">
          <div class="modal-header align-items-start">
            <div>
              <span class="material-icons text-warning md-48">warning_amber</span>
                <h5 class="modal-title" id="exampleModalLabel">Lorem ipsum dolor</h5>
            </div>
            <button type="button" class="btn btn-icon" data-bs-dismiss="modal" aria-label="Close">
            <span class="material-icons ">close</span>
        </button>
          </div>
          <div class="modal-body">
            <p>
              The recommended browsers for Order Express are Google Chrome and Microsoft Edge.
              If you do not use recommended browsers, you may encounter issues like slowness, JavaScript errors, navigation problems, lack of security,
              1-800 errors, and limited use of the Order History page.
            </p>
            <p>
              Internet Explorer will no longer be supported in 2022.
              If you are using Internet Explorer today, please plan to transition to a supported browser as soon as possible.
              You can download Google Chrome or Microsoft Edge with the links below:
            </p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <div class="d-grid gap-3">
                ${Link({showIcon:true})}
                ${Link({showIcon:true})}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}   