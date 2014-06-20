// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.play, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  play: function(){
    if (this.length === 1){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  },

  playNext: function(){
    this.shift();
    if (this.length >= 1){
      this.playFirst();
    }
  },

  dequeue: function(song){
    this.remove(song);
    if( this.length === 0 ){
      this.trigger('stop');
    }
  }
});
