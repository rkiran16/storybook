import { html } from 'lit-html';
import { Modal } from "./Modal";
import { DeleteModal } from "./Delete_Modal";
import { SplashModal } from "./Splash_Modal";
import { SettingsModal } from "./Settings_Modal";
import docs from "./Modal.mdx";

export default {
	title: "Components/Modal",
	parameters: {
		docs: {
			page: docs
		}
	},
  argTypes: {
     size: {
			name: "Size",
      defaultValue: 'small',
      control: { type: 'select' },
      description: "Select Size",
      table: {
         type: { summary: 'select' },
         defaultValue: { summary: 'small' },
      },
      options: ['small', 'medium', 'large', 'xlarge'],
			mapping: {
				small: 'modal-sm',
				medium: 'modal-md',
				large: 'modal-lg',
				xlarge: 'modal-xl'
		 	}
		}
  }
};

const DemoTemplate = (args) => {
	 return html`
	 	<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
			 Launch Modal
 		</button>
		${Modal(args)}
	 `
}

const DeleteModalTemplate = (args) => html`
			<button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteModal">
					Launch Delete Modal
			</button> 
			${DeleteModal(args)}
`;

const SplashModalTemplate = args => html `
		<button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#splashModal">
				Launch Splash Modal
		</button> 
		${SplashModal(args)}
`

const SettingsModalTemplate = args => html`
			<button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#settingsModal1">
				Launch Settings Modal
			</button> 
			${SettingsModal(args)}
`

export const Standard = DemoTemplate.bind({});
Standard.args = {}

export const Delete_Modal = DeleteModalTemplate.bind({});
Delete_Modal.args = {}

export const Splash_Modal = SplashModalTemplate.bind({});
Splash_Modal.args = {}

export const Settings_Modal = SettingsModalTemplate.bind({});
Settings_Modal.args = {}