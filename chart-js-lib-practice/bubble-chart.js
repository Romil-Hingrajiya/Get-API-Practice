const bubble = document.getElementById("bubble");
var myChart = new Chart(bubble, {
  type: "bubble",
  data: {
    labels: ["AI", "Social(all earning platforms)", "Trading", "Gaming", "Business", "Etc(illegal or others)" ],
    datasets: [{
        label: "Some Earning Ideas in Today's Era (on an average percentage), ACOORDING ME",
        data: [ {x:23, y:20, r:60}, {x:15, y:5, r:35}, {x:3, y:-5, r:20}, {x:27, y:25, r:40}, {x:20, y:10, r:50}, {x:12, y:-10, r:50}, ],

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
        borderWidth: 3,
        hoverRadius: 10,
        pointStyle: 'cicle', // 'circle','cross','crossRot','dash','line','rect','rectRounded','rectRot','star','triangle'
    }]
  },
  options: {
    responsive: true,
    // clip: true, // work as a overflow hidden
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




