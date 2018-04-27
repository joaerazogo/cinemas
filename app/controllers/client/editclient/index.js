import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions: {
    editClient:function(email){
        console.log(email);
        this.set('selectedEmail', email);
        console.log(this.get('selectedEmail'));
      }
  }
});
