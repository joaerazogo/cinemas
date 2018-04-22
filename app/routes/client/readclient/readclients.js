import Route from '@ember/routing/route';

export default Route.extend({
  model({email}){
    const clients = this.modelFor('client');
    const client = clients.findBy('email', email);
    if (!client) {
        this.transitionTo('index');

    } else {
      return client;
    }
  }
});
