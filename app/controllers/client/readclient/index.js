import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    readClient(client) {
      let cliente = this.getProperties('cliente');
      this.set('selectedClient', client);
      this.get('selectedClient');
      
    }
  }
});
