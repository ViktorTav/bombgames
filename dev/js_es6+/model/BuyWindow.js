import { Window } from "./Window.js";

export class BuyWindow extends Window {
    #product;
    #selectedPaymentMethod;

    constructor(product) {
        super(null);
        this.#product = product;
        this.#selectedPaymentMethod = product.paymentMethods[0];
    }

    get product() {
        return this.#product;
    }

    get selectedPaymentMethod() {
        return this.#selectedPaymentMethod;
    }

    set product(product) {
        this.#product = product;
    }

    set selectedPaymentMethod(selectedPaymentMethod) {
        this.#selectedPaymentMethod = selectedPaymentMethod;
    }
}
