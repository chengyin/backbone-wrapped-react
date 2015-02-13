// Models
var User = Backbone.Model.extend();
var Users = Backbone.Collection.extend({model: User});


// Views
var UserView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  template: _.template('<div style="color: #b00">' +
                        '<p><strong>@<%- username %></strong>: <%- bio %></p>' +
                        '</div>'),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var UsersView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(user) {
    var view = new ReactUserViewContainer({model: user});
    this.$el.append(view.render().el);
  },

  addAll: function() {
    this.collection.each(this.addOne, this);
  }
});


// Application
var users = new Users();
var usersView = new UsersView({collection: users});

document.body.appendChild(usersView.el);

users.add([{
  username: 'chengyin',
  bio: 'debugger;'
}, {
  username: 'mike',
  bio: 'Hi, I\'m Mike Tai.'
}, {
  username: 'scott',
  bio: 'I *am* an architect!'
}, {
  username: 'charlotte',
  bio: 'D'
}, {
  username: 'gary',
  bio: 'Do not make me cry!'
}, {
  username: 'matt',
  bio: 'Let\'s win!'
}, {
  username: 'konstantin',
  bio: 'Not terrible.'
}]);
