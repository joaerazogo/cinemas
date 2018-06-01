import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
  model(){
    const ticket = this.store.findAll('tiquete');
    return hash({
      ticket,
    });
  }
});
