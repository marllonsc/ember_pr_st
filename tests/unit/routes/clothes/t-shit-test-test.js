import { module, test } from 'qunit';
import { setupTest } from 'ember-pr-st/tests/helpers';

module('Unit | Route | clothes/t-shit-test', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:clothes/t-shit-test');
    assert.ok(route);
  });
});
