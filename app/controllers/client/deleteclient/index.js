import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deleteClient(client){
      const promises =  client.get('email').map(email => chapter.destroyRecord());
      promises.pushObjects()
      all(promises).then(() => book.destroyRecord());
    }
  }
});
