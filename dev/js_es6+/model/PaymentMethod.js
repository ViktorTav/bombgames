export class PaymentMethod {
    #name;
    #image;
    #url;
    #id;

    static id = 0;

    constructor(name, image, url) {
        this.#id = PaymentMethod.id++;
        this.#name = name;
        this.#image = image;
        this.#url = url;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get image() {
        return this.#image;
    }

    get url() {
        return this.#url;
    }

    set name(name) {
        this.#name = name;
    }

    set image(image) {
        this.#image = image;
    }

    set url(url) {
        this.#url = url;
    }
}
