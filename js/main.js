var barChartData = {
    labels : ["League of Legends","Dota","Angry Birds","Flappy Bird","Spirit of Stones","Dark Souls","Monster Hunter"],
    datasets : [
        {
            fillColor : "rgba(151,187,205,0.8)",
            strokeColor : "rgba(151,187,205,1)",
            data : [100,80,70,50,30,10,5]
        }
    ]
}

if (document.getElementById("canvas_least"))
  var myLine = new Chart(document.getElementById("canvas_least").getContext("2d")).Bar(barChartData);
if (document.getElementById("canvas_most"))
  var myLine = new Chart(document.getElementById("canvas_most").getContext("2d")).Bar(barChartData);

$('#items-table .item').each(function() {
  var name = $(this).find('img').data('name');
  var description = $(this).find('img').data('description');
  var value = $(this).find('img').data('value');
  name += ($(this).hasClass('forsale')) ? ' <span class="badge">for sale</span>' : '';

  $(this).find('.item-tip').popover({
    title: '<strong>' + name + '</strong>',
    html: true,
    trigger: 'hover',
    placement: 'bottom',
    content: description + '<br><strong>Value:</strong> <span class="color-yellow"><i class="fa fa-bitcoin"></i> ' + value + '</span>'
  });
});
