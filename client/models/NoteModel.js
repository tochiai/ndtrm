//MUST INSTANTIATE WITH PITCHES
var NoteModel = Backbone.Model.extend({
  defaults: {
    audible: false,
  },
  play: function() {
    if(this.get('audible')){
      this.trigger('play');
    }
  }
});
