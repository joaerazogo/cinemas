import Route from '@ember/routing/route';
import {computed, set, get} from '@ember/object';

export default Route.extend({
  model(){
    return this.store.findAll('usuario');
  }
});
