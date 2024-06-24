document.addEventListener('DOMContentLoaded', function() {
    startCountdown("timer1", 5); // 5 minutes for the first timer
    startCountdown("timer2", 10); // 10 minutes for the second timer
});

function startCountdown(id, initialTimeInMinutes) {
    var timerElement = document.getElementById(id);
    var time = initialTimeInMinutes * 60; // Convert minutes to seconds

    function updateDisplay() {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        timerElement.innerHTML = minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s";
        time--;

        if (time < 0) {
            time = initialTimeInMinutes * 60; // Reset the timer automatically
        }
    }

    updateDisplay(); // Update immediately
    setInterval(updateDisplay, 1000); // Update every second
}

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('waitTimeChart').getContext('2d');
    var waitTimeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Roller Coaster', 'Ferris Wheel', 'Log Flume', 'Haunted House', 'Bumper Cars', 'Sky Drop'],
            datasets: [{
                label: 'Wait Time (minutes)',
                data: [15, 10, 20, 5, 12, 18],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                   'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
