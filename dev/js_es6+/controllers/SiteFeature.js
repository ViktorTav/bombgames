import { SiteFeature } from "../model/SiteFeature.js";
import { getJson } from "../util/getJson.js";
import { SiteFeatureView } from "../views/SiteFeature.js";

export class SiteFeatureController {
    #fileUrl;
    #siteFeatureView;
    #siteFeatureList;

    constructor(DOMSiteFeaturesUl, fileUrl) {
        this.#fileUrl = fileUrl;
        this.#siteFeatureView = new SiteFeatureView(DOMSiteFeaturesUl);
        this.#siteFeatureList = [];
    }

    async load() {
        const features = await getJson(this.#fileUrl);

        this.#siteFeatureList = features.map(
            (f) => new SiteFeature(f["nome"], f["descrição"], f["fa-icone"])
        );

        this.#siteFeatureView.update(this.#siteFeatureList);
    }
}
