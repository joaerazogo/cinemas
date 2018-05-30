import Service from '@ember/service';

export default Service.extend({
  currentUser: null,
  authenticate(Email, password) {
    console.log(Email);
    console.log(password);
    this.set('currentUser', Email);
    return true;
  },

});
