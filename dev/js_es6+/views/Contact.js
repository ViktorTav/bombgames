import { View } from "./View.js";

export class ContactView extends View {
    _template(model) {
        return model
            .map(
                (contact) => `
                <li class = "contact">
                    <a href = "${contact.url}" target="_blank">
                        <i class="${contact.faIcon}"></i>
                    </a>
                </li>
            `
            )
            .join("");
    }
}
