import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  addItem(item) {
    this.get('favorites').addObject(item);
  },

  removeItem(item) {
    this.get('favorites').removeObject(item);
  }

});
