var NoteTableView = Backbone.View.extend({
  collection: NoteTable,

  tagName: "tbody",
  classname: "note-table",
  
  initialize: function() {
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    // this.$el.children().detach();
    var $noteTable = this.$el.append(this.collection.map(function(noteRow){
      return new NoteRowView({model: noteRow}).render();
    }));

    return $noteTable;
  },
  playRows: function() {
    this.collection.each(function(value, key, list){
      value.play();
    });
  }

});
