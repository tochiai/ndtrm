// NoteRowView.js - Defines a backbone view class for the music library.
var NoteRowView = Backbone.View.extend({
  model: NoteRowModel,

  tagName: "tr",

  initialize: function() {
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    // this.$el.children().detach();
    var $noteRow = this.$el.append(this.model.get('rowCollection').map(function(note){
      return new NoteView({model: note}).render();
    }));

    return $noteRow;
  },
  checkAndPlay: function() {
    if(this.model.get('playing')){
      var currentNote = this.model.get('current');
      currentNote.play();
      this.model.updateCurrent();
    }
  },
  playNotes: function(){
    setInterval(this.checkAndPlay.bind(this), 500);
  }

});
