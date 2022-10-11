import { html } from "lit-html";

export const RadioButton = ({checked, isDisabled, isGroup, label}) => {
    if (!isGroup) {
        return html`
            <div class="custom-control custom-radio">
                <input type="radio" class="form-check-input" ?checked=${checked} ?disabled=${isDisabled} id="customCheck111-33" />
                <label class="form-check-label" for="customCheck111-33">${label}</label>
            </div> 
        `;
    } else {
        return html`
            <div style="width: 300px;">
                <fieldset>
                    <legend>Group Label</legend>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="form-check-input" ?checked=${checked} ?disabled=${isDisabled} id="customCheck111-34" name="group" />
                        <label class="form-check-label" for="customCheck111-34">${label}</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="form-check-input" ?checked=${checked} ?disabled=${isDisabled} id="customCheck111-35"name="group" />
                        <label class="form-check-label" for="customCheck111-35">Check this custom radio</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="form-check-input" ?checked=${checked} ?disabled=${isDisabled} id="customCheck111-36" name="group"/>
                        <label class="form-check-label" for="customCheck111-36">This is a custom radio label that wraps to the next line</label>
                    </div>
                </fieldset>
            </div>
        `;
    }
    
}