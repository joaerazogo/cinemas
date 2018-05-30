import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service('session'),
  actions:{
    cleanFields: function(){
      this.set('fieldEmail', false);
      this.set('fieldLastname', false);
      this.set('fieldPassword', false);
      this.set('messageEmailCorrectFormat', false);
      this.set('messageEmailCorrectFormat', false);

    },
    loginUser:function(){

        let controller = this;
        var rol = this.get('model.clients').mapBy('rol');
        var emails = this.get('model.clients').mapBy('email');
        var passwords = this.get('model.clients').mapBy('password');
        //lee los campos ingresados por el usuario
        console.log(emails);
        let Email = this.get('email');
        let password = this.get('password');
        //let client = this.get('model.clients').findBy('email', email);
        //expresión regular para el Email
        var expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        var rolUser;
        //verifica si el email ingresado está en la base de datos
        var emailRegistered = true;
        for (var i = 0; i < emails.length; i++) {
          if (emails[i] === Email && passwords[i] == password) {
            rolUser = rol[i];
            emailRegistered = true;
            break;
          }else{
            emailRegistered = false;
          }
        }
        console.log('-----------------------------------------');
        console.log(Email);
        console.log('-----------------------------------------');
        console.log(emailRegistered);

        if (!((Email == '' || Email == undefined ) || (password == '' || password == undefined))) {
          this.set('fieldEmail', false);
          this.set('fieldPassword', false);
          //verifica que se cumpla la expresión regular "@"
          if (expreg.test(Email)) {
            if (emailRegistered) {
              if (rolUser == 1) {
                this.set('email', null);
                this.set('password', null);
                console.log('incio de sesión exitoso');
                this.set('showErrorMessageClientExists', true);
                this.transitionToRoute('client.index');
              }else if(rolUser == 0){
                this.set('email', null);
                this.set('password', null);
                this.set('showErrorMessageClientExists', true);
                this.transitionToRoute('reservation.index');
              }


            }else{
              //this.set('messageEmailExists', false);
              this.set('showErrorMessageClientExists', true);
              this.set('messageEmailCorrectFormat', false);
              this.set('fieldPassword', false);
              this.set('fieldEmail', false);
              console.log('incio de sesión no exitoso');
              this.transitionToRoute('login');
            }
          }else{
            console.log('Email incorrecto');
            this.set('fieldEmail', false);

            if (expreg.test(Email)) {
                this.set('messageEmailCorrectFormat', false);
            }else{
                this.set('messageEmailCorrectFormat', true);
            }
            console.log('incio de sesión no exitoso');
            this.transitionToRoute('login');
          }
          }else {
            //verifica que los campos ingresados por el empleadp no estén vacíos
            if (Email == '' || Email == undefined ) {
              console.log('email empty');
              //fieldEmail =  false;
              this.set('fieldEmail', true);
              //this.transitionToRoute('client.registerclient.index', this.get('model.fieldEmail'));
            }else{
              this.set('fieldEmail', false);
            }
            if (password == '' || password == undefined) {
              console.log('address empty');
              //fieldPassword = false;
              this.set('fieldPassword', true);
              //this.transitionToRoute('client.registerclient.index', this.get('model.fieldPassword'));
            }else {
              this.set('fieldPassword', false);
            }
            this.set('messageEmailCorrectFormat', false);
            console.log('incio de sesión no exitoso');
            this.transitionToRoute('login');
          }
      }
  }

});
