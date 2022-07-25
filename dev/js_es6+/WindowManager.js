import { BackdropView } from "./views/Backdrop.js";

export class WindowManager {
    static #windowControllerList = [];
    static #currentZIndex = 800;
    static #currentId = 0;
    static #backdropView = new BackdropView("body", this.removeAll.bind(this));
    static #backdropActive = false;

    static add(windowController) {
        windowController.create(
            this.remove.bind(this),
            this.#currentId,
            this.#currentZIndex
        );

        this.#windowControllerList.push(windowController);
        this.#currentId++;
        this.#currentZIndex++;

        if (!this.#backdropActive) {
            this.#backdropView.update(true);
            this.#backdropActive = false;
        }
    }

    static async remove(windowId) {
        const windowController = this.#windowControllerList.find(
            (wc) => wc.windowId == windowId
        );

        console.log(windowId);

        if (!windowController) return;

        const windowIndex =
            this.#windowControllerList.indexOf(windowController);

        await windowController.remove();

        this.#windowControllerList.splice(windowIndex, 1);

        this.#currentZIndex--;

        if (!this.#windowControllerList.length) {
            this.#backdropView.update(false);
            this.#backdropActive = false;
        }
    }

    static async removeAll() {
        console.log(this.#windowControllerList);

        for (let windowController of this.#windowControllerList) {
            await windowController.remove();
            this.#currentZIndex--;
        }

        this.#windowControllerList.splice(0, this.#windowControllerList.length);

        this.#backdropView.update(false);
        this.#backdropActive = false;
    }
}
