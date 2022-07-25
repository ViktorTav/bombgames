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

var _url = /*#__PURE__*/new WeakMap();

var _faIcon = /*#__PURE__*/new WeakMap();

export var Contact = /*#__PURE__*/function () {
  function Contact(url, faIcon) {
    _classCallCheck(this, Contact);

    _classPrivateFieldInitSpec(this, _url, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _faIcon, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _url, url);

    _classPrivateFieldSet(this, _faIcon, faIcon);
  }

  _createClass(Contact, [{
    key: "url",
    get: function get() {
      return _classPrivateFieldGet(this, _url);
    },
    set: function set(url) {
      _classPrivateFieldSet(this, _url, url);
    }
  }, {
    key: "faIcon",
    get: function get() {
      return _classPrivateFieldGet(this, _faIcon);
    },
    set: function set(faIcon) {
      _classPrivateFieldSet(this, _faIcon, faIcon);
    }
  }]);

  return Contact;
}();