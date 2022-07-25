import { ProductFeature } from "../model/ProductFeature.js";
import { ProductFeatureIcon } from "../model/ProductFeatureIcon.js";
import { MainProduct } from "../model/MainProduct.js";
import { PaymentMethod } from "../model/PaymentMethod.js";
import { Product } from "../model/Product.js";
import { getJson } from "../util/getJson.js";
import { MainProductView } from "../views/MainProduct.js";
import { ProductView } from "../views/Product.js";
import { BuyWindowController } from "./BuyWindow.js";
import { WindowManager } from "../WindowManager.js";
import { Pix } from "../model/Pix.js";

export class ProductController {
    #fileUrl;
    #productCardList;
    #mainProduct;
    #productView;
    #mainProductView;
    #buyWindowController;

    constructor(DOMProductCardUlSelector, DOMMainProductDivSelector, fileUrl) {
        this.#fileUrl = fileUrl;

        this.#productCardList = [];
        this.#mainProduct = {};

        this.#productView = new ProductView(DOMProductCardUlSelector);
        this.#mainProductView = new MainProductView(DOMMainProductDivSelector);

        this.#buyWindowController = null;
    }

    async loadProducts() {
        const products = await getJson(this.#fileUrl).catch((err) => {
            console.error(
                `[ProductController] Failed to load products. ${err}`
            );
        });

        products.forEach((product, i) => {
            let newProduct;

            if (product["principal"]) {
                newProduct = new MainProduct(
                    i,
                    product["nome"],
                    product["preço"],
                    product["imagem"],
                    product["descrição"],
                    product["disponivel"]
                );

                this.#mainProduct = newProduct;
            } else {
                newProduct = new Product(
                    i,
                    product["nome"],
                    product["preço"],
                    product["imagem"],
                    product["disponivel"]
                );
            }

            newProduct.features = product["características"].map(
                (feature) =>
                    new ProductFeature(
                        new ProductFeatureIcon(
                            ProductFeatureIcon.convertType(
                                feature["ícone"]["tipo"]
                            ),
                            feature["ícone"]["conteúdo"]
                        ),
                        feature["texto"]
                    )
            );

            newProduct.paymentMethods = product["métodos-de-pagamento"].map(
                (paymentMethod) => {
                    if (
                        paymentMethod["nome"].toLowerCase() == "pix" &&
                        paymentMethod["qrCodeImagem"] &&
                        paymentMethod["copiaEColaCodigo"]
                    ) {
                        return new Pix(
                            paymentMethod["nome"],
                            paymentMethod["imagem"],
                            paymentMethod["qrCodeImagem"],
                            paymentMethod["copiaEColaCodigo"],
                            paymentMethod["desconto"]
                        );
                    }

                    return new PaymentMethod(
                        paymentMethod["nome"],
                        paymentMethod["imagem"],
                        paymentMethod["url"]
                    );
                }
            );

            if (!product["principal"]) this.#productCardList.push(newProduct);
        });

        this.#productView.handleBuy =
            this.#handleProductCardBuyButtonClick.bind(this);
        this.#productView.update(this.#productCardList);

        this.#mainProductView.handleBuy =
            this.#handleMainProductBuyButtonClick.bind(this);
        this.#mainProductView.update(this.#mainProduct);
    }

    #handleProductCardBuyButtonClick(productId) {
        if (this.#buyWindowController) return;

        const product = this.#productCardList.find((p) => p.id == productId);

        if (!product.available) return;

        this.#buyWindowController = new BuyWindowController(
            product,
            this.#handleWindowClose.bind(this)
        );

        WindowManager.add(this.#buyWindowController);
    }

    #handleMainProductBuyButtonClick() {
        if (this.#buyWindowController) return;

        if (!this.#mainProduct.available) return;

        this.#buyWindowController = new BuyWindowController(
            this.#mainProduct,
            this.#handleWindowClose.bind(this)
        );

        WindowManager.add(
            this.#buyWindowController,
            this.#handleWindowClose.bind(this)
        );
    }

    #handleWindowClose() {
        this.#buyWindowController = null;
    }
}
