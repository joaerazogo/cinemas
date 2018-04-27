import Route from '@ember/routing/route';

export default Route.extend({
  model({ email }){
    console.log(email);
    return this.store.query('client', {
      orderBy: 'email',
      equalTo: email,
      limitToFirst: 1,
    }).then((clients) => {
      return clients.get('firstObject');
    });
  }
});
