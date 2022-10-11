import { html } from "lit-html";

export const ContentSwitcher = ({ label, disabled }) => {
  return html`
    <div
      class="btn-group content-switcher"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        ?disabled=${disabled}
      />
      <label class="btn" for="btnradio1">${label.left}</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
        ?disabled=${disabled}
      />
      <label class="btn" for="btnradio2">${label.middle}</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
        ?disabled=${disabled}
      />
      <label class="btn" for="btnradio3">${label.right}</label>
    </div>
  `;
};

export const SwitcherWithIcon = ({ label, disabled }) => {
  return html`
    <div
      class="btn-group content-switcher--w-icon"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradioChart"
        autocomplete="off"
        ?disabled=${disabled}
      />
      <label class="btn d-flex align-items-center" for="btnradioChart">
        <svg
          class="compress"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="16.967"
          viewBox="0 0 12 16.967"
        >
          <g
            id="Group_58793"
            data-name="Group 58793"
            transform="translate(0 0)"
          >
            <rect
              class="compress"
              id="Rectangle_3786"
              data-name="Rectangle 3786"
              width="12"
              height="2"
              transform="translate(0 7.333)"
              fill="#27251f"
            />
            <path
              class="compress"
              id="Path_80849"
              data-name="Path 80849"
              d="M6.3,0V3.2L5.081,1.986,4,3.067,7.067,6.134l3.066-3.067L9.052,1.986,7.833,3.2V0Z"
              transform="translate(-0.933)"
              fill="#27251f"
            />
            <path
              class="compress"
              id="Path_80850"
              data-name="Path 80850"
              d="M4,15.067l1.081,1.08L6.3,14.936v3.2H7.833v-3.2l1.22,1.211,1.08-1.08L7.067,12Z"
              transform="translate(-0.933 -1.166)"
              fill="#27251f"
            />
          </g>
        </svg>
        <span class="ms-2">${label.left}</span>
      </label>
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradioTable"
        autocomplete="off"
        ?disabled=${disabled}
      />
      <label class="btn d-flex align-items-center" for="btnradioTable">
        <i class="material-icons">expand</i>
        <span class="ms-2">${label.right}</span>
      </label>
    </div>
  `;
};
