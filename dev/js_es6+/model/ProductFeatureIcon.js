export class ProductFeatureIcon {
    #type;
    #content;

    constructor(type, content) {
        this.#type = type;
        this.#content = content;
    }

    get type() {
        return this.#type;
    }

    get content() {
        return this.#content;
    }

    set type(type) {
        this.#type = type;
    }

    static convertType(type) {
        const types = {
            imagem: "image",
            texto: "text",
        };

        return types[type];
    }
}
