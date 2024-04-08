// pie chart
  const t = 'pie';
  const pie = document.getElementById("pie").getContext("2d");

  var myChart = new Chart(pie, {
  type: t,
  data: {
    labels: ["Agriculture", "Production", "Hospitality", "Trade", "Finance", "Education", "Building", "Entertainment"],
    datasets: [
      {
        label: "#indianSectors",
        data: [9, 10, 12, 15, 17, 22, 8, 7],
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
        // borderDash: [1, 2, 3, 4, 5, 6, 7, 8],
        borderRadius: 10,
        hoverOffset: 35,
        // spacing: 10, 
        // weight: 100,
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
        position: "bottom",
      },
    },
    /* effect at circle level not at particular level */
    // radius: "120%", 
    // rotation: 180,
    // circumference: 90, // effective design
  },
  });




// doughnut chart
// const type = prompt();

const doughnut = document.getElementById("doughnut");
var myChart = new Chart(doughnut, {
  type: 'doughnut',

  data: {
    labels: ["Male", "Female", "Other"],
    
    datasets: [
      {
        label: "#indianOnlineEarningSectors",
        data: [50, 40, 10],

        backgroundColor: [
            "rgba(34, 139, 34, 0.5)",
            "rgba(65, 105, 225, 0.5)",
            "rgba(255, 107, 107, 0.5)",
        ],
        hoverBackgroundColor: [
            "rgba(34, 139, 34, 1)",
            "rgba(65, 105, 225, 1)",
            "rgba(255, 107, 107, 1)",
        ],
        borderColor: [
            "rgba(34, 139, 34, 1)",
            "rgba(65, 105, 225, 1)",
            "rgba(255, 107, 107, 1)",
        ],
        // borderWidth: 5,
        borderAlign: 'inner',
        borderRadius: 10,
        hoverOffset: 15,
        spacing: 2, 
        // weight: 100,
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
        display: true,
        title: {
          display: true,
          text: "Gender",
          color: '#911',
          font: {
            family: 'Comic Sans MS',
            size: 30,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: {top: 20, left: 0, right: 0, bottom: 0}
        },
      },
    },
  }

});


