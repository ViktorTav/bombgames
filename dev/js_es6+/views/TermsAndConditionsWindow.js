import { WindowView } from "./Window.js";
import { getJson } from "../util/getJson.js";

export class TermsAndConditionsWindowView extends WindowView {
    #termsAndConditionsUrl;
    #termsAndConditionsContent;

    constructor(
        DOMElementSelector,
        termsAndConditionsUrl,
        DOMWindowSelector = null,
        zIndex = 0
    ) {
        super(DOMElementSelector, DOMWindowSelector, zIndex);

        this.#termsAndConditionsUrl = termsAndConditionsUrl;
        this.#termsAndConditionsContent = null;
    }

    async _template(windowId) {
        if (!this.#termsAndConditionsContent) {
            this.#termsAndConditionsContent = await getJson(
                this.#termsAndConditionsUrl
            );
        }

        return `
            <div id = "terms-and-conditions-window" data-windowId=${windowId}>
                <div id = "terms-and-conditions-header">
                    <button id = "terms-and-conditions-window-close">&#10005</button>
                    <h1>Termos e condições:</h1>
                </div>
                <div id = "terms-and-conditions-window-content">
                   ${this.#termsAndConditionsContent
                       .map(
                           (term) => `<h3>${term.title}</h3><p>${term.text}</p>`
                       )
                       .join("")}
                </div>
            </div>
        `;
    }

    async update(windowId) {
        this.DOMElement.insertAdjacentHTML(
            "beforeend",
            await this._template(windowId)
        );

        this.DOMWindowSelector = "div#terms-and-conditions-window";
        this.DOMWindow = document.querySelector(this.DOMWindowSelector);

        this.DOMWindow.style.zIndex = this.zIndex;

        document
            .querySelector(
                `${this.DOMWindowSelector} button#terms-and-conditions-window-close`
            )
            .addEventListener("click", (e) => this.#handleCloseButtonClick(e));

        this.show();
    }

    #handleCloseButtonClick(e) {
        const path = e.path || (e.composedPath && e.composedPath());

        this.handleClose(path[2].dataset.windowid);
    }
}
