import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions:{
    onChangeNameMovie: function(movie) {

        this.set('selectedNameMovie', movie);
        //console.log(this.get('selectedEmail'));
    },
    avalilableSchedule: function(schedule) {
        console.log(schedule);
        set(this.get('model'), 'schedule', schedule);
        //this.set('selectedNameMovie', movie);
        //console.log(this.get('selectedEmail'));
    },
    onChangeCinema: function(cinema) {

        this.set('selectedCinema', cinema);
        //console.log(this.get('selectedEmail'));
    },
    onChangeChair: function(chair) {
        this.set('selectedChair', chair);
        //console.log(this.get('selectedEmail'));
    },
  }
});
