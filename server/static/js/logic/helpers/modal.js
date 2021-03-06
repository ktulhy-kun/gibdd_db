// Generated by CoffeeScript 1.10.0
(function() {
  var Modal;

  Modal = (function() {
    function Modal() {
      this.modal = $('#modal');
      this.header = this.modal.find('#modal-header');
      this.text = this.modal.find('#modal-text');
      this.agree = this.modal.find('#modal-agree');
    }

    Modal.prototype.clear = function() {
      this.header.empty();
      this.text.empty();
      return this.unsetAgreeHandler();
    };

    Modal.prototype.show = function() {
      return this.modal.openModal();
    };

    Modal.prototype.hide = function() {
      return this.modal.closeModal();
    };

    Modal.prototype.setAgreeHandler = function(handler) {
      return this.agree.on('click', function() {
        handler();
        return false;
      });
    };

    Modal.prototype.unsetAgreeHandler = function() {
      return this.agree.off('click');
    };

    return Modal;

  })();

  window.modal = new Modal();

}).call(this);

//# sourceMappingURL=modal.js.map
