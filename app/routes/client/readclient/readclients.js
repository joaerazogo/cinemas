import Route from '@ember/routing/route';
import {computed, set, get} from '@ember/object';

export default Route.extend({

  model({ email }){
    console.log(email);
    return this.store.query('usuario', {
      orderBy: 'email',
      equalTo: email,
      limitToFirst: 1,
    }).then((clients) => {
      return clients.get('firstObject');
    });

  }
});
