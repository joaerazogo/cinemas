import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('readclient', function() {});
  this.route('editclient');
  this.route('deleteclient');
  this.route('registerclient');

  this.route('client', function() {
    this.route('registerclient', function() {
      this.route('clientregistered');
    });
    this.route('deleteclient', function() {
      this.route('clientdeleted');
    });
    this.route('editclient', function() {
      this.route('clienteedited', {path: '/:email'});
      this.route('messageclient');
    });
    this.route('readclient', function() {
      this.route('readclients', {path: '/:email'});
    });
  });
  this.route('login');
});

export default Router;
