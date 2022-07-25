import { View } from "./View.js";

export class SocialNetworkView extends View {
    _template(model) {
        return model
            .map(
                (socialNetwork) =>
                    `
                <li>
                    <a href = "${socialNetwork.url}" target="_blank" style="background-color:${socialNetwork.color}">
                        <i class = "${socialNetwork.faIcon}"></i>
                    </a>
                </li>
            `
            )
            .join("");
    }
}
