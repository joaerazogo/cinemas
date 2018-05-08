import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  //Acción donde almacena en el atributo selectedEmail el email seleccionado
  actions: {
    onChangeEmail:function(client){
        console.log(this.get('email'));
        this.set('selectedClient', client);
        //console.log(this.get('selectedEmail'));
      },
      tryRead() {
        var emails = this.get('model.clients').mapBy('email');
        if (emails.length == 0) {
          set(this.get('model'), 'clientsRegistered', false);
        }else {
          if (this.get('selectedClient') == null || this.get('selectedClient') == undefined) {
            set(this.get('model'), 'showErrorMessage', false);
          }
        }

      },
  }
});
