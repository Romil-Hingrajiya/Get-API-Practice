const bar = document.getElementById("bar");
var myChart = new Chart(bar, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "oct", "Nov", "Dec" ],
    datasets: [
      {
        label: "HTML & CSS learning stage of RoMil in %",
        data: [5, 7, 10, 20, 30, 40, 50, 60, 70, 80, 90],

        backgroundColor: [
          "rgba(65, 105, 225, 0.3)",
          "rgba(0, 128, 128, 0.3)",
          "rgba(255, 107, 107, 0.3)",
          "rgba(34, 139, 34, 0.3)",
          "rgba(128, 0, 128, 0.3)",
          "rgba(218, 165, 32, 0.3)",
          "rgba(255, 0, 127, 0.3)",
          "rgba(220, 230, 250, 0.3)",
          "rgba(128, 128, 0, 0.3)",
          "rgba(128, 0, 32, 0.3)",
          "rgba(135, 206, 235, 0.3)",
        ],
        hoverBackgroundColor: [
            "rgba(65, 105, 225, 1)",
            "rgba(0, 128, 128, 1)",
            "rgba(255, 107, 107, 1)",
            "rgba(34, 139, 34, 1)",
            "rgba(128, 0, 128, 1)",
            "rgba(218, 165, 32, 1)",
            "rgba(255, 0, 127, 1)",
            "rgba(39, 49, 89, 1)",
            "rgba(128, 128, 0, 1)",
            "rgba(128, 0, 32, 1)",
            "rgba(135, 206, 235, 1)",
        ],
        borderColor: [
            "rgba(65, 105, 225, 1)",
            "rgba(0, 128, 128, 1)",
            "rgba(255, 107, 107, 1)",
            "rgba(34, 139, 34, 1)",
            "rgba(128, 0, 128, 1)",
            "rgba(218, 165, 32, 1)",
            "rgba(255, 0, 127, 1)",
            "rgba(39, 49, 89, 1)",
            "rgba(128, 128, 0, 1)",
            "rgba(128, 0, 32, 1)",
            "rgba(135, 206, 235, 1)",
        ],
        borderWidth: 4,
        borderRadius: 7,
        hoverBorderRadius: 0,
        // grouped: true,

        // categoryPercentage: 0.8, // for a width
        barPercentage: 1, // for a width of particular bar
        // barThickness: 70, // for a width of bar and accepts string as value

      },
    ],
  },
  options: {
    indexAxis: 'x', // for defining a base like x base(vertical result) or y base(horizontal result)
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        // stacked: true,
        grid: {
          offset: true,
        }
      }
    },
  },
});
