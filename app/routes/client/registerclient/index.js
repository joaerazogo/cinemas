import Route from '@ember/routing/route';
import {hash} from 'rsvp';
export default Route.extend({
  model(){
    const clients = this.store.findAll('client');
    const messageEmailExists = true;
    return hash({
      clients,
      messageEmailExists,
    });
  },
});
