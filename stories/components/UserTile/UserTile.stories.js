import { html } from "lit-html";
import { UserTile } from "./UserTile";
import { UserImage as UserImageComponent } from "./components/UserImage";

export default {
  title: "Components/Tiles/UserTile",
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/63091eee1c1d92114d82603c",
  },
  argTypes: {
    hideViewMore: {
      name: "hideViewMore",
      type: { name: 'boolean', required: false},
      description: "Hide View More section",
      defaultValue: false,
      table: {
         type: { summary: 'boolean' },
         defaultValue: { summary: false },
      },
      control: { type: 'boolean'}
    },
    hideCheckBox: {
      name: "hideCheckBox",
      type: { name: 'boolean', required: false},
      description: "Hide CheckBox",
      defaultValue: false,
      table: {
         type: { summary: 'boolean' },
         defaultValue: { summary: false },
      },
      control: { type: 'boolean'}
    },
    hasUserImg: {
      name: "hasUserImg",
      type: { name: 'boolean', required: false},
      description: "Hide User Image",
      defaultValue: true,
      table: {
         type: { summary: 'boolean' },
         defaultValue: { summary: true },
      },
      control: { type: 'boolean'}
    }
  }
}

const UserImageTemplate = () => {
   return html`
     <div class="d-flex">
      <div class="me-2">${UserImageComponent("bg-primary", true)}</div> 
      <div class="me-2">${UserImageComponent("bg-primary", false)}</div> 
      <div class="me-2">${UserImageComponent("bg-secondary", false)}</div> 
      <div class="me-2">${UserImageComponent("bg-success", false)}</div> 
      <div class="me-2">${UserImageComponent("bg-warning", false)}</div> 
      <div class="me-2">${UserImageComponent("bg-info", false)}</div> 
      <div class="me-2">${UserImageComponent("bg-danger", false)}</div> 
      <div class="me-2">${UserImageComponent("bg-dark", false)}</div>
     </div> 
   `
};
const UserTileTemplate = (args) => UserTile(args);

export const Standard = UserTileTemplate.bind({});
Standard.args = {}

export const UserImage = UserImageTemplate.bind({});

export const Hide_CheckBox = UserTileTemplate.bind({});
Hide_CheckBox.args = {
  hideCheckBox: true
}

export const Hide_ViewMore = UserTileTemplate.bind({});
Hide_ViewMore.args = {
  hideViewMore: true
}

export const No_Avatar = UserTileTemplate.bind({});
No_Avatar.args = {
  hasUserImg: false,
  hideViewMore: true
}