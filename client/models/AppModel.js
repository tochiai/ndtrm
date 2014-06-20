// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    var self = this;
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      self.set('currentSong', song);
    });

    params.library.on('enqueue', function(song){
      self.get('songQueue').add(song);
    });

    this.get('songQueue').on('stop', function(){
      self.set('currentSong', null);
      self.trigger('change:currentSong');
    });
  }

});
