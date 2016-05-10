_AJAXMatching =
  schedule:
    show:
      pathGenerator: (params) -> "/schedule/show/#{params.id}"
  person:
    show:
      pathGenerator: (params) -> "/person/show/#{params.id}"
  account:
    login:
      pathGenerator: '/login'
    logout:
      pathGenerator: '/logout'


window.AJAXSend = (params, data, handler) ->
  progress.setColor 'green'
  obj = _AJAXMatching[params.obj]?[params.act]
  if obj?
    {pathGenerator=null, method=null} = obj

  path = pathGenerator?(params) ? pathGenerator ? "/#{params.obj}/#{params.act}"
  method ?= 'POST'
  if params.act == 'show' or params.act == 'show_all' then method = 'GET'

  progress.setColor 'green'
  progress.setProgress 10

  $.ajax
    async: true
    type: method
    url: path
    data: data
    dataType: 'json'
    cache: false
    beforeSend: () ->

    complete: () ->
      progress.setProgress 100
    success: (data) ->
      progress.setProgress 50
      if data.status != 'ok'
        progress.setColor 'red'
        msg = "<b>При выполнении запроса произошла ошибка:</b><br>#{data.description}"
        sec = (($ msg).text().length / 20 + 4) * 1000
        Materialize.toast msg, sec.toFixed()
        console.log "Error", data
      else
        if handler
          handler(data)
    error: () ->
      progress.setProgress 0
      progress.setColor 'red'


window.AJAXLoad = (params, handler) ->
  AJAXSend params, null, handler

window.AJAXLoadTitles = (handler) ->
  AJAXLoad obj: 'title', act: 'show_all', handler

window.AJAXLoadStates = (handler) ->
  AJAXLoad obj: 'state', act: 'show_all', handler