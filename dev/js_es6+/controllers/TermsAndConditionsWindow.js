import { TermsAndConditionsWindowView } from "../views/TermsAndConditionsWindow.js";

export class TermsAndConditionsWindowController {
    #active;
    #windowId;
    #termsAndConditionsWindowView;
    #handleCloseEvent;

    constructor(fileUrl, handleCloseEvent = () => {}) {
        this.#active = false;
        this.#windowId = null;
        this.#termsAndConditionsWindowView = new TermsAndConditionsWindowView(
            "body",
            fileUrl
        );
        this.#handleCloseEvent = handleCloseEvent;
    }

    create(windowManagerHandleCloseEvent, windowId, zIndex) {
        if (this.#active) return;

        this.#windowId = windowId;

        this.#termsAndConditionsWindowView.handleClose =
            windowManagerHandleCloseEvent;

        this.#termsAndConditionsWindowView.zIndex = zIndex;
        this.#termsAndConditionsWindowView.update(windowId);
    }

    get windowId() {
        return this.#windowId;
    }

    async remove() {
        await this.#termsAndConditionsWindowView.remove();
        this.#handleCloseEvent();

        this.#active = false;
    }
}
