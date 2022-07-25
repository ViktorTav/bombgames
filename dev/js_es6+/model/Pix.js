import { PaymentMethod } from "./PaymentMethod.js";

export class Pix extends PaymentMethod {
    #qrCodeImage;
    #copyAndPasteCode;
    #discount;

    constructor(name, image, qrCodeImage, copyAndPasteCode, discount = 0) {
        super(name, image, null);

        this.#qrCodeImage = qrCodeImage;
        this.#copyAndPasteCode = copyAndPasteCode;
        this.#discount = discount;
    }

    get qrCodeImage() {
        return this.#qrCodeImage;
    }

    get copyAndPasteCode() {
        return this.#copyAndPasteCode;
    }

    get discount() {
        return this.#discount;
    }

    set qrCodeImage(qrCodeImage) {
        this.#qrCodeImage = qrCodeImage;
    }

    set copyAndPasteCode(copyAndPasteCode) {
        this.#copyAndPasteCode = copyAndPasteCode;
    }

    set discount(discount) {
        this.#discount = discount;
    }
}
