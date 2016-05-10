// Generated by CoffeeScript 1.10.0
(function() {
  var BreadCrumb;

  BreadCrumb = (function() {
    function BreadCrumb() {
      this.div = $('#breadcrumb');
      this.items = [];
      this._push('БД ГИБДД', {
        obj: 'main',
        act: 'show_all'
      });
    }

    BreadCrumb.prototype._push = function(name, params) {
      var item;
      item = a('breadcrumb', name, function() {
        return goto(name, params);
      });
      this.div.append(item);
      return item;
    };

    BreadCrumb.prototype.push = function(name, params) {
      return this.items.push(this._push(name, params));
    };

    BreadCrumb.prototype.popAll = function() {
      var i, item, len, ref;
      ref = this.items;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        item.remove();
      }
      return this.items = [];
    };

    return BreadCrumb;

  })();

  ($(document)).ready(function() {
    return window.breadcrumb = new BreadCrumb();
  });

}).call(this);

//# sourceMappingURL=breadcrumb.js.map