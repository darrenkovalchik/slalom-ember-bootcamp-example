import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    searchUsers(user) {
      this.transitionTo(`/users/${user}`);
    }
  }
});
