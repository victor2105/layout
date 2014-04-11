$('#items-table .item').each(function() {
  var name = $(this).find('img').data('name');
  var description = $(this).find('img').data('description');
  var value = $(this).find('img').data('value');

  $(this).find('div').popover({
    title: '<strong>' + name + '</strong>',
    html: true,
    trigger: 'hover',
    placement: 'bottom',
    content: description + '<br><strong>Value:</strong> <i class="fa fa-bitcoin"></i> ' + value
  });
});