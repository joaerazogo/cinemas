import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  //Acción donde en la variable selectedEmail se almacena el emial escogido
  actions:{
    onChangeEmail:function(email){
        //console.log(email);
        this.set('selectedEmail', email);
        //console.log(this.get('selectedEmail'));
      },
      //Acción donde se elimina el registro luego de hacerce la consulta por email
      deleteEmail:function(email){
        const emails = this.get('model.clients').findBy('email', email);
        //alert(emails);
        emails.destroyRecord();
      }
  }
});
