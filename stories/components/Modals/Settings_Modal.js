import { html } from 'lit-html';

export const SettingsModal = () => {
  return html `
    <div class="modal" tabindex="-1" id="settingsModal1" aria-labelledby="settingsModalLabel1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-sm">
        <div class="modal-content">
          <div class="modal-header align-items-center">
            <h5 class="modal-title mb-0" id="settingsModalLabel1">Edit SMS (text) authentication</h5>
            <button type="button" class="btn btn-icon" data-bs-dismiss="modal" aria-label="Close">
              <span class="material-icons ">close</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="mb-1 mt-n1">Please follow the instructions below to complete your text message authentication. </p>
            <form class="mb-3 pt-4">
              <div class="form-group mb-4">
                <input type="text" id="floatingInput" placeholder="Placeholder Text" class="form-control form-control-undefined ">
                <label for="floatingInput">Label</label>
              </div>
              <div class="form-group">
                <input type="text" id="floatingInput1" placeholder="Placeholder Text" class="form-control form-control-undefined ">
                <label for="floatingInput1">Label</label>
                <div id="emailHelp" class="form-text">Didn't receive a passcode? Resend passcode</div>
              </div>
            </form>
            <small> This mobile number will be used to restore access to your account and receive notifications. </small>
          </div>
          <div class="modal-footer">
            <div class="d-grid w-100 d-sm-flex flex-sm-row-reverse gap-3 align-items-center  justify-content-sm-start">
              <button type="button" data-bs-target="#settingsModal2" data-bs-toggle="modal" data-bs-dismiss="modal" class="btn btn-primary">Next</button>  
              <button type="button" class="btn btn-tertiary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" tabindex="-1" id="settingsModal2" aria-labelledby="settingsModalLabel2" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-sm">
        <div class="modal-content">
          <div class="modal-header align-items-center">
            <h5 class="modal-title mb-0" id="settingsModalLabel2">Edit SMS (text) authentication</h5>
            <button type="button" class="btn btn-icon" data-bs-dismiss="modal" aria-label="Close">
              <span class="material-icons ">close</span>
            </button>
          </div>
          <div class="modal-body">
              <p class="mt-n1">
              For your security, please enter the one-time passcode that was sent to your device.
            </p>
            <form class="pt-2">
              <div class="form-group">
                <input type="text" id="floatingInput2" placeholder="Placeholder Text" class="form-control form-control-undefined ">
                <label for="floatingInput2">Label</label>
                <div id="emailHelp1" class="form-text">Didn't receive a passcode? Resend passcode</div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="d-grid w-100 d-sm-flex flex-sm-row-reverse gap-3 align-items-center  justify-content-sm-start">
              <button type="button" class="btn btn-primary">Verify passcode</button>  
              <button type="button" class="btn btn-tertiary" data-bs-target="#settingsModal1" data-bs-toggle="modal"  data-bs-dismiss="modal">Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}   