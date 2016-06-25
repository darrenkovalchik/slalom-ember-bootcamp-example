import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model(params, transition) {
    let ajax = this.get('ajax'),
        user = params.user,
        userObj;

    if (!user) {
      this.transitionTo('/');
    }

    return ajax.request(`/users/${user}`)
      .then(result => {
        userObj = result;
        return ajax.request(`${result.repos_url}`);
      })
      .then(repos => ({ user: userObj, repos: repos }));
  }
});
