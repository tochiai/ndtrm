var PlayerView = Backbone.View.extend({
  model: NoteTableModel,

  el: '<span class="glyphicon glyphicon-play"></span>',

  events: {
    'click': 'playOrPause'
  },
  playOrPause: function() {
    this.$el.toggleClass('glyphicon-play');
    this.$el.toggleClass('glyphicon-pause');
    if(this.model.get('playing')){
      this.model.pause();
    } else {
      this.model.play();
    }
  },
  render: function(){
    return this.$el;
  }

});
