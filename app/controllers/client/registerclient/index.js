import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions: {
      registerClient: function(){
        /*
        var model = this.get('model.clients');
        alert(model);
        model.validate().then(()=>{
        model.save().then(()=>{
          this.transitionToRoute('client.registerclient.clientregistered', model)
        });
          }).catch(()=>{
            console.log(model.get("errors"));
          })
        */

        //Leee los datos del nombre, apellido, dirección, teléfono, email, contraseña y el cliente
        let email = this.getProperties('email').email;
        let name = this.getProperties('name').name;
        let last_name = this.getProperties('last_name').last_name;
        let address = this.getProperties('address').address;
        let telephone = this.getProperties('telephone').telephone;
        let password = this.getProperties('password').password;

        //Expresión regular donde nos ayuda a determinar si el correo tiene un formato correcto
        var expreg = new RegExp("@");


        //console.log(email);
        //console.log(name);
        //mapea todos los emails que están registrados en la base de datos
        const emails = this.get('model.clients').mapBy('email');
        var valueregistered;

        for (var i = 0; i < emails.length; i++) {
          if (emails[i] == email) {
            valueregistered = false;
            break;
          }else{
            valueregistered = true;

          }
        }
        //console.log(valueregistered);
        //si cumple la condición entonces registra el cliente en caso contrario lo redicrecciona a la misma vista hasta que ingrese correctamente los datos
        if (!(email==null && name==null && last_name==null && address==null && telephone==null && password==null)) {
          if (expreg.test(email)) {
            if (valueregistered) {
              var register = this.store.createRecord('client', {
                name: this.get('name'),
                lastName: this.get('last_name'),
                address: this.get('address'),
                telephone: this.get('telephone'),
                email: this.get('email'),
                password: this.get('password'),
              });
              register.save();
              this.transitionToRoute('client.registerclient.clientregistered');
              //this.get('target.router').refresh();
            }else{
              set(this.get('model'), 'messageEmailExists', false);
              this.transitionToRoute('client.registerclient.index');
            }
          }else{
            console.log('Email incorrecto');
            set(this.get('model'), 'messageEmailExists', false);
            this.transitionToRoute('client.registerclient.index', this.get('model.messageEmailExists'));
          }
          }else {
            console.log('Valores nulos');
            this.transitionToRoute('client.registerclient.index');
          }
    }
  }
});
