import { WindowView } from "./Window.js";

export class BuyWindowView extends WindowView {
    #handlePaymentMethodClick;
    #handleBuyWindowBuyButtonClick;

    constructor(DOMElementSelector) {
        super(DOMElementSelector);
        this.#handlePaymentMethodClick = null;
        this.#handleBuyWindowBuyButtonClick = null;
    }

    set handlePaymentMethodClick(handlePaymentMethodClick) {
        this.#handlePaymentMethodClick = handlePaymentMethodClick;
    }

    set handleBuyWindowBuyButtonClick(handleBuyWindowBuyButtonClick) {
        this.#handleBuyWindowBuyButtonClick = handleBuyWindowBuyButtonClick;
    }

    #template(model) {
        return `
            <div id = "buy-window-header"> 
                <button id = "buy-window-close-button"><i class="fas fa-times"></i></button>

                <img src = "${
                    model.product.image
                }" id = "buy-window-product-image"/>

                <a class = "terms-and-conditions">
                    Termos de compra
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>

            <div id = "buy-window-content">

                <h1 id = "buy-window-product-name">${model.product.name}</h1>

                <span id = "buy-window-product-amount">Quantidade: <strong>1</strong></span>

                <span id = "buy-window-product-value"> 
                    Valor:<strong>${model.product.price}</strong>
                </span>

                <ul id = "buy-window-product-payment-methods">
                    ${model.product.paymentMethods
                        .map(
                            (paymentMethod) => `
                            <li class = "buy-window-product-payment-method ${
                                paymentMethod.name ==
                                model.selectedPaymentMethod.name
                                    ? "active"
                                    : ""
                            }" data-id = ${paymentMethod.id}>
                                ${paymentMethod.name}
                                ${
                                    paymentMethod.discount
                                        ? `(${paymentMethod.discount}% de desconto)`
                                        : ""
                                }
                            </li>
                        `
                        )
                        .join("")}
                </ul>

                <a href = ${model.selectedPaymentMethod.url} 
                   id = "buy-window-buy-button"
                >
                    Prosseguir para ${model.selectedPaymentMethod.name}
                </a>

            </div>
        `;
    }

    async update(model) {
        if (!this.model) {
            this.DOMElement.insertAdjacentHTML(
                "beforeend",
                `<div id = "buy-window" data-windowid = ${model.id}>`
            );

            this.DOMWindowSelector = `div#buy-window[data-windowid='${model.id}']`;
            this.DOMWindow = document.querySelector(this.DOMWindowSelector);

            this.DOMWindow.style.zIndex = this.zIndex;
        }

        this.DOMWindow.innerHTML = this.#template(model);

        document
            .querySelector(`${this.DOMElementSelector} a#buy-window-buy-button`)
            .addEventListener("click", (e) => {
                this.#handleBuyWindowBuyButtonEvent(e);
            });

        document
            .querySelector(
                `${this.DOMWindowSelector} button#buy-window-close-button`
            )
            .addEventListener("click", (e) => this.#handleCloseButtonClick(e));

        document
            .querySelectorAll(
                `${this.DOMWindowSelector} li.buy-window-product-payment-method`
            )
            .forEach((element) => {
                element.addEventListener("click", (e) =>
                    this.#handlePaymentMethodClickEvent(e)
                );
            });

        if (!this.model) this.show();

        this.model = model;
    }

    #handleCloseButtonClick(e) {
        const path = e.path || (e.composedPath && e.composedPath());

        this.handleClose(path[3].dataset.windowid);
    }

    #handlePaymentMethodClickEvent(e) {
        this.#handlePaymentMethodClick(parseInt(e.target.dataset.id));
    }

    #handleBuyWindowBuyButtonEvent(e) {
        this.#handleBuyWindowBuyButtonClick(e);
    }
}
