// $('form.controls').find('input').map(function(index, el){return parseInt($(el).val())});
// [12, 14, 120]
var ControlsView = Backbone.View.extend({
  model: NoteTableModel,
  el: '<form>' +
        '<label> BPM: ' +
          '<input class="bpm"></input>' +
        '</label>' +
        '<label> Number of Rows: ' +
          '<input class="numRows"></input>' +
        '</label>' +
          '<button class="update" type="button">Update</button>' +
          '<button class="Reset" type="button">Reset</button>' +
      '</form>',
  initialize: function(){
    var callback = function(){
      var bpmStr = this.$el.find('input.bpm').val();
      this.model.set('bpm', parseInt(bpmStr));
    };

    this.$el.find('button.update').on('click', callback.bind(this));
  },
  render: function() {
    return this.$el;
  },
});
//response should be to update row/columns
