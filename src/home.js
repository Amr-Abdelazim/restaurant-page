import home_background from "../assets/home_background.webp";
import { html, render } from "lit-html";
import { render_menu_page } from "./menu";
export function render_home_pagehome() {
  const div_content = document.querySelector(".page-container");
  div_content.setAttribute("style", "display:flex;");
  const template = html`
    
    <div class="text-container">
      <P>This is the best restaurant ever!</P>
      <button>Menu</button>
  </div>
    <div class="img-container"><img src="${home_background}" /></div>
    
  `;
  render(template, div_content);
  const btn = document.querySelector(".text-container button");
  btn.addEventListener("click", () => {
    render_menu_page();
  });
}
