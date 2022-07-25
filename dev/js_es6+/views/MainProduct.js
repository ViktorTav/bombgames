import { View } from "./View.js";

export class MainProductView extends View {
    #handleBuy;

    constructor(DOMELementSelector) {
        super(DOMELementSelector);
        this.#handleBuy = null;
    }

    set handleBuy(handleBuy) {
        this.#handleBuy = handleBuy;
    }

    _template(model) {
        return `
            <div id = "main-product-card-info">

                <div id = "best-seller-ribbon">
                    <span>Mais vendido!</span>
                </div>

                <div id = "main-product-card-name-container">
                    <h1 id = "main-product-card-name">${model.name}</h1> 
                    <span id = "best-seller-badge">Novo!</span>
                </div>

                <p id = "main-product-card-description">${model.description}</p>

                <ul id = "main-product-card-features">
                    ${model.features
                        .map(
                            (feature) => `
                            <li class = "main-product-card-feature">
                                ${this.#templateIcon(feature.icon)}
                                <span class = "main-product-card-feature-text">${
                                    feature.text
                                }</span>
                            </li>
                        `
                        )
                        .join("")}
                </ul>

                <div id = "main-product-card-info-footer">
                    <button 
                        id = "main-product-card-buy" class = "${
                            !model.available ? "not-available" : ""
                        }">
                        ${model.available ? "Comprar" : "Indisponível"}
                    </button>

                    <h2 id = "main-product-card-old-price">R$${
                        model.price * 2
                    }</h2>

                    <h2 id = "main-product-card-price">R$${
                        model.price
                    }</h2>        
                </div>

            </div>
            <div id = "main-product-card-image">
                <img alt = "Imagem de ${model.name}" src = "${model.image}"/>
            </div>
        `;
    }

    #templateIcon({ type, content }) {
        const types = {
            image: (content) =>
                `<img  alt = "Ícone de uma característica do produto principal" src = "${content}" class = "product-card-feature-icon"/>`,
            text: (content) =>
                `<p class = "product-card-feature-icon">${content}</p>`,
        };

        return types[type](content) || "";
    }

    update(model) {
        this.DOMElement.innerHTML = this._template(model);

        document
            .querySelector("button#main-product-card-buy")
            .addEventListener("click", (e) => this.#handleBuyButtonClick(e));
    }

    #handleBuyButtonClick() {
        this.#handleBuy();
    }
}
