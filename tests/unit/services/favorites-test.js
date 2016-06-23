import { moduleFor, test } from 'ember-qunit';

moduleFor('service:favorites', 'Unit | Service | favorites', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});


test('favorites service', function(assert) {
  let service = this.subject(),
      favorites = service.get('favorites'),
      item = { a: 1 };
  assert.ok(Array.isArray(favorites),  'Has favorites array');
  assert.equal(favorites.length, 0, 'Starts with empty array');
  service.addItem(item);
  assert.equal(favorites.length, 1, 'Can add an item');
  assert.ok(service.contains(item), 'Can determine if an object is already stored');
  assert.notOk(service.contains({ a: 2 }), 'Can determine if an object is not stored');
  assert.equal(favorites[0], item, 'Stores item correctly');
  service.removeItem(item);
  assert.equal(favorites.length, 0, 'Can remove an item');
});
