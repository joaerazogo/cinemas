import Route from '@ember/routing/route';
//import {hash} from 'rsvp';

export default Route.extend({
  model({ email }){
    console.log(email);
    const clients = this.store.findAll('client');
    const emailClient = email;
    return{
      clients,
      emailClient,
    };
  }
});
