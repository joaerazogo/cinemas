import DS from 'ember-data';

export default DS.Model.extend({
  idSala: DS.attr('number'),
  ticket: DS.hasMany('tiquete'),
});
