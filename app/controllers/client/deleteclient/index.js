import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deleteClient(client){
        store.findRecord('client', 1, { backgroundReload: false }).then(function(client) {
        post.deleteRecord();
        post.get('isDeleted'); // => true
        post.save(); // => DELETE to /posts/1
      });
    }
  }
});
