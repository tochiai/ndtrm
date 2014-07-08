var NoteTableModel = Backbone.Model.extend({
  defaults: {
    index: 0,
    col: []
  },
  initialize: function(){
    this.set('rowLength', this.get('tableCollection').size());
    this.updateCol();
  },
  updateCol: function() {
    this.set('index', (this.get('index') + 1) % this.get('rowLength'));
    this.set('col', this.get('tableCollection').map(function(row){
      return row.get('rowCollection').at(this.get('index'));
    }, this));
  }
});
