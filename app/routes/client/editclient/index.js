import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
  model(){
    const clients = this.store.findAll('client');
    const selectedEmail = '';
    const showErrorMessage = true;
    var clientsRegistered = true;
    return hash({
      clients,
      selectedEmail,
      showErrorMessage,
      clientsRegistered,
    });
  }
});
