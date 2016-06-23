import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model(params, transition) {
    let ajax = this.get('ajax'),
        queryParams = transition.queryParams,
        owner = queryParams.owner;

    if (!owner) {
      this.transitionTo('/');
    }

    return ajax.request(owner.repos_url.replace(ajax.host, ''))
      .then(results => ({ user: owner, repos: results }));
  }
});
