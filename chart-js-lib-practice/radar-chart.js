const radar = document.getElementById("radar");
var myChart = new Chart(radar, {
  type: "radar",
  data: {
    labels: [ 'Job', 'Coding', 'Eating-Drinking', 'Reading', 'Designing', 'Running', 'Sleeping'],
    
    datasets: [
      {
        label: "#myLifeBefore Tech World (myDaily schedule)",
        data: [8, 3, 2, 0, 2, 1, 8],
        
        backgroundColor: 'rgba(255, 105, 105, 0.5)',
        fill: false,
        borderColor: "rgba(255, 105, 105, 1)",
        pointBackgroundColor: '#fff',
        pointBorderWidth: 7,
        
        
    },
    {
        label: "#myLifeAfter Tech World (myDaily schedule)",
        data: [8, 4, 1.5, 1.5, 2, 1, 7],
        
        backgroundColor: "rgba(22, 255, 0, 0.5)",
        fill: true,
        borderColor: "rgba(22, 255, 0, 0.7)",
        pointBackgroundColor: '#222',
        pointBorderWidth: 10,
        pointRadius: 5,
        pointHoverRadius: 10,
        
      },
      {
        label: "#just a random data for interaction",
        data: [0, 5, 1, 5, 2, 5, 3],
        
        backgroundColor: "#222",
        fill: true,
        borderColor: "#222",
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointRadius: 5,
        pointHoverRadius: 10,
        
      },
    ],
  },

  options: {
    responsive: true,
    animation: {
        animateScale: true,
    },
    scales: {
        y: {
            beginAtZero: true,
        },
        x: {
            type: "linear",
        },
    },
  },
});