// $('form.controls').find('input').map(function(index, el){return parseInt($(el).val())});
// [12, 14, 120]
var ControlsView = Backbone.View.extend({
  model: NoteTableModel,
  el: '<form>' +
        '<label> BPM: ' +
          '<input class="bpm"></input>' +
        '</label>' +
        '<label> Number of Columns: ' +
          '<input class="rowLength"></input>' +
        '</label>' +
          '<button class="update" type="button">Update</button>' +
          '<button class="Reset" type="button">Reset</button>' +
      '</form>',
  initialize: function(){
    var bpmCallback = function(){
      var bpmStr = this.$el.find('input.bpm').val();
      this.model.set('bpm', parseInt(bpmStr));
    };
    var rowLengthCallback = function(){
      var rowLengthStr = this.$el.find('input.rowLength').val();
      this.model.set('rowLength', parseInt(rowLengthStr));
    };
    var paramCallback = function() {
      var bpmStr = this.$el.find('input.bpm').val();
      var rowLengthStr = this.$el.find('input.rowLength').val();
      if(bpmStr !== ''){
        bpmCallback.apply(this);
      }
      if(rowLengthStr !== ''){
        rowLengthCallback.apply(this);
      }
    };
    this.$el.find('button.update').on('click', paramCallback.bind(this));
  },
  render: function() {
    return this.$el;
  },
});
//response should be to update row/columns
