import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  sipnosis: DS.attr('string'),
  duracion: DS.attr('date'),
  ticket: DS.hasMany('tiquete'),
});
