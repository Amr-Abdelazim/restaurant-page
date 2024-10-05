import { html, render } from "lit-html";
export function render_about_page() {
    const div = document.querySelector('.page-container');
    const content = html`
        <div class="about-section">
            <h2 class="about-title">About Us</h2>
            <p class="about-description">At [Restaurant Name], we pride ourselves on offering a unique dining experience with a focus on quality ingredients and exceptional service. Our chefs craft each dish with passion, using fresh, locally sourced ingredients to create flavors that will delight your taste buds.</p>
        </div>
    `;
    render(content, div);
}
