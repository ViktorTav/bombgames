function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

export var List = /*#__PURE__*/function () {
  function List() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, List);

    this.list = [].concat(list);
  }

  _createClass(List, [{
    key: "add",
    value: function add(element) {
      this.list.push(element);
    }
  }, {
    key: "find",
    value: function find(prop, value) {
      var element = null;

      for (var listElement in this.list) {
        if (listElement[prop] == value) {
          element = listElement;
          break;
        }
      }

      return element;
    }
  }, {
    key: "remove",
    value: function remove(product) {
      var index = this.list.findIndex(product);

      if (!index) {
        console.error("[ProductList] Failed to try remove a product.");
        console.error(product);
      }

      this.products.splice(index, 1);
    }
  }]);

  return List;
}();