import { PixWindow } from "../model/PixWindow.js";
import { PixWindowView } from "../views/PixWindow.js";

export class PixWindowController {
    #pixWindow;
    #pixWindowView;
    #handleClose;
    #active;

    constructor(
        product = {},
        pixPaymentMethod = {},
        handleCloseEvent = async () => {}
    ) {
        this.#pixWindow = new PixWindow(product, pixPaymentMethod);
        this.#pixWindowView = new PixWindowView("body");
        this.#handleClose = handleCloseEvent;
        this.#active = false;
    }

    get active() {
        return this.#active;
    }

    get pixWindow() {
        return this.#pixWindow;
    }

    get windowId() {
        return this.#pixWindow.id;
    }

    set pixWindow(pixWindow) {
        this.#pixWindow = pixWindow;
    }

    async create(windowManagerHandleCloseEvent, id, zIndex) {
        this.#pixWindow.id = id;

        this.#pixWindowView.zIndex = zIndex;
        this.#pixWindowView.handleClose = windowManagerHandleCloseEvent;

        this.#pixWindowView.update(this.#pixWindow);

        this.#active = true;
    }

    async remove() {
        await this.#pixWindowView.remove();
        await this.#handleClose();

        this.#active = false;
    }
}
