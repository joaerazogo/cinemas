import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions:{
    cleanMessage: function(){
      this.set('fieldEmail', false);
      this.set('fieldName', false);
      this.set('fieldLastname', false);
      this.set('fieldAddress', false);
      this.set('fieldTelephone', false);
      this.set('fieldPassword', false);
      this.set('messageTelephoneCorrectFormat', false);
      this.set('messageEmailCorrectFormat', false);

    },
    updateClient:function(email){

        var emails = this.get('model.clients').mapBy('email');
        //lee los campos ingresados por el empleado
        console.log(email);
        let Email = this.get('email');
        let name = this.get('name');
        let last_name = this.get('last_name');
        let address = this.get('address');
        let telephone = this.get('telephone');
        let password = this.get('password');
        //let client = this.get('model.clients').findBy('email', email);
        //expresión regular para el Email
        var expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        var expregnum = /^([0-9])*$/;
        var expregText = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

        //verifica si el email ingresado está en la base de datos
        var emailRegistered = true;
        for (var i = 0; i < emails.length; i++) {
          if (emails[i] === Email) {
            emailRegistered = false;
            break;
          }else{
            emailRegistered = true;
          }
        }
        console.log('-----------------------------------------');
        console.log(email);
        console.log(Email);
        console.log('-----------------------------------------');
        console.log(emailRegistered);

          //verifica que se cumpla la expresión regular "@"
        if (!((Email == '' || Email == undefined ) || (name == '' || name == undefined) || (last_name == '' || last_name == undefined) || (address == '' || address == undefined) || (telephone == '' || telephone == undefined) || (password == '' || password == undefined))) {
          if (expreg.test(Email) && expregnum.test(telephone)) {
            if (emailRegistered || email == Email) {
              let client = this.get('model.clients').findBy('email', email);
              client.set('name', name);
              client.set('lastName', last_name);
              client.set('address', address);
              client.set('telephone', telephone);
              client.set('email', Email);
              client.set('password', password);
              client.save();
              this.set('name', null);
              this.set('last_name', null);
              this.set('address', null);
              this.set('telephone', null);
              this.set('email', null);
              this.set('password', null);
              this.transitionToRoute('client.editclient.messageclient');
              //this.get('target.router').refresh();
            }else{
              console.log('El Email ya existe');
              //this.set('messageEmailExists', false);
              this.set('showErrorMessageClientExists', true);
              this.set('messageEmailCorrectFormat', false);
              this.set('messageTelephoneCorrectFormat', false);

              this.set('fieldPassword', false);
              this.set('fieldEmail', false);
              this.set('fieldName', false);
              this.set('fieldLastname', false);
              this.set('fieldAddress', false);
              this.set('fieldPassword', false);

              this.transitionToRoute('client.editclient.clienteedited');
            }
          }else{
            console.log('Email incorrecto');
            console.log('Telephone incorrecto');
            this.set('fieldTelephone', false);
            this.set('fieldEmail', false);

            if (expreg.test(Email)) {
                this.set('messageEmailCorrectFormat', false);
            }else{
                this.set('messageEmailCorrectFormat', true);
            }if (expregnum.test(telephone)) {
                this.set('messageTelephoneCorrectFormat', false);
            }else{
                this.set('messageTelephoneCorrectFormat', true);
            }
            this.transitionToRoute('client.editclient.clienteedited');
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
            if (name == '' || name == undefined ) {
              console.log('name empty');
              //fieldName = false;
              this.set('fieldName', true);
              //this.transitionToRoute('client.registerclient.index', this.get('model.fieldName'));
            }else{
              this.set('fieldName', false);
            }
            if (last_name == '' || last_name == undefined) {
              console.log('last name empty');
              //fieldLastname = false;
              this.set('fieldLastname', true);
              //this.transitionToRoute('client.registerclient.index', this.get('model.fieldLastname'));
            }else{
              this.set('fieldLastname', false);
            }
            if (address == '' || address == undefined) {
              console.log('address empty');
              //fieldAddress = false;
              this.set('fieldAddress', true);
              //this.transitionToRoute('client.registerclient.index', this.get('model.fieldAddress'));
            }else {
              this.set('fieldAddress', false);
            }
            if (telephone == '' || telephone == undefined) {
              console.log('address empty');
              //fieldTelephone = false;
              this.set('fieldTelephone', true);
              //this.transitionToRoute('client.registerclient.index', this.get('model.fieldTelephone'));
            }else {
              this.set('fieldTelephone', false);
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
            this.set('messageTelephoneCorrectFormat', false);
            this.transitionToRoute('client.editclient.clienteedited');
          }
    }
  }
});
