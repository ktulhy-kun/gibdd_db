// Generated by CoffeeScript 1.10.0
(function() {
  var newPageHandler;

  window.setTitle = function(title) {
    if (title == null) {
      title = 'Неизвестная страница';
    }
    return document.title = "Расписания СТОПП: " + title;
  };

  window.goto = function(title, getParams) {
    var get, k, v;
    setTitle(title);
    get = "";
    for (k in getParams) {
      v = getParams[k];
      get += k + "=" + v + "&";
    }
    window.history.pushState(null, title, "?" + get);
    return newPageHandler();
  };

  newPageHandler = function() {
    var handler, head, p, params, uri;
    EHR.unregistry();
    floatingButton.clear();
    modal.clear();
    progress.setProgress(0);
    breadcrumb.popAll();
    ($('.material-tooltip')).remove();
    uri = parseUri(window.location.toString());
    params = uri.queryKey;
    if ($.isEmptyObject(params)) {
      goto('БД ГИБДД', {
        obj: 'main',
        act: 'show_all'
      });
      return;
    }
    handler = handlers[params.obj];
    container.empty();
    tableContainer.empty();
    if (typeof handler === 'function') {
      return handler(params);
    } else {
      head = tag('h4', '', 'Страница не найдена');
      p = tag('p', '', 'Данной страницы не существует. Го <a onclick=goto("",{})>сюды</a>');
      return container.append([head, p]);
    }
  };

  ($(document)).ready(function() {
    window.container = $('#container');
    window.tableContainer = $('#table-container');
    newPageHandler();
    window.addEventListener('popstate', function(e) {
      return newPageHandler();
    }, false);
    if (current_browser[0] !== 'chrome') {
      return Materialize.toast("<b>" + current_browser[0] + "</b>, да?<br> На этом браузере работа не протестирована,<br> поэтому если что-то не работает -- твои проблемы.<br> Не насилуй мозг и используй <a href='https://www.google.com/chrome/'>Google Chrome</a>", 10000);
    }
  });

}).call(this);

//# sourceMappingURL=all.js.map
