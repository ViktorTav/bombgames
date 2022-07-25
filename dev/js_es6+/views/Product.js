import { View } from "./View.js";

export class ProductView extends View {
    #handleBuy;

    constructor(DOMElementSelector) {
        super(DOMElementSelector);
        this.#handleBuy = null;
    }

    set handleBuy(handleBuy) {
        this.#handleBuy = handleBuy;
    }

    _template(model) {
        return model
            .map(
                (product) => `
                    <li class = "product-card" data-productId=${product.id}>
                        <img 
                            alt = "Imagem de ${product.name}" 
                            src = "${product.image}" 
                            class = "product-card-image"
                        />
                        
                        <h1 class = "product-card-name">${product.name}</h1>
                        <h2 class = "product-card-price">R$${product.price}</h2>

                        <ul class = "product-card-features">
                            ${product.features
                                .map(
                                    (feature) => `
                                    <li class = "product-card-feature">
                                        ${this.#templateIcon(feature.icon)}
                                        <span class = "product-card-feature-text">${
                                            feature.text
                                        }</span>
                                    </li>
                                `
                                )
                                .join("")}
                        </ul>

                        <button 
                            class = "product-card-buy ${
                                !product.available ? "not-available" : ""
                            }
                        ">
                            ${product.available ? "Comprar" : "Indisponível"}
                        </button>
                    </li>
                `
            )
            .join("");
    }

    #templateIcon({ type, content }) {
        const types = {
            image: (content) =>
                `<img alt = "Ícone de uma característica do produto" src = "${content}" class = "product-card-feature-icon"/>`,
            text: (content) =>
                `<p class = "product-card-feature-icon">${content}</p>`,
        };

        return types[type](content);
    }

    update(model) {
        this.DOMElement.innerHTML = this._template(model);

        document
            .querySelectorAll("button.product-card-buy")
            .forEach((element) => {
                element.addEventListener("click", (e) =>
                    this.#handleBuyButtonClick(e)
                );
            });
    }

    #handleBuyButtonClick(e) {
        /*
            No safari e firefox, o objeto 'e' passado como parâmetro pro callback do método addEventListener,
            não possui a propriedade path, porém a mesma funcionalidade que a mesma proporciona está disponível
            no método composedPath().
        */
        const path = e.path || (e.composedPath && e.composedPath());

        this.#handleBuy(path[1].dataset.productid);
    }
}
