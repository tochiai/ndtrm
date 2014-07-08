// NEEDS A COLLECTION ARGUMENT TO BE INSTANTIATED
var NoteRowModel = Backbone.Model.extend({
  defaults: {
    playing: true,
  },
  initialize: function() {
    // this.set('noteRowCollection', new NoteRowCollection([]));
    var firstNote = this.get('rowCollection').first();
    this.set('current', firstNote);
    // var lastNote = this.get('noteModelCollection').last();
    firstNote.set('current', true);
  },
  updateCurrent: function() {
    var currentFound = false;
    this.get('rowCollection').forEach(function(value, key, list){
      if(value === this.get('current') && !currentFound){
        this.set('current', list[(key + 1)  % list.length]);
        currentFound = true;
       }
    }, this);
  },
  
});
