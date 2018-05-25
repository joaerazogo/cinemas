import FirebaseAdapter from 'emberfire/adapters/firebase';
import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default FirebaseAdapter.extend({
  firebase: Ember.inject.service()
});
