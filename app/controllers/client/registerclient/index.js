import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
      registerClient: function() {
        let email = this.getProperties('email').email;
        console.log(email);
        const emails = this.get('model').mapBy('email');
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

        if (valueregistered) {
          var register = this.store.createRecord('client', {
            name: this.get('name'),
            lastName: this.get('lastName'),
            address: this.get('address'),
            telephone: this.get('telephone'),
            email: this.get('email'),
            password: this.get('password'),
          });
          register.save();
          this.transitionToRoute('client.registerclient.clientregistered');
        }else if (valueregistered) {
          return messageEmailExists = false;
          this.transitionToRoute('client.registerclient.index');
        }
    }
  }
});
