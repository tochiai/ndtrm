// SongModel.js - Defines a backbone model class for songs.
var NoteModel = Backbone.Model.extend({
  play: function() {
    this.trigger('play');
  }
});
