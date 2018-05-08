import Route from '@ember/routing/route';
import {hash} from 'rsvp';
export default Route.extend({
  model(){
    const clients = this.store.findAll('client');
    const messageEmailExists = true;
    const showErrorMessageClientExists = true;
    const fieldEmail= true;
    const fieldName = true;
    const fieldLastname = true;
    const fieldAddress = true;
    const fieldTelephone = true;
    const fieldPassword = true;
    const messageEmailCorrectFormat = true;
    const messageTelephoneCorrectFormat = true;
    return hash({
      clients,
      messageEmailExists,
      showErrorMessageClientExists,
      fieldEmail,
      fieldName,
      fieldLastname,
      fieldAddress,
      fieldTelephone,
      fieldPassword,
      messageEmailCorrectFormat,
      messageTelephoneCorrectFormat,
    });
  },
});
