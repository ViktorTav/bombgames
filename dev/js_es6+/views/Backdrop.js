import { View } from "./View.js";

export class BackdropView extends View {
    #active;
    #DOMBackdropDivSelector;
    #DOMBackdropDiv;
    #handleClickEvent;

    constructor(DOMElementSelector, handleClickEvent) {
        super(DOMElementSelector);

        this.#active = null;
        this.#DOMBackdropDivSelector = `${DOMElementSelector} div#backdrop`;
        this.#DOMBackdropDiv = null;
        this.#handleClickEvent = handleClickEvent;
    }

    get active() {
        return this.#active;
    }

    #template() {
        return `
            <div id = "backdrop"></div>
        `;
    }

    update(state) {
        if (this.#active == null) {
            this.DOMElement.insertAdjacentHTML("beforeend", this.#template());

            this.#DOMBackdropDiv = document.querySelector(
                this.#DOMBackdropDivSelector
            );

            this.#DOMBackdropDiv.addEventListener(
                "click",
                async (e) => await this.#handleClick(e)
            );
        }

        state
            ? this.#DOMBackdropDiv.classList.add("active")
            : this.#DOMBackdropDiv.classList.remove("active");

        this.#active = state;
    }

    async #handleClick(e) {
        await this.#handleClickEvent(e);
    }
}
