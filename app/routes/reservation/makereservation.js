import Route from '@ember/routing/route';
import {hash} from 'rsvp';
export default Route.extend({
  model(){
    const movies = this.store.findAll('pelicula');
    const chair = this.store.findAll('silla');
    const cinema = this.store.findAll('sala');
    const schedule = '';
    return hash({
      movies,
      chair,
      cinema,
      schedule
    });
  },
});
