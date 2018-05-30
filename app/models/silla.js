import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  category: DS.attr('string'),
  idsalacine: DS.attr('number'),
  ticket: DS.hasMany('tiquete'),
});
