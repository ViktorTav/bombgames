import { Contact } from "../model/Contact.js";
import { getJson } from "../util/getJson.js";
import { ContactView } from "../views/Contact.js";

export class ContactController {
    #fileUrl;
    #contactView;
    #contactList;

    constructor(DOMContactsUlSelector, fileUrl) {
        this.#fileUrl = fileUrl;
        this.#contactView = new ContactView(DOMContactsUlSelector);
        this.#contactList = [];
    }

    async load() {
        const contacts = await getJson(this.#fileUrl);

        this.#contactList = contacts.map(
            (contact) => new Contact(contact["url"], contact["fa-icone"])
        );

        this.#contactView.update(this.#contactList);
    }
}
