/*
* Ember-Data is a library that allows you to retreive records from server. There are multiple adapters available
* such as RESTadapter which interacts with JSON API and LSAdapter which persists data locally. This file handles
*adapters
*/
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todo-emberjs'
});
