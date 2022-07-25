export class View {
    #DOMElementSelector;
    #DOMElement;

    constructor(DOMElementSelector) {
        if (this.constructor == View) {
            throw new TypeError("View is an abstract class");
        }

        this.#DOMElementSelector = DOMElementSelector;
        this.#DOMElement = document.querySelector(DOMElementSelector);
    }

    get DOMElementSelector() {
        return this.#DOMElementSelector;
    }

    get DOMElement() {
        return this.#DOMElement;
    }

    set DOMElementSelector(DOMElementSelector) {
        this.#DOMElementSelector = DOMElementSelector;
    }

    set DOMElement(DOMElement) {
        this.#DOMElement = DOMElement;
    }

    _template() {
        throw new Error("[View] The method template must be implemented!");
    }

    update(model) {
        this.DOMElement.innerHTML = this._template(model);
    }
}
