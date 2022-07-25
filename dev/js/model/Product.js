function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _id = /*#__PURE__*/new WeakMap();

var _name = /*#__PURE__*/new WeakMap();

var _price = /*#__PURE__*/new WeakMap();

var _image = /*#__PURE__*/new WeakMap();

var _available = /*#__PURE__*/new WeakMap();

var _features = /*#__PURE__*/new WeakMap();

var _paymentMethods = /*#__PURE__*/new WeakMap();

export var Product = /*#__PURE__*/function () {
  function Product(id, name, price, image, available) {
    var features = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    var paymentMethods = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

    _classCallCheck(this, Product);

    _classPrivateFieldInitSpec(this, _id, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _name, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _price, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _image, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _available, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _features, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _paymentMethods, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _id, id);

    _classPrivateFieldSet(this, _name, name);

    _classPrivateFieldSet(this, _price, price);

    _classPrivateFieldSet(this, _image, image);

    _classPrivateFieldSet(this, _available, available);

    _classPrivateFieldSet(this, _features, features);

    _classPrivateFieldSet(this, _paymentMethods, paymentMethods);
  }

  _createClass(Product, [{
    key: "id",
    get: function get() {
      return _classPrivateFieldGet(this, _id);
    },
    set: function set(id) {
      _classPrivateFieldSet(this, _id, id);
    }
  }, {
    key: "name",
    get: function get() {
      return _classPrivateFieldGet(this, _name);
    },
    set: function set(name) {
      _classPrivateFieldSet(this, _name, name);
    }
  }, {
    key: "price",
    get: function get() {
      return _classPrivateFieldGet(this, _price);
    },
    set: function set(price) {
      _classPrivateFieldSet(this, _price, price);
    }
  }, {
    key: "image",
    get: function get() {
      return _classPrivateFieldGet(this, _image);
    },
    set: function set(image) {
      _classPrivateFieldSet(this, _image, image);
    }
  }, {
    key: "available",
    get: function get() {
      return _classPrivateFieldGet(this, _available);
    },
    set: function set(available) {
      _classPrivateFieldSet(this, _available, available);
    }
  }, {
    key: "features",
    get: function get() {
      return _classPrivateFieldGet(this, _features);
    },
    set: function set(features) {
      _classPrivateFieldSet(this, _features, features);
    }
  }, {
    key: "paymentMethods",
    get: function get() {
      return _classPrivateFieldGet(this, _paymentMethods);
    },
    set: function set(paymentMethods) {
      _classPrivateFieldSet(this, _paymentMethods, paymentMethods);
    }
  }]);

  return Product;
}();