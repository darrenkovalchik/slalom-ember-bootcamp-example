import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    getOrg() {
      let value = Ember.$('input.search-input')[0].value;
      this.get('ajax').request(`/search/users?q=user:${value}`)
        .then(results => {
          this.transitionTo('index.users', value, { queryParams: { owner: results.items[0] }});
        })
        .catch(() => {
          this.transitionTo('index.users', 'not_found', { queryParams: {} });
        });
    }
  }

});
