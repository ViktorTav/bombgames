export class List {
    constructor(list = []) {
        this.list = [].concat(list);
    }

    add(element) {
        this.list.push(element);
    }

    find(prop, value) {
        let element = null;

        for (let listElement in this.list) {
            if (listElement[prop] == value) {
                element = listElement;
                break;
            }
        }

        return element;
    }

    remove(product) {
        const index = this.list.findIndex(product);

        if (!index) {
            console.error("[ProductList] Failed to try remove a product.");
            console.error(product);
        }

        this.products.splice(index, 1);
    }
}
