import { BuyWindow } from "../model/BuyWindow.js";
import { Pix } from "../model/Pix.js";
import { PixWindow } from "../model/PixWindow.js";
import { BuyWindowView } from "../views/BuyWindow.js";
import { WindowManager } from "../WindowManager.js";
import { PixWindowController } from "./PixWindow.js";

export class BuyWindowController {
    #buyWindow;
    #buyWindowView;
    #pixWindowController;
    #handleCloseEvent;

    constructor(product, handleCloseEvent = () => {}) {
        this.#buyWindow = new BuyWindow(product);
        this.#buyWindowView = new BuyWindowView("main");
        this.#pixWindowController = new PixWindowController();
        this.#handleCloseEvent = handleCloseEvent;
    }

    get windowId() {
        return this.#buyWindow.id;
    }

    create(windowManagerHandleCloseEvent, id, zIndex) {
        this.#buyWindow.id = id;
        this.#buyWindowView.zIndex = zIndex;
        this.#buyWindowView.handleClose = windowManagerHandleCloseEvent;
        this.#buyWindowView.handlePaymentMethodClick =
            this.#handlePaymentMethodClick.bind(this);

        this.#buyWindowView.handleBuyWindowBuyButtonClick =
            this.#handleBuyWindowBuyButtonClick.bind(this);

        this.#buyWindowView.update(this.#buyWindow);
    }

    async remove() {
        await this.#buyWindowView.remove();
        this.#handleCloseEvent();
    }

    #handlePaymentMethodClick(paymentMethodId) {
        const paymentMethod = this.#buyWindow.product.paymentMethods.find(
            (pm) => pm.id == paymentMethodId
        );

        this.#buyWindow.selectedPaymentMethod = paymentMethod;

        this.#buyWindowView.update(this.#buyWindow);
    }

    #handleBuyWindowBuyButtonClick(e) {
        const currentPaymentMethod = this.#buyWindow.selectedPaymentMethod;

        if (
            currentPaymentMethod.name.toLowerCase() != "pix" ||
            this.#pixWindowController.active ||
            !(currentPaymentMethod instanceof Pix)
        ) {
            return;
        }

        e.preventDefault();

        this.#pixWindowController.pixWindow.product = this.#buyWindow.product;
        this.#pixWindowController.pixWindow.pix = currentPaymentMethod;

        WindowManager.add(this.#pixWindowController);
    }
}
