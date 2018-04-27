import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions:{
    updateClient:function(email){
        let name = this.get('name');
        let lastName = this.get('last_name');
        let address = this.get('address');
        let telephone = this.get('telephone');
        let Email = this.get('email');
        let password = this.get('password');

        let client = this.get('model.clients').findBy('email', email);

        client.set('name', name);
        client.set('lastName', lastName);
        client.set('address', address);
        client.set('telephone', telephone);
        client.set('email', Email);
        client.set('password', password);
        client.save()
    }
  }
});
