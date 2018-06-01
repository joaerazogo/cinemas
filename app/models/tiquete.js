import DS from 'ember-data';

export default DS.Model.extend({
  numberTicket: DS.attr('number'),
  schedule: DS.attr('string'),
  date: DS.attr('string'),
  price: DS.attr('number'),
  state: DS.attr('string'),
  idSala: DS.attr('number'),
  nameMovie: DS.attr('string'),
  numberReserve: DS.attr('number'),
  numberChairCinema: DS.attr('number'),
  user: DS.belongsTo('usuario'),
  chair: DS.belongsTo('silla'),
  cinema: DS.belongsTo('sala'),
  movie: DS.belongsTo('pelicula'),
});
