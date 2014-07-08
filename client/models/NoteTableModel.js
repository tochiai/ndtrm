var NoteTableModel = Backbone.Model.extend({
  defaults: {
    index: 0,
    col: [],
    playing: false
  },
  initialize: function(){
    this.set('rowLength', this.get('tableCollection').at(0).get('rowCollection').size());
    this.set('col', this.get('tableCollection').map(function(row){
      return row.get('rowCollection').at(0);
    }, this));
  },
  updateCol: function() {
    this.set('index', (this.get('index') + 1) % this.get('rowLength'));
    this.set('col', this.get('tableCollection').map(function(row){
      return row.get('rowCollection').at(this.get('index'));
    }, this));
  },
  play: function(){
    this.trigger('play');
  },
  pause: function(){
    console.log('pause fired')
    this.trigger('pause');
  }
});
