import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
  model(){
    const clients = this.store.findAll('usuario');
    /*
    var clientSelected=this.store.query('usuario', {
      orderBy: 'rol',
      equalTo: "0",
      limitToLast: 100,
    }).then((client) => {
      return client.get('fisrtObject');
    });
    */
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
