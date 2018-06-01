import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
  model(){
    const clients = this.store.findAll('usuario');
    const selectedClient = '';
    const showErrorMessage = true;
    var clientsRegistered = true;
    return hash({
      //clientSelected,
      clients,
      selectedClient,
      showErrorMessage,
      clientsRegistered,
    });
  },
});
