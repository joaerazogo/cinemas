import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions: {
      registerClient: function() {
        let email = this.getProperties('email').email;
        let name = this.getProperties('name').name;
        console.log(email);
        console.log(name);
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
        }else{
          alert(this.get('model.messageEmailExists'));
          set(this.get('model.messageEmailExists'), 'messageEmailExists', false);
          this.transitionToRoute('client.registerclient.index');
        }
    }
  }
});
