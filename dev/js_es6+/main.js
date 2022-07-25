import { ContactController } from "./controllers/Contact.js";
import { ProductController } from "./controllers/Product.js";
import { QuestionController } from "./controllers/Question.js";
import { SiteFeatureController } from "./controllers/SiteFeature.js";
import { SocialNetworkController } from "./controllers/SocialNetwork.js";
import { TermsAndConditionsWindowController } from "./controllers/TermsAndConditionsWindow.js";
import { Sidebar } from "./Sidebar.js";

import { getJson } from "./util/getJson.js";
import { WindowManager } from "./WindowManager.js";

const { controllers } = await getJson("config.json");
const {
    product,
    siteFeature,
    contact,
    question,
    socialNetwork,
    termsAndConditions,
} = controllers;

console.log(controllers);

const productController = new ProductController(
    product.DOMProductCardsUlSelector,
    product.DOMMainProductDivSelector,
    product.fileUrl
);

const siteFeatureController = new SiteFeatureController(
    siteFeature.DOMFeaturesUlSelector,
    siteFeature.fileUrl
);

const contactController = new ContactController(
    contact.DOMContactUlSelector,
    contact.fileUrl
);

const questionController = new QuestionController(
    question.DOMQuestionUlSelector,
    question.fileUrl
);

const socialNetworkController = new SocialNetworkController(
    socialNetwork.DOMSocialNetworkUlSelector,
    socialNetwork.fileUrl
);

const sidebar = new Sidebar("button#header-hamburguer-menu", "ul#header-menu");

productController.loadProducts();
siteFeatureController.load();
contactController.load();
questionController.load();
socialNetworkController.load();
sidebar.config();

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("terms-and-conditions")) {
        e.preventDefault();
        WindowManager.add(
            new TermsAndConditionsWindowController(termsAndConditions.fileUrl)
        );
    }
});

document
    .querySelectorAll("span#current-year")
    .forEach((element) => (element.innerText = new Date().getFullYear()));
