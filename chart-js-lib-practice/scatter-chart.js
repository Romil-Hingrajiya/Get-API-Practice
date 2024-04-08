const scatter = document.getElementById("scatter");
var myChart = new Chart(scatter, {
  type: "scatter",
  data: {
    labels: ["AI", "Social(all earning platforms)", "Trading", "Gaming", "Business", "Etc(illegal or others)" ],
    datasets: [{
        label: "Some Earning Ideas in Today's Era (on an average percentage), ACOORDING ME",
        data: [ {x:23, y:20}, {x:15, y:5}, {x:3, y:-5}, {x:27, y:25}, {x:20, y:10}, {x:12, y:-10}, ],

        backgroundColor: [
            "rgba(65, 105, 225, 0.3)",
            "rgba(0, 128, 128, 0.3)",
            "rgba(255, 107, 107, 0.3)",
            "rgba(34, 139, 34, 0.3)",
            "rgba(128, 0, 128, 0.3)",
            "rgba(216, 0, 50, 0.3)",
        ],
        hoverBackgroundColor: [
            "rgba(65, 105, 225, 1)",
            "rgba(0, 128, 128, 1)",
            "rgba(255, 107, 107, 1)",
            "rgba(34, 139, 34, 1)",
            "rgba(128, 0, 128, 1)",
            "rgba(216, 0, 50, 1)",
        ],
        borderColor: [
            "rgba(65, 105, 225, 1)",
            "rgba(0, 128, 128, 1)",
            "rgba(255, 107, 107, 1)",
            "rgba(34, 139, 34, 1)",
            "rgba(128, 0, 128, 1)",
            "rgba(216, 0, 50, 1)",
        ],
        fill: true,
        borderWidth: 7,
        hoverBorderWidth: 20,
        clip: false,
    }]
  },
  
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        type: "linear",
        position: "bottom",
      },
    },
  },

});




