import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: [ 'search' ],

  actions: {
    onSearch(e) {
      e.preventDefault();
      //target[0] is the first child element -> input
      let value = e.target[0].value;
      this.attrs.search(value);
    }
  }



});
