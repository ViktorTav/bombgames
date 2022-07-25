function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

import { View } from "./View.js";

var _handleBuy = /*#__PURE__*/new WeakMap();

var _templateIcon = /*#__PURE__*/new WeakSet();

var _handleBuyButtonClick = /*#__PURE__*/new WeakSet();

export var ProductView = /*#__PURE__*/function (_View) {
  _inherits(ProductView, _View);

  var _super = _createSuper(ProductView);

  function ProductView(DOMElementSelector) {
    var _this;

    _classCallCheck(this, ProductView);

    _this = _super.call(this, DOMElementSelector);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _handleBuyButtonClick);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _templateIcon);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _handleBuy, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _handleBuy, null);

    return _this;
  }

  _createClass(ProductView, [{
    key: "handleBuy",
    set: function set(handleBuy) {
      _classPrivateFieldSet(this, _handleBuy, handleBuy);
    }
  }, {
    key: "_template",
    value: function _template(model) {
      var _this2 = this;

      return model.map(function (product) {
        return "\n                    <li class = \"product-card\" data-productId=".concat(product.id, ">\n                        <img \n                            alt = \"Imagem de ").concat(product.name, "\" \n                            src = \"").concat(product.image, "\" \n                            class = \"product-card-image\"\n                        />\n                        \n                        <h1 class = \"product-card-name\">").concat(product.name, "</h1>\n                        <h2 class = \"product-card-price\">R$").concat(product.price, "</h2>\n\n                        <ul class = \"product-card-features\">\n                            ").concat(product.features.map(function (feature) {
          return "\n                                    <li class = \"product-card-feature\">\n                                        ".concat(_classPrivateMethodGet(_this2, _templateIcon, _templateIcon2).call(_this2, feature.icon), "\n                                        <span class = \"product-card-feature-text\">").concat(feature.text, "</span>\n                                    </li>\n                                ");
        }).join(""), "\n                        </ul>\n\n                        <button \n                            class = \"product-card-buy ").concat(!product.available ? "not-available" : "", "\n                        \">\n                            ").concat(product.available ? "Comprar" : "Indisponível", "\n                        </button>\n                    </li>\n                ");
      }).join("");
    }
  }, {
    key: "update",
    value: function update(model) {
      var _this3 = this;

      this.DOMElement.innerHTML = this._template(model);
      document.querySelectorAll("button.product-card-buy").forEach(function (element) {
        element.addEventListener("click", function (e) {
          return _classPrivateMethodGet(_this3, _handleBuyButtonClick, _handleBuyButtonClick2).call(_this3, e);
        });
      });
    }
  }]);

  return ProductView;
}(View);

function _templateIcon2(_ref) {
  var type = _ref.type,
      content = _ref.content;
  var types = {
    image: function image(content) {
      return "<img alt = \"\xCDcone de uma caracter\xEDstica do produto\" src = \"".concat(content, "\" class = \"product-card-feature-icon\"/>");
    },
    text: function text(content) {
      return "<p class = \"product-card-feature-icon\">".concat(content, "</p>");
    }
  };
  return types[type](content);
}

function _handleBuyButtonClick2(e) {
  /*
      No safari e firefox, o objeto 'e' passado como parâmetro pro callback do método addEventListener,
      não possui a propriedade path, porém a mesma funcionalidade que a mesma proporciona está disponível
      no método composedPath().
  */
  var path = e.path || e.composedPath && e.composedPath();

  _classPrivateFieldGet(this, _handleBuy).call(this, path[1].dataset.productid);
}