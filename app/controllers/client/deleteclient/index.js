import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions:{
    onChangeEmail:function(email){
        console.log(email);
        const emails = this.get('model.clients').findBy('email', email);
        alert(emails);
        emails.destroyRecord();
        //this.set('selectedEmail', email);
        //console.log(this.get('selectedEmail'));
      }
  }
});
