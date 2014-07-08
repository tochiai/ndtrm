var NoteTableView = Backbone.View.extend({
  model: NoteTableModel,

  tagName: "tbody",
  classname: "note-table",

  initialize: function() {
    this.model.on('play', function(){
      this.model.set('playing', true);
    }, this);
    this.model.on('pause', function(){
      this.model.set('playing', false);
    }, this);
    this.model.on('change:bpm', this.changeTempo, this);
    this.model.on('change:rowLength', this.changeRowLength, this);
    this.start();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    // this.$el.children().detach();
    var $noteTable = this.$el.append(this.model.get('tableCollection').map(function(noteRow){
      return new NoteRowView({model: noteRow}).render();
    }));

    return $noteTable;
  },
  playCol: function() {
    // var col = [];
    // count = this.collection.first().length;
    if(this.model.get('playing')){
      var col = this.model.get('col');
      for(var i = 0; i < col.length; i++){
        col[i].play();
      }
      this.model.updateCol();
    }
  },
  start: function() {
    // the factor of 4 is to allow 16th note precision
    var timeStep = 1/(4 * this.model.get('bpm') / 60 / 1000);
    this.model.set('intervalId', setInterval(this.playCol.bind(this), timeStep));
  },
  changeTempo: function() {
    if(this.model.get('intervalId') !== undefined){
      clearInterval(this.model.get('intervalId'));
    }
    if(this.model.get('playing')){
      this.start();
    }
  },
  changeRowLength: function(){
    var newLength = this.model.get('rowLength');
    var currentLength = this.model.get('tableCollection').at(0).size();
    if(newLength > currentLength){
      console.log('newLength is greater');
    } else {
      console.log('newLength is less');
    }
  }

  // repeated:
    // trigger play for current column
    // load new column
});
