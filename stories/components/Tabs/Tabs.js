import { html, nothing } from "lit-html";

function onWindowLoad() {
    window.addEventListener('load', (event) => {
        const tabs = document.querySelectorAll(".nav-link");
        if (tabs) {
            tabs.forEach((ele) => {
                ele.addEventListener("click", handleClick);
            })
        }
    });
}

function handleClick(event) {
    event.target.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'smooth'
    })
}

const TabIcon = () => html`<span class="material-icons ms-3">shopping_cart</span>`;

const TabItem = (tabName, index, disabled, hasIcon, label="Label") => html`
    <li class="nav-item" role="presentation">
        <button 
            class=${`nav-link d-flex align-items-center ${index === 0 ? 'active' : '' }`} 
            id=${`Tab-${index}`} 
            type="button" 
            role="tab" 
            data-bs-toggle="tab" 
            data-bs-target=${`#Tab-${index}-pane`} 
            aria-controls=${`Tab-${index}-pane`} 
            aria-selected="true"
            ?disabled=${disabled} 
        >
            ${`${tabName} ${label} ${index+1}`}
            ${hasIcon ? TabIcon() : nothing} 
        </button>
    </li>`

const TabContent = (tabName, index) => html`
    <div 
        class=${`tab-pane py-2 ps-4 fade show ${index === 0 ? 'active' : '' }`} 
        id=${`Tab-${index}-pane`} 
        role="tabpanel" 
        aria-labelledby=${`Tab-${index}`}
    >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
`

export const Tabs = ({disabled = false, tabCount = 4, alignment, hasIcon = false, whiteActiveTab = false}) => {
    const whiteBackgroundClass = whiteActiveTab ? 'white-active-tab' : '';
    return html`
        <script>${onWindowLoad()}</script>
        <ul class=${`nav nav-tabs p-2 ${alignment} ${whiteBackgroundClass}`} id="myTab" role="tablist">
            ${Array(tabCount).fill("Tab").map((ele, index) => TabItem(ele, index, disabled, hasIcon))}
        </ul>
        <div class="tab-content" id="myTabContent">
            ${Array(tabCount).fill("Tab").map((ele, index) => TabContent(ele, index))}
        </div>
    `;
}