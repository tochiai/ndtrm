// NoteView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var NoteView = Backbone.View.extend({

  tagName: 'td',
  classname: 'audible',

  template: _.template('<%= pitch %>'),

  events: {
    'click': function() {
      this.toggleAudible();
    },
    'dblclick': function() {
      this.toggleLock();
    }
  },
  initialize: function(){
    this.model.on('play', this.play, this);
    this.model.on('change:audible', function(){
      this.$el.toggleClass('audible');
      this.render();
    }, this);
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
    return this.$el.html(this.template(this.model.attributes));
  },

  toggleLock: function(){
    console.log('toggle lock');
  },
  toggleAudible: function() {
    this.model.set('audible', !this.model.get('audible'));
  },
  play: function(){
    this.model.get('synth').fnPlayNote(this.model.get('pitch') , this.model.get('octave'));
  }

});
