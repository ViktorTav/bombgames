import { WindowView } from "./Window.js";

export class PixWindowView extends WindowView {
    _template(model) {
        return `
            <div id = "pix-window-header">
                <h1>Pague via pix</h1>
                <button id = "pix-window-close-button">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div id = "pix-window-content">
                <div id = "pix-window-qrcode">
                    <span id = "pix-window-scan-qrcode">
                        <i class="fas fa-camera"></i> 
                        Escaneie o QR Code abaixo   
                    </span>

                    <div id = "pix-window-product-qrcode">
                        <img src = "${model.pix.qrCodeImage}">
                    </div>

                    <div id = "pix-window-copy-code">
                        <span><i class="far fa-copy"></i>Ou copie o Código Pix</span>
                        <button>Clique para copiar</button> 
                    </div>
                </div>

                <div id = "pix-window-product-info">
                    <div id = "pix-window-product-header">
                        <span id = "pix-window-product-name">${
                            model.product.name
                        }</span>
                    </div>
                    <span id = "pix-window-product-amount">Quantidade: <strong>1</strong></span>
                    <span id = "pix-window-product-value">Valor: 
                        <strong>${(
                            model.product.price -
                            (model.product.price / 100) * model.pix.discount
                        ).toFixed(2)}
                        </strong>
                    </span>
                </div>
                <div id = "pix-window-email-container">
                    <label id = "pix-email" for = "pixEmail">E-mail p/ entrega:</label>
                    <input type = "email" name = "pixEmail" id = "pix-email" placeholder="Meu e-mail"/>
                </div>

                <p id = "pix-window-warning">
                    <i class="far fa-question-circle"></i>
                    Não esqueça de colocar seu e-mail na descrição da transferência.
                </p>
                            
                <div id = "pix-window-payment">

                    <span 
                    data-message = "Se você esqueceu de por o e-mail na descrição do PIX entre em contato com o suporte." 
                    id = "pix-window-questions">
                        Dúvidas?
                    </span>

                    <button id = "pix-window-payment-confirmation">
                        Já efetuei o pagamento
                        <i class="fas fa-circle-notch fa-spin"></i>
                    </button>

                </div>
            </div>
        `;
    }

    update(model) {
        if (!this.model) {
            this.DOMElement.insertAdjacentHTML(
                "beforeend",
                `<div id = "pix-window" data-windowid=${model.id}></div>`
            );

            this.DOMWindowSelector = "div#pix-window";
            this.DOMWindow = document.querySelector(this.DOMWindowSelector);

            this.DOMWindow.style.zIndex = this.zIndex;
        }

        this.DOMWindow.innerHTML = this._template(model);

        document
            .querySelector("div#pix-window-copy-code > button")
            .addEventListener("click", (e) => {
                this.#handleCopyCodeButtonClick(e);
            });

        document
            .querySelector("button#pix-window-payment-confirmation")
            .addEventListener("click", (e) => {
                this.#handlePaymentConfirmationButtonClick(e);
            });

        document
            .querySelector(
                `${this.DOMWindowSelector} button#pix-window-close-button`
            )
            .addEventListener("click", (e) => {
                this.#handleCloseEvent(e);
            });

        if (!this.model) {
            this.show();
        }

        this.model = model;
    }

    #handleCloseEvent(e) {
        const path = e.path || (e.composedPath && e.composedPath());

        this.handleClose(path[3].dataset.windowid);
    }

    #handlePaymentConfirmationButtonClick(e) {
        document
            .querySelector("button#pix-window-payment-confirmation")
            .classList.add("confirmed");

        document.querySelector(
            "button#pix-window-payment-confirmation"
        ).innerText = "Você confirmou o pagamento";
    }

    async #handleCopyCodeButtonClick(e) {
        try {
            await navigator.clipboard.writeText(
                this.model.pix.copyAndPasteCode
            );
            e.target.innerText = "Copiado!";
        } catch (err) {
            console.error(
                `[PixWindow] Erro ao copiar texto para área de transferência. ${err}`
            );
        }
    }
}
