import Route from '@ember/routing/route';

export default Route.extend({
  model(email){
    const emailClient = email['email'];
    console.log(Object.values(email));
    if (!emailClient) {
        this.transitionTo('index');

    } else {
      return emailClient;
    }
  }
});
