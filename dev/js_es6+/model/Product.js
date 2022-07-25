export class Product {
    #id;
    #name;
    #price;
    #image;
    #available;
    #features;
    #paymentMethods;

    constructor(
        id,
        name,
        price,
        image,
        available,
        features = [],
        paymentMethods = []
    ) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#image = image;
        this.#available = available;
        this.#features = features;
        this.#paymentMethods = paymentMethods;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    get image() {
        return this.#image;
    }

    get available() {
        return this.#available;
    }

    get features() {
        return this.#features;
    }

    get paymentMethods() {
        return this.#paymentMethods;
    }

    set id(id) {
        this.#id = id;
    }

    set name(name) {
        this.#name = name;
    }

    set price(price) {
        this.#price = price;
    }

    set image(image) {
        this.#image = image;
    }

    set available(available) {
        this.#available = available;
    }

    set features(features) {
        this.#features = features;
    }

    set paymentMethods(paymentMethods) {
        this.#paymentMethods = paymentMethods;
    }
}
