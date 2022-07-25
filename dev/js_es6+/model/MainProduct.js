import { Product } from "./Product.js";

export class MainProduct extends Product {
    #description;

    constructor(
        id,
        name,
        price,
        image,
        description,
        available,
        features = [],
        paymentMethods = []
    ) {
        super(id, name, price, image, available, features, paymentMethods);
        this.#description = description;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description;
    }
}
