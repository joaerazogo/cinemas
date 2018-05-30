import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  synosis: DS.attr('string'),
  schedule: DS.attr('string'),
  ticket: DS.hasMany('tiquete'),
});
