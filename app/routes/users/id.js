import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    return this.get('ajax').request(`/users/${params.id}`);
  }

});
