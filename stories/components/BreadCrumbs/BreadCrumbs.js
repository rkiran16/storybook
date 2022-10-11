import { html } from "lit-html";

export const BreadCrumbs = ({overflow, disabled}) => {
   const data = [1,2,3];
   const disabledClass = disabled ? "disabled": "";
   const defaultHtml = () => html`
      <li class=${["breadcrumb-item", disabledClass].join(" ")}><a href='#'>Breadcrumb 1</a></li>
      <li class=${["breadcrumb-item", disabledClass].join(" ")}><a href='#'>Breadcrumb 2</a></li>
      <li class=${["breadcrumb-item", disabledClass, "active"].join(" ")}>Breadcrumb 3</li>
    `;

   const overflowHtml = () => html`
      <li class="breadcrumb-item d-flex">
        <div class="dropdown">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            ...
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Breadcrumb 1</a>
            <a class="dropdown-item" href="#">Breadcrumb 2</a>
            <a class="dropdown-item" href="#">Breadcrumb 3</a>
          </div>
        </div>
      </li>
      <li class="breadcrumb-item"><a href="#">Breadcrumb 4</a></li>
      <li class="breadcrumb-item active" aria-current="page">Breadcrumb 5</li>
   `;

   return html `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        ${overflow ? overflowHtml() : defaultHtml()}
      </ol>
   </nav>
   `;
}