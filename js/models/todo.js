/*
* Model relationships can also be defined. Ember supports 1-1, 1-many and Many-Many relationships
*/

/* Defines Todo model*/
Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  createdAt: DS.attr('string')
  /* If you want to declare a belongs to relationships:
  user: DS.belongsTo('user')
  */
});

/* If you had a User model and want to declare has many relationship to Todos:
Todos.User = DS.Model.extend({
  todos: DS.hasMany('todo')
});

*/

/* Used as dummy data but since LocalStorage adapter is used to persist data, this is inactive. */
Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Learn Ember.js',
    isCompleted: true
  },
  {
    id: 2,
    title: '...',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Profit!',
    isCompleted:false
  }
];
