import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions:{
    onChangeDate: function(ticket) {
      this.set('selectedTicket', ticket);
    },
    tryRead() {
      var ticket = this.get('model.ticket').mapBy('date');
      if (ticket.length == 0) {
        this.set('numberTicket', true);
      }else {
        if (this.get('selectedTicket') == null || this.get('selectedTicket') == undefined) {
          this.set('showErrorMessage', false);
        }
      }
    },
  }
});
