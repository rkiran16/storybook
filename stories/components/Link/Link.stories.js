import { Link } from "./Link";
import docs from "./Link.mdx";
import { html} from "lit-html";


export default {
   title: "Components/Link",
   parameters: {
      zeplinLink: "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/6298e3fb7bdcdea0c623a096",
      docs: {
         page: docs
      }
   },
   argTypes: {
      label: {
        name: 'label',
        type: { name: 'string', required: true },
        defaultValue: 'Link action',
        description: 'configure label for link',
        control: {
          type: 'text'
        }
      },
      href: {
         name: "href",
         type: { name: 'string', required: true },
         defaultValue: 'http://www.cardinalhealth.com',
         description: "Provide the href attribute for the <a> node",
         table: {
            type: { summary: 'string' }
          },
         control: {
            type: "text"
         }
      },
      target: {
         name: "target",
         control: { type: 'select' },
         description: "Define where to display the linked URL",
         options: ['_blank', '_self', '_parent', '_top'],
         defaultValue: "_self",
         table: {
            type: {  summary: "string & HTMLAttributeAnchorTarget"},
            defaultValue: { summary: '_self' },
         }
      },
      showIcon: {
         type: { name: 'boolean', required: false},
         description: "Show Icon",
         defaultValue: false,
         table: {
           type: { summary: 'boolean' },
           defaultValue: { summary: false },
         },
         control: {
           type: 'boolean'
         }
      }
   }
}

const Template = args => html`${Link(args)}`;

const coloredTemplate = args => {
   return html`
      <div class="d-flex">
            <a href="#" class="link-primary me-3">Primary link</a>
            <a href="#" class="link-secondary me-3">Secondary link</a>
            <a href="#" class="link-success me-3">Success link</a>
            <a href="#" class="link-danger me-3">Danger link</a>
            <a href="#" class="link-warning me-3">Warning link</a>
            <a href="#" class="link-info me-3">Info link</a>
            <a href="#" class="link-dark me-3">Dark link</a>
      </div>
   `
}

export const standalone = Template.bind({});

export const standaloneWithIcon = Template.bind({});
standaloneWithIcon.args = {
    showIcon: true
}

export const inline = Template.bind({});
inline.args = {
   inline: true
}

export const colored_links = coloredTemplate.bind({});
