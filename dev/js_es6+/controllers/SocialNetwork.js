import { SocialNetwork } from "../model/SocialNetwork.js";
import { getJson } from "../util/getJson.js";
import { SocialNetworkView } from "../views/SocialNetwork.js";

export class SocialNetworkController {
    #fileUrl;
    #socialNetworkView;
    #socialNetworkList;

    constructor(DOMSocialNetworkUlSelector, fileUrl) {
        this.#fileUrl = fileUrl;
        this.#socialNetworkView = new SocialNetworkView(
            DOMSocialNetworkUlSelector
        );
        this.#socialNetworkList = [];
    }

    async load() {
        const contacts = await getJson(this.#fileUrl);

        for (let contact of contacts) {
            if (!contact["rede-social"] || !contact["rede-social"]["mostrar"])
                continue;

            this.#socialNetworkList.push(
                new SocialNetwork(
                    contact.url,
                    contact["fa-icone"],
                    contact["rede-social"]["cor"]
                )
            );
        }

        this.#socialNetworkView.update(this.#socialNetworkList);
    }
}
