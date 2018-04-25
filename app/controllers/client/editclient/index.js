import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editClient(client) {
      let cliente = this.getProperties('cliente');
      alert(client);
      this.set('selectedClient', client);
      this.get('selectedClient');
    }
  }
});
