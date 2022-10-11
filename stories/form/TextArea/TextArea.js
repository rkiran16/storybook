import { html } from "lit-html";

export const TextArea = () => {
   return html`
   <div class="form-group">
      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Text area example" rows="3"></textarea>
      <label for="floatingInput">Label</label>
   </div>
   `;
}