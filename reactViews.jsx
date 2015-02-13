var ReactUserView = React.createBackboneClass({
  render: function() {
    var model = this.props.model;

    return (
      <div onClick={this.destroy} style={{color: '#1ce'}}>
        <p><strong>@{model.get('username')}</strong>: {model.get('bio')}</p>
      </div>
    );
  }
});

var ReactUserViewContainer = Backbone.View.extend({
  render: function() {
    React.renderComponent(<ReactUserView model={this.model} />, this.el);

    return this;
  },

  remove: function() {
    React.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  }
});
