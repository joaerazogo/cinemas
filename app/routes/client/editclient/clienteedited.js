import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
  model({ email }){
      console.log(email);
      const clients = this.store.findAll('client');
      var client=this.store.query('client', {
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
