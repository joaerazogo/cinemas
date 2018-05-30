import DS from 'ember-data';

export default DS.Model.extend({
  numero: DS.attr('number'),
  categoria: DS.attr('string'),
  ticket: DS.hasMany('tiquete'),
});
