import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
  model({ email }){
      console.log(email);
      const clients = this.store.findAll('usuario');
      var client=this.store.query('usuario', {
        orderBy: 'email',
        equalTo: email,
        limitToFirst: 1,
      }).then((clients) => {
        return clients.get('firstObject');
      });
      return hash({
        client,
        clients
      });
  },
});
