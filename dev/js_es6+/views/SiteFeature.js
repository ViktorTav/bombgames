import { View } from "./View.js";

export class SiteFeatureView extends View {
    _template(model) {
        return model
            .map(
                (feature) => `
                <li class = "site-feature">
                    <i class="${feature.faIcon}"></i>
                    <h1 class = "site-feature-name">${feature.name}</h1>
                    <p class = "site-feature-description">${feature.description}</p>
                </li>
            `
            )
            .join("");
    }
}
