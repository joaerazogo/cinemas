import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions:{
    updateClient:function(email){
        //lee los campos ingresados por el empleado
        let name = this.get('name');
        let lastName = this.get('last_name');
        let address = this.get('address');
        let telephone = this.get('telephone');
        let Email = this.get('email');
        let password = this.get('password');
        let client = this.get('model.clients').findBy('email', email);
        //expresión regular para el Email
        var expreg = new RegExp("@");

        //verifica que los campos ingresados por el empleadp no estén vacíos

          //verifica que se cumpla la expresión regular "@"
          if (expreg.test(Email)) {
            //modifica los valores que tenía anteriormente el cliente y lo guarda
            client.set('name', name);
            client.set('lastName', lastName);
            client.set('address', address);
            client.set('telephone', telephone);
            client.set('email', Email);
            client.set('password', password);
            client.save();
            this.transitionToRoute('client.editclient.messageclient');
          }else{
          set(this.get('model'), 'messageEmailExistss', false);
          this.transitionToRoute('client.editclient.clienteedited', this.get('model.messageEmailExists'));
        }


    }
  }
});
