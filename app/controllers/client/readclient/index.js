import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  //Acción donde almacena en el atributo selectedEmail el email seleccionado
  actions: {
      onChangeEmail: function(email) {
        this.set('selectedEmail', email);
        //console.log(this.get('selectedEmail'));
      }
  }
});
