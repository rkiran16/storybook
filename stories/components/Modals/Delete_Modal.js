import { html } from 'lit-html';

export const DeleteModal = () => {
  return html `
    <div class="modal fade" tabindex="-1" id="deleteModal" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Delete 23 items</h5>
            <button type="button" class="btn btn-icon" data-bs-dismiss="modal" aria-label="Close">
            <span class="material-icons ">close</span>
        </button>
          </div>
          <div class="modal-body">
            <p class="mb-0">
              This action will remove the selected items permanantly from this list.
              Are you sure you want to delete these items ?
            </p>
          </div>
          <div class="modal-footer">
            <div class="d-grid w-100 d-sm-flex flex-sm-row-reverse gap-3 align-items-center  justify-content-sm-start">
              <button type="button" class="btn btn-primary">Delete Items</button>  
              <button type="button" class="btn btn-tertiary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}   