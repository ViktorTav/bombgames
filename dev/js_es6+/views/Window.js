import { View } from "./View.js";
import { fadeIn, fadeOut } from "../animations/fade.js";

export class WindowView extends View {
    #model;
    #DOMWindowSelector;
    #DOMWindow;
    #zIndex;
    #handleClose;

    constructor(DOMElementSelector, DOMWindowSelector = null, zIndex = 0) {
        super(DOMElementSelector);
        this.#model = null;
        this.#DOMWindowSelector = DOMWindowSelector;
        this.#DOMWindow = document.querySelector(DOMWindowSelector);
        this.#zIndex = zIndex;
        this.#handleClose = null;
    }

    get model() {
        return this.#model;
    }

    get DOMWindowSelector() {
        return this.#DOMWindowSelector;
    }

    get DOMWindow() {
        return this.#DOMWindow;
    }

    get zIndex() {
        return this.#zIndex;
    }

    get handleClose() {
        return this.#handleClose;
    }

    set model(model) {
        this.#model = model;
    }

    set DOMWindowSelector(DOMWindowSelector) {
        this.#DOMWindowSelector = DOMWindowSelector;
    }

    set DOMWindow(DOMWindow) {
        this.#DOMWindow = DOMWindow;
    }

    set handleClose(handleClose) {
        this.#handleClose = handleClose;
    }

    set zIndex(zIndex) {
        this.#zIndex = zIndex;
    }

    async remove() {
        await fadeOut(this.#DOMWindow, 200);
        this.#DOMWindow.remove();
        this.#model = null;
    }

    async show() {
        await fadeIn(this.#DOMWindow, 200);
    }
}
