// $.get("/api/sleep/user:")
var ctx = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart
    type: 'line',

    // The data for our dataset
    // data is FILLER
    data: {
        labels: ['Sunday Night', 'Monday Night', 'Tuesday Night', 'Wednesday Night', 'Thursday Night', 'Friday Night', 'Saturday Night'],
        datasets: [{
            label: 'Your sleep',
            backgroundColor: 'rgb(255, 99, 100)',
            borderColor: 'rgb(210, 66, 100)',
            data: [8, 6, 7, 9, 8.5, 6.5, 5.8] // each integer corresponds with the labels, add data as you add labels
        }, {
            label: 'Recommended',
            backgroundColor: 'rgb(0, 150, 255)',
            borderColor: 'rgb(0, 99, 255)',
            data: [8, 8, 8, 8, 8, 8, 8] //  insert var sleepAge or get age from database

        }]

    },
    // Configuration options go here
    options: {
        legend: {
            onHover: function(evt) {
                var item = myLineChart.getElementAtEvent(evt);
                if (item.length) {
                    console.log("onHover", item, evt.type);
                    console.log(">data", item[0]._index, data.datasets[0].data[item[0]._index]);
                }
            },

            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
                gridLines: {
                    color: "#131c2b"
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    fontColor: 'white'
                },
                gridLines: {
                    color: "#131c2b"
                }
            }]
        }
    }
});

// sleepGoal() {
//     var bedTime = getelementById("#test5");
//     var awakeTime = getElementById("#test6");
//     12- bedtime + awaketime + 12

// }

// might be???function to add the data from data.types.date
// function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }

$(document).ready(function() {
    // our initial sleeps array
    const sleeps = [];
    // getting sleeps from database when page loads
    getSleeps();
    // this function resets the sleeps displayed with new sleeps from the database
    function initializeRows() {}
    // This function grabs todos from the database and updates the view
    function getSleeps() {
        $.get('/api/sleeps', function(data) {
            sleeps = data;
            initializeRows();
        });
    }
});