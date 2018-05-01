import EmberObject from '@ember/object';
import ValidationsClientMixin from 'cinemas/mixins/validations/client';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/client');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsClientObject = EmberObject.extend(ValidationsClientMixin);
  let subject = ValidationsClientObject.create();
  assert.ok(subject);
});
