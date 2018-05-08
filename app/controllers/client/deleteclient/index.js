import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  //Acción donde en la variable selectedEmail se almacena el emial escogido
  actions:{
    onChangeEmail: function(client) {
        console.log(this.get('email'));
        this.set('selectedClient', client);
        //console.log(this.get('selectedEmail'));
      },
      //Acción donde se elimina el registro luego de hacerce la consulta por email
      deleteEmail:function(email){
        //const emails = this.get('model.clients').findBy('email', email);
        alert(email);
        var emails = this.get('model.clients').mapBy('email');
        if (emails.length == 0) {
          set(this.get('model'), 'clientsRegistered', false);
        }else {
          if (this.get('selectedClient') == null || this.get('selectedClient') == undefined) {
              set(this.get('model'), 'showErrorMessage', false);
          }else {
              let client = this.get('model.clients').findBy('email', email);
              client.destroyRecord();
              this.transitionToRoute('client.deleteclient.clientdeleted');
          }
        }

      },
  }
});
