import DS from 'ember-data';

export default DS.Model.extend({
  numeroTiquete: DS.attr('number'),
  horario: DS.attr('string'),
  hora: DS.attr('date'),
  precio: DS.attr('number'),
  estado: DS.attr('string'),
  user: DS.belongsTo('usuario'),
  chair: DS.belongsTo('silla'),
  cinema: DS.belongsTo('sala'),
  movie: DS.belongsTo('pelicula'),
});
