import Route from '@ember/routing/route';

export default Route.extend({
  model({ date }){
    console.log(date);
    return this.store.query('tiquete', {
      orderBy: 'date',
      equalTo: date,
      limitToFirst: 1,
    }).then((tickets) => {
      return tickets.get('firstObject');
    });

  }
});
