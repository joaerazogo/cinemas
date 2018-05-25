import Route from '@ember/routing/route';
import {computed, set, get} from '@ember/object';

export default Route.extend({
  beforeModel() {
    this.transitionTo('login'); // Implicitly aborts the on-going transition.
  },
  model(){
    return this.store.findAll('usuario');
  }
});
