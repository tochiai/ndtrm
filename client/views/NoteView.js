// NoteView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var NoteView = Backbone.View.extend({

  tagName: 'td',

  template: _.template('f'),

  events: {
    'click': function() {
      this.model.get('synth').fnPlayNote('C' , 4);
    },
    'dblclick': function() {
      this.toggleLock();
    }
  },
  initialize: function(){
    this.model.on('play', this.play, this);
    this.render();
    // Doesn't currently pass in this or something
    // this.$el.on('click', function(e){
    //   if(e.shiftKey) {
    //     console.log(this);
    //   } else if(e.altKey) {
    //       //Alt+Click
    //   }
    // }, this);
  },

  render: function(){
    return $('body').append(this.$el.html(this.template()));
  },

  toggleLock: function(){
    console.log('toggle lock');
  },

  play: function(){
    this.model.get('synth').fnPlayNote('C' , 4);
  }

});
