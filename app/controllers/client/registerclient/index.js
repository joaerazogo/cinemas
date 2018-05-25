import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';
import DS from 'ember-data';

export default Controller.extend({
  actions: {
      cleanMessage: function(){
        set(this.get('model'), 'fieldEmail', true);
        set(this.get('model'), 'fieldName', true);
        set(this.get('model'), 'fieldLastname', true);
        set(this.get('model'), 'fieldAddress', true);
        set(this.get('model'),'fieldTelephone', true);
        set(this.get('model'),'fieldPassword', true);
        set(this.get('model'), 'messageTelephoneCorrectFormat', true);
        set(this.get('model'),'messageEmailCorrectFormat', true);
      },
      registerClient: function(){

        //Leee los datos del nombre, apellido, dirección, teléfono, email, contraseña y el cliente
        let email = this.get('email');
        let name = this.get('name');
        let last_name = this.get('last_name');
        let address = this.get('address');
        let telephone = this.get('telephone');
        let password = this.get('password');

        //Expresión regular donde nos ayuda a determinar si el correo tiene un formato correcto
        var expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        var expregnum = /^([0-9])*$/;
        var expregText = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

        //console.log(email);
        //console.log(name);
        //mapea todos los emails que están registrados en la base de datos
        var emails = this.get('model.clients').mapBy('email');
        var emailRegistered = true;
        var fieldEmail;
        var fieldName;
        var fieldLastname;
        var fieldAddress;
        var fieldTelephone;
        var fieldPassword;

        for (var i = 0; i < emails.length; i++) {
          if (emails[i] === email) {
            emailRegistered = false;
            break;
          }else{
            emailRegistered = true;

          }
        }
        //console.log(valueregistered);
        //si cumple la condición entonces registra el cliente en caso contrario lo redicrecciona a la misma vista hasta que ingrese correctamente los datos
      if (!((email == '' || email == undefined ) || (name == '' || name == undefined) || (last_name == '' || last_name == undefined) || (address == '' || address == undefined) || (telephone == '' || telephone == undefined) || (password == '' || password == undefined))) {
        set(this.get('model'), 'fieldEmail', true);
        set(this.get('model'),'fieldName', true);
        set(this.get('model'), 'fieldLastname', true);
        set(this.get('model'), 'fieldAddress', true);
        set(this.get('model'), 'fieldTelephone', true);
        set(this.get('model'),'fieldPassword', true);
        if (expreg.test(email) && expregnum.test(telephone)) {
          if (emailRegistered || emails == undefined) {
            var register = this.store.createRecord('usuario', {
              name: this.get('name'),
              lastName: this.get('last_name'),
              address: this.get('address'),
              telephone: this.get('telephone'),
              email: this.get('email'),
              password: this.get('password'),
              rol: 0,
            });
            register.save();
            this.set('name', null);
            this.set('last_name', null);
            this.set('address', null);
            this.set('telephone', null);
            this.set('email', null);
            this.set('password', null);
            this.transitionToRoute('client.registerclient.clientregistered');
            //this.get('target.router').refresh();
          }else{
            console.log('El Email ya existe');
            //set(this.get('model'), 'messageEmailExists', true);
            set(this.get('model'), 'showErrorMessageClientExists', false);
            this.transitionToRoute('client.registerclient.index');
          }
        }else{
          console.log('Email incorrecto');
          console.log('Telephone incorrecto');
          set(this.get('model'), 'fieldTelephone', true);
          set(this.get('model'), 'fieldEmail', true);

          if (expreg.test(email)) {
              set(this.get('model'),'messageEmailCorrectFormat', true);
          }else{
              set(this.get('model'),'messageEmailCorrectFormat', false);
          }if (expregnum.test(telephone)) {
              set(this.get('model'),'messageTelephoneCorrectFormat', true);
          }else{
              set(this.get('model'),'messageTelephoneCorrectFormat', false);
          }
          this.transitionToRoute('client.registerclient.index');
        }
        }else {
          if (email == '' || email == undefined ) {
            console.log('email empty');
            //fieldEmail =  false;
            set(this.get('model'),'fieldEmail', false);
            //this.transitionToRoute('client.registerclient.index', this.get('model.fieldEmail'));
          }else{
            set(this.get('model'), 'fieldEmail', true);
          }
          if (name == '' || name == undefined ) {
            console.log('name empty');
            fieldName = false;
            set(this.get('model'), 'fieldName', false);
            //this.transitionToRoute('client.registerclient.index', this.get('model.fieldName'));
          }else{
            set(this.get('model'),'fieldName', true);
          }
          if (last_name == '' || last_name == undefined) {
            console.log('last name empty');
            //fieldLastname = false;
            set(this.get('model'), 'fieldLastname', false);
            //this.transitionToRoute('client.registerclient.index', this.get('model.fieldLastname'));
          }else{
            set(this.get('model'), 'fieldLastname', true);
          }
          if (address == '' || address == undefined) {
            console.log('address empty');
            //fieldAddress = false;
            set(this.get('model'), 'fieldAddress', false);
            //this.transitionToRoute('client.registerclient.index', this.get('model.fieldAddress'));
          }else {
            set(this.get('model'), 'fieldAddress', true);
          }
          if (telephone == '' || telephone == undefined) {
            console.log('address empty');
            //fieldTelephone = false;
            set(this.get('model'), 'fieldTelephone', false);
            //this.transitionToRoute('client.registerclient.index', this.get('model.fieldTelephone'));
          }else {
            set(this.get('model'), 'fieldTelephone', true);
          }
          if (password == '' || password == undefined) {
            console.log('address empty');
            //fieldPassword = false;
            set(this.get('model'), 'fieldPassword', false);
            //this.transitionToRoute('client.registerclient.index', this.get('model.fieldPassword'));
          }else {
            set(this.get('model'),'fieldPassword', true);
          }
          set(this.get('model'), 'messageEmailCorrectFormat', true);
          set(this.get('model'), 'messageTelephoneCorrectFormat', true);
          this.transitionToRoute('client.registerclient.index');
        }

    }
  }
});
