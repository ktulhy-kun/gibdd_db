// Generated by CoffeeScript 1.10.0
(function() {
  var _AJAXMatching;

  _AJAXMatching = {
    schedule: {
      show: {
        pathGenerator: function(params) {
          return "/schedule/show/" + params.id;
        }
      }
    },
    person: {
      show: {
        pathGenerator: function(params) {
          return "/person/show/" + params.id;
        }
      }
    },
    account: {
      login: {
        pathGenerator: '/login'
      },
      logout: {
        pathGenerator: '/logout'
      }
    }
  };

  window.AJAXSend = function(params, data, handler) {
    var method, obj, path, pathGenerator, ref, ref1, ref2, ref3, ref4;
    progress.setColor('green');
    obj = (ref = _AJAXMatching[params.obj]) != null ? ref[params.act] : void 0;
    if (obj != null) {
      pathGenerator = (ref1 = obj.pathGenerator) != null ? ref1 : null, method = (ref2 = obj.method) != null ? ref2 : null;
    }
    path = (ref3 = (ref4 = typeof pathGenerator === "function" ? pathGenerator(params) : void 0) != null ? ref4 : pathGenerator) != null ? ref3 : "/" + params.obj + "/" + params.act;
    if (method == null) {
      method = 'POST';
    }
    if (params.act === 'show' || params.act === 'show_all') {
      method = 'GET';
    }
    progress.setColor('green');
    progress.setProgress(10);
    return $.ajax({
      async: true,
      type: method,
      url: path,
      data: data,
      dataType: 'json',
      cache: false,
      beforeSend: function() {},
      complete: function() {
        return progress.setProgress(100);
      },
      success: function(data) {
        var msg, sec;
        progress.setProgress(50);
        if (data.status !== 'ok') {
          progress.setColor('red');
          msg = "<b>При выполнении запроса произошла ошибка:</b><br>" + data.description;
          sec = (($(msg)).text().length / 20 + 4) * 1000;
          Materialize.toast(msg, sec.toFixed());
          return console.log("Error", data);
        } else {
          if (handler) {
            return handler(data);
          }
        }
      },
      error: function() {
        progress.setProgress(0);
        return progress.setColor('red');
      }
    });
  };

  window.AJAXLoad = function(params, handler) {
    return AJAXSend(params, null, handler);
  };

  window.AJAXLoadTitles = function(handler) {
    return AJAXLoad({
      obj: 'title',
      act: 'show_all'
    }, handler);
  };

  window.AJAXLoadStates = function(handler) {
    return AJAXLoad({
      obj: 'state',
      act: 'show_all'
    }, handler);
  };

}).call(this);

//# sourceMappingURL=ajax.js.map