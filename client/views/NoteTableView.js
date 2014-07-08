var NoteTableView = Backbone.View.extend({
  model: NoteTableModel,

  tagName: "tbody",
  classname: "note-table",
  
  initialize: function() {
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
    var col = this.model.get('col');
    for(var i = 0; i < col.length; i++){
      col[i].play();
    }
    this.model.updateCol();
  },
  start: function() {
    console.log(this);
    setInterval(this.playCol.bind(this), 125);
  }
  // repeated:
    // trigger play for current column
    // load new column
});
