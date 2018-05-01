import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:client', 'Unit | Validator | client', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
