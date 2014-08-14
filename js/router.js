/* NOTE: Resources is basically a group of routes, hence they can be nested.
*  Resources can also be nested in other resources*/

Todos.Router.map(function() {
  /* When url matches '/', it will render todos template */
  this.resource('todos', { path: '/' }, function(){
    /* for url: /#/active */
    this.route('active');
    /* for url: /#/completed */
    this.route('completed');
  });
});

/* Model Hooks. Basically for model querying and returning result sets */

/* Returns all todos */
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

/* Returns the model of a parent or ancestor route in route hiearchy. Important when transitioning. All routes must
 * resolve a model object
 */
Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo){
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo){
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

