import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup', function() {});
  this.route('signin', function() {});
  this.route('readclient');
  this.route('editclient');
  this.route('deleteclient');
  this.route('registerclient');

  this.route('client', function() {
    this.route('registerclient', function() {});
    this.route('deleteclient', function() {});
    this.route('editclient', function() {});
    this.route('readclient', function() {});
  });
});

export default Router;
