import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    updateClient:function(){
        let name = this.getProperties('name').name;
        let lastName = this.getProperties('last_name').lastName;
        let address = this.getProperties('address').address;
        let telephone = this.getProperties('telephone').telephone;
        let email = this.getProperties('email').email;
        let password = this.getProperties('password').password

        this.get('store').findRecord('client', 1).then(function(client) {
        // ...after the record has loaded
        client.set('name', name);
        client.set('lastName', lastName);
        client.set('address', address);
        client.set('telephone', telephone);
        client.set('email', email);
        client.set('password', password);
      });
    }
  }
});