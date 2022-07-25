import { ContactController } from "./controllers/Contact.js";
import { ProductController } from "./controllers/Product.js";
import { QuestionController } from "./controllers/Question.js";
import { SiteFeatureController } from "./controllers/SiteFeature.js";
import { SocialNetworkController } from "./controllers/SocialNetwork.js";
import { TermsAndConditionsWindowController } from "./controllers/TermsAndConditionsWindow.js";
import { Sidebar } from "./Sidebar.js";
import { getJson } from "./util/getJson.js";
import { WindowManager } from "./WindowManager.js";

var _await$getJson = await getJson("config.json"),
    controllers = _await$getJson.controllers;

var product = controllers.product,
    siteFeature = controllers.siteFeature,
    contact = controllers.contact,
    question = controllers.question,
    socialNetwork = controllers.socialNetwork,
    termsAndConditions = controllers.termsAndConditions;
console.log(controllers);
var productController = new ProductController(product.DOMProductCardsUlSelector, product.DOMMainProductDivSelector, product.fileUrl);
var siteFeatureController = new SiteFeatureController(siteFeature.DOMFeaturesUlSelector, siteFeature.fileUrl);
var contactController = new ContactController(contact.DOMContactUlSelector, contact.fileUrl);
var questionController = new QuestionController(question.DOMQuestionUlSelector, question.fileUrl);
var socialNetworkController = new SocialNetworkController(socialNetwork.DOMSocialNetworkUlSelector, socialNetwork.fileUrl);
var sidebar = new Sidebar("button#header-hamburguer-menu", "ul#header-menu");
productController.loadProducts();
siteFeatureController.load();
contactController.load();
questionController.load();
socialNetworkController.load();
sidebar.config();
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("terms-and-conditions")) {
    e.preventDefault();
    WindowManager.add(new TermsAndConditionsWindowController(termsAndConditions.fileUrl));
  }
});
document.querySelectorAll("span#current-year").forEach(function (element) {
  return element.innerText = new Date().getFullYear();
});