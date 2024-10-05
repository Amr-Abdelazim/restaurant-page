import { html, render } from "lit-html";
import { get_menu } from "./database";
export function render_menu_page() {
  const div_content = document.querySelector(".page-container");
  div_content.setAttribute("style", "display:block;");
  render(html``, div_content);

  const data = get_menu();
  let my_menu = {};
  for (let i in data) {
    console.log(i);
    const category = data[i].category;
    if (!(category in my_menu)) {
      my_menu[category] = [];
    }
    my_menu[category].push(data[i]);
  }
  for (let i in my_menu) {

    add_category(my_menu[i]);
  }

  /* const div_content = document.querySelector(".page-container");
  const template = html`

    <div class="category-container">
      <h1 class="category-title">Pizza</h1>
      <div class="dish-container">
        <div class="menu-item">
          <div>
            <span class="item-name">Margherita Pizza</span>
             <h5 class="dish-description">Classic margherita pizza with fresh tomatoes, mozzarella, and basil.</h5>
           
          </div>
           <span class="item-price">7.93$</span>
         
        </div>
        
      </div>
    </div>
  
  `;
  render(template, div_content); */
}

function add_category(data) {
  const div_content = document.querySelector(".page-container");
  const div_category = document.createElement("div");
  div_category.className = "category-container";
  const h1 = document.createElement("h1");
  h1.className = "category-title";
  h1.textContent = data[0].category;
  div_category.appendChild(h1);
  for (let i in data) {
    div_category.appendChild(create_item(data[i]));
  }
  div_content.appendChild(div_category);
}
function create_item(item) {
  const div = document.createElement("div");
  div.className = "dish-container";

  const template = html`
        <div class="menu-item">
          <div>
            <span class="item-name">${item.name}</span>
             <h5 class="dish-description">${item.description}</h5>
           
          </div>
           <span class="item-price">${item.price}$</span>
         
        </div>
  
  `;
  render(template, div);
  return div;
}
