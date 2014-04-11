var barChartData = {
    labels : ["League of Legends","Dota","Angry Birds","Flapy Bird","Spirit Stones","Dark Sols","Monster Hunter"],
    datasets : [
        {
            fillColor : "rgba(151,187,205,0.8)",
            strokeColor : "rgba(151,187,205,1)",
            data : [100,80,70,50,30,10,5]
        }
    ]
}

var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);
