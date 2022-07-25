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

var _icon = /*#__PURE__*/new WeakMap();

var _text = /*#__PURE__*/new WeakMap();

export var ProductFeature = /*#__PURE__*/function () {
  function ProductFeature(icon, text) {
    _classCallCheck(this, ProductFeature);

    _classPrivateFieldInitSpec(this, _icon, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _text, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _icon, icon);

    _classPrivateFieldSet(this, _text, text);
  }

  _createClass(ProductFeature, [{
    key: "icon",
    get: function get() {
      return _classPrivateFieldGet(this, _icon);
    },
    set: function set(icon) {
      _classPrivateFieldSet(this, _icon, icon);
    }
  }, {
    key: "text",
    get: function get() {
      return _classPrivateFieldGet(this, _text);
    },
    set: function set(text) {
      _classPrivateFieldSet(this, _text, text);
    }
  }]);

  return ProductFeature;
}();