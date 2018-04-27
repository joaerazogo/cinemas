import Route from '@ember/routing/route';
import {computed, set, get} from '@ember/object';

export default Route.extend({
  model({ email }){
    console.log(email);

    console.log(this.store.findAll('client'));
    var clientEmail = this.store.query('client', {
      orderBy: 'email',
      equalTo: email,
      limitToFirst: 1,
    }).then((clients) => {
        return clients.get('firstObject');
    });
  }
});
