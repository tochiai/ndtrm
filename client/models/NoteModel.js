//MUST INSTANTIATE WITH PITCHES
var NoteModel = Backbone.Model.extend({
  play: function() {
    this.trigger('play');
  }
});
