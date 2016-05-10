// Generated by CoffeeScript 1.10.0
(function() {
  var generateLine, initModal, typesList;

  typesList = ['Дата', 'Строка', 'Число', 'Дробное число'];

  initModal = function(vehicleFeatureType) {
    var addOptions, form, ref;
    if (vehicleFeatureType == null) {
      vehicleFeatureType = {};
    }
    modal.clear();
    modal.header.text('Создать новый тип параметров ТС');
    form = new Form('new-vehicleFeatureType', 's12', modal.text);
    form.addInputField('name', 'text', 's6', 'Название', vehicleFeatureType.name);
    addOptions = form.addOptionsField('variable_type', 's6', 'Тип параметра');
    addOptions(typesList, (ref = vehicleFeatureType.variable_type) != null ? ref : 2);
    modal.setAgreeHandler(function() {
      var data;
      data = form.collectData();
      data.id = vehicleFeatureType.id;
      return AJAXSend({
        obj: 'vehicleFeatureType',
        act: 'add_edit'
      }, data, function(data) {
        return goto(null, {
          obj: 'vehicleFeatureType',
          act: 'show_all'
        });
      });
    });
    return null;
  };

  generateLine = function(vehicleFeatureType) {
    var btnDelete, btnEdit;
    btnDelete = a('secondary-content', icon('delete'), function() {
      return AJAXSend({
        obj: 'vehicleFeatureType',
        act: 'delete'
      }, {
        id: vehicleFeatureType.id
      }, function() {
        return goto(null, {
          obj: 'vehicleFeatureType'
        });
      });
    });
    btnEdit = a('secondary-content', icon('edit'), function() {
      initModal(vehicleFeatureType);
      return modal.show();
    });
    return [vehicleFeatureType.name + " (" + typesList[vehicleFeatureType.variable_type] + ")", btnDelete, btnEdit];
  };

  window.vehicleFeatureTypeHandler = function(params) {
    var coll;
    switch (params.act) {
      case 'show_all':
        coll = new Collection(container, false);
        AJAXLoad(params, function(data) {
          var i, len, ref, results, vehicleFeatureType;
          ref = data.vehicleFeatureTypes;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            vehicleFeatureType = ref[i];
            results.push(coll.addLine(generateLine(vehicleFeatureType)));
          }
          return results;
        });
        setTitle('Типы параметров ТС');
        breadcrumb.push('Типы параметров ТС', params);
        return floatingButton.addButton('add', 'green', 'Добавить тип параметров ТС', function() {
          initModal();
          return modal.show();
        });
    }
  };

}).call(this);

//# sourceMappingURL=vehicle_feature_type.js.map
