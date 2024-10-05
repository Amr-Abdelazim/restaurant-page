import "../static/style.css";
import { render_menu_page } from "./menu";
import { render_home_pagehome } from "./home";
import { render_about_page } from "./about";
const menu_btn = document.querySelector(".menu-btn");
const home_btn = document.querySelector(".home-btn");
const about_btn = document.querySelector(".about-btn");
menu_btn.addEventListener("click", () => {
  render_menu_page();
});
home_btn.addEventListener("click", () => {
  render_home_pagehome();
});

about_btn.addEventListener("click", () => {
  render_about_page();
});
render_home_pagehome();
