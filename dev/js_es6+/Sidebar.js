export class Sidebar {
    #DOMHamburguerMenuElement;
    #DOMSidebarElement;
    #active;

    constructor(DOMHamburguerMenuSelector, DOMSidebarSelector) {
        this.#DOMHamburguerMenuElement = document.querySelector(
            DOMHamburguerMenuSelector
        );
        this.#DOMSidebarElement = document.querySelector(DOMSidebarSelector);
        this.#active = false;
    }

    get active() {
        return this.#active;
    }

    config() {
        document.addEventListener("click", (e) => {
            if (!this.#active) {
                if (this.#DOMHamburguerMenuElement.contains(e.target)) {
                    this.#DOMSidebarElement.classList.add("active");
                    this.#active = true;
                }

                return;
            }

            //Se o clique não foi no próprio elemento da sidebar
            if (!e.target.isEqualNode(this.#DOMSidebarElement)) {
                this.#DOMSidebarElement.classList.remove("active");
                this.#active = false;
            }
        });
    }
}
