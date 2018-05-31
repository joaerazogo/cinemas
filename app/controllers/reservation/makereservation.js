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
    movieReserved: function(idSala, numberChair, nameMovie, schedule){
      var dateMovie = new Date();
      let fecha = this.get('fecha');
      let reservas = this.get('reservas');

      var chair = this.get('model').chair.mapBy('number');
      var cinema  = this.get('model').cinema.mapBy('idSala');
      var idSalaRegistered;
      var numberChairRegistered;


      for (var i = 0; i < chair.length; i++) {
        if (chair[i] === parseInt(numberChair)) {
          numberChairRegistered = false;
          break;
        }else{
          numberChairRegistered = true;
        }
      }
      for (var i = 0; i < cinema.length; i++) {
        if (cinema[i] === parseInt(idSala)) {
          idSalaRegistered = false;
          break;
        }else{
          idSalaRegistered = true;
        }
      }
      if (!((fecha == '' || fecha == undefined ) || (reservas == '' || reservas == undefined) || (idSala == '' || idSala == undefined) || (numberChair == '' || numberChair == undefined) || (nameMovie == '' || nameMovie == undefined))) {
        if (numberChairRegistered && idSalaRegistered) {
          if (parseInt(reservas) > 10 || parseInt(reservas) < 0) {
            this.set('MessageNumberChairReserve', true);
            this.set('fieldReserve', false);
          }else {
            var numTicket = this.get('model').numTicket;
            numTicket++;
            var register = this.store.createRecord('tiquete', {
              numberTicket: numTicket,
              schedule: schedule,
              hour: dateMovie,
              price: 10000,
              state: "activo",
              idSala: idSala,
              numberChairCinema: numberChair,
            });
            this.set('fielDate', false);
            this.set('fieldReserve', false);
            this.set('fieldidSala', false);
            this.set('fieldnumberChair', false);
            this.set('fieldNameMovie', false);
            register.save();
            set(this.get('model'), 'numTicket', numTicket);
            this.set('MessaagenumberChairReserve', false);
            this.set('MessaageCinemaChair', false);
            this.transitionToRoute('reservation.reservationmade');
          }
        }else {
          this.set('MessaageCinemaChair', true);
          this.set('fielDate', false);
          this.set('fieldReserve', false);
          this.set('fieldidSala', false);
          this.set('fieldnumberChair', false);
          this.set('fieldNameMovie', false);
          if (parseInt(reservas) > 10 || parseInt(reservas) < 0) {
            this.set('MessageNumberChairReserve', true);
          }else {
            this.set('MessageNumberChairReserve', false);
          }
        }
      }else {
        if (fecha == '' || fecha == undefined ) {
          console.log('date empty');
          this.set('fielDate', true);
        }else{
          this.set('fielDate', false);
        }
        if (reservas == '' || reservas == undefined ) {
          console.log('reserve empty');
          this.set('fieldReserve', true);
        }else{
          this.set('fieldReserve', false);
        }
        if (idSala == '' || idSala == undefined) {
          console.log('idSala empty');
          this.set('fieldidSala', true);
        }else{
          this.set('fieldidSala', false);
        }
        if (numberChair == '' || numberChair == undefined) {
          console.log('numberChair empty');
          this.set('fieldnumberChair', true);
        }else {
          this.set('fieldnumberChair', false);
        }
        if (nameMovie == '' || nameMovie == undefined) {
          console.log('nameMovie empty');
          this.set('fieldNameMovie', true);
        }else {
          this.set('fieldNameMovie', false);
        }
        this.set('MessaagenumberChairReserve', false);
        this.set('MessaageCinemaChair', false);
        this.transitionToRoute('reservation.makereservation');
      }
    }
  }
});
