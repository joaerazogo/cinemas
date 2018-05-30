import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lastName: DS.attr('string'),
  address: DS.attr('string'),
  telephone: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  rol: DS.attr('number'),
  ticket: DS.hasMany('tiquete'),
});
