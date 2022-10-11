import { html } from "lit-html";

export const CalendarButton = ({checked, disabled, isCurrentDay}) => {
   const todayHtml = isCurrentDay ? html`<span class="material-icons today-indicator text-primary">fiber_manual_record</span>` : '' ;
   const currentDayClass = isCurrentDay ? 'current-day': '';
   const calendarClass =  `calendar-btn-wrapper ${currentDayClass}`;

   return html`
    <div class=${calendarClass}>
      ${todayHtml}
      <input type="checkbox" class="btn-check" id="btn-check" ?disabled=${disabled} ?checked=${checked}  autocomplete="off">
      <label class="btn" for="btn-check">
        <div class="d-flex flex-column justify-content-evenly">
          <span class="material-icons icon">done</span>
          <span class="day">Sat</span>
          <span class="date">5</span>
        </div>
      </label>
     </div>
   `;
}