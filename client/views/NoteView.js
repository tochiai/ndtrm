// NoteView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var NoteView = Backbone.View.extend({

  tagName: 'td',

  template: _.template('f'),

  events: {
    'click': function() {
      this.model.get('synth').fnPlayNote('C' , 4);
    }
  },
  initialize: function(){
    this.render();
  },

  render: function(){
    return $('body').append(this.$el.html(this.template()));
  }

});
