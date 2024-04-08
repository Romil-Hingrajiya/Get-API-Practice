const polarArea = document.getElementById("polarArea");
var myChart = new Chart(polarArea, {
  type: "polarArea",
  data: {
    labels: ["Agriculture", "Production", "Hospitality", "Trade", "Finance", "Education", "Building", "Entertainment"],
    datasets: [
      {
        label: "#IndianSectorsRating out of 1000",
        data: [90, 100, 120, 150, 170, 220, 80, 70],
        backgroundColor: [
            "rgba(34, 139, 34, 0.7)",
            "rgba(65, 105, 225, 0.7)",
            "rgba(0, 128, 128, 0.7)",
            "rgba(255, 107, 107, 0.7)",
            "rgba(128, 0, 128, 0.7)",
            "rgba(255, 245, 224, 0.7)",
            "rgba(128, 0, 32, 0.7)",
            "rgba(135, 206, 235, 0.7)",
        ],
        hoverBackgroundColor: [
            "rgba(34, 139, 34, 1)",
            "rgba(65, 105, 225, 1)",
            "rgba(0, 128, 128, 1)",
            "rgba(255, 107, 107, 1)",
            "rgba(128, 0, 128, 1)",
            "rgba(255, 255, 224, 1)",
            "rgba(128, 0, 32, 1)",
            "rgba(135, 206, 235, 1)",
        ],
        borderColor: [
            "rgba(34, 139, 34, 1)",
            "rgba(65, 105, 225, 1)",
            "rgba(0, 128, 128, 1)",
            "rgba(255, 107, 107, 1)",
            "rgba(128, 0, 128, 1)",
            "rgba(255, 245, 224, 1)",
            "rgba(128, 0, 32, 1)",
            "rgba(135, 206, 235, 1)",
        ],
        borderAlign: 'inner',
        hoverOffset: 15,
        // circular: false, // removes circle shape at master level
      },
    ],
  },
  options: {
    responsive: true,
    animation: {
        animateRotate: true,
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
    /* effect at circle level not at particular level */
    // radius: "120%", 
    // rotation: 180,
    // circumference: 90, // effective design
  },
});