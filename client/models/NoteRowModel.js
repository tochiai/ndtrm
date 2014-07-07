// NEEDS A COLLECTION ARGUMENT TO BE INSTANTIATED
var NoteRowModel = Backbone.Model.extend({
  // defaults: {
  //   noteRowCollection: new NoteRowCollection()
  // },
  initialize: function() {
    // this.set('noteRowCollection', new NoteRowCollection([]));
    var firstNote = this.get('rowCollection').first();
    // var lastNote = this.get('noteModelCollection').last();
    this.set('current', firstNote);
  },
  
});
