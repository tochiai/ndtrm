// $('form.controls').find('input').map(function(index, el){return parseInt($(el).val())});
// [12, 14, 120]
var ControlsView = Backbone.View.extend({
  model: ControlsModel,
  tagName: 'form',
  className: 'controls'
});
