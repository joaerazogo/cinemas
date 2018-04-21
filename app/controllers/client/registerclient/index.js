import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    registerClient: function() {
      var register = this.store.createRecord('client', {
        identification:this.get('identification'),
        name: this.get('name'),
        lastName: this.get('lastName'),
        address: this.get('address'),
        telephone: this.get('telephone'),
        email: this.get('email'),
        password: this.get('password'),
      });
      register.save();
    }
  }
});
