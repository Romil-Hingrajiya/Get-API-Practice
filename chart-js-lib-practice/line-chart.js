const line = document.getElementById("line").getContext("2d");

const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || 'rgba(22, 255, 0, 0.4)';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

var myChart = new Chart(line, {
  type: "line",

  data: {
    labels: ["BJP", "RSS", "CONG", "AAP", "Mayavati", "Yadav Pariwar"],
    datasets: [
      {
        label: "Total Popularity ( Percentage out of 1000 )",
        data: [900, 700, 100, 300, 200, 400],
        // indexAxis: 'y', // for a vertical presentation
        backgroundColor: "rgba(255, 99, 132, 1)",
        hoverBorderColor: "#ff0000",
        pointBackgroundColor: "#ff0000",
        fill: true,
        showLine: false, // if you only need a point
        borderColor: "#7752FE",
        tension: 0.2, // for curve
        borderWidth: 5,
        hoverBorderWidth: 10,
        borderDash: [1],
        borderDashOffset: 0.9,
        stepped: false, // look like a steps
        // drawActiveElementsOnTop: true,
      },
    ],
  },

  plugins: [plugin],

  options: {
    responsive: true,

    layout: {
      padding: 50,
    },

    plugins: {
      customCanvasBackgroundColor: {
        color: "rgba(22, 255, 0, 0.5)",
      },

      legend: {
        display: true,

        labels: {
          color: "#222", // mian header or title
          font: {
            size: 35,
            family: "'Times New Roman', Times, serif",
            weight: "bold",
          },

        },


        // external function
      tooltip: {
        enabled: false,

        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById("chartjs-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.innerHTML = "<table></table>";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // Set caret Position
          tooltipEl.classList.remove("above", "below", "no-transform");
          if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
          } else {
            tooltipEl.classList.add("no-transform");
          }

          function getBody(bodyItem) {
            return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
            const titleLines = tooltipModel.title || [];
            const bodyLines = tooltipModel.body.map(getBody);

            let innerHtml = "<thead>";

            titleLines.forEach(function (title) {
              innerHtml += "<tr><th class='text-4xl bg-orange-500 py-4 font-bold'>" + title + "</th></tr>";
            });
            innerHtml += "</thead><tbody>";

            bodyLines.forEach(function (body, i) {
              const colors = tooltipModel.labelColors[i];
              let style = "background:" + "#fff";
              style += "; border-color:" + "#222";
              style += "; border-width: 3px";
              style += "; padding: 10px";
              style += "; font-weight: bold";
              style += "; text-align: justify";
              style += "; display: flex";
              const span = '<span style="' + style + '">' + body + "</span>";
              innerHtml += "<tr><td>" + span + "</td></tr>";
            });
            innerHtml += "</tbody>";

            let tableRoot = tooltipEl.querySelector("table");
            tableRoot.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

          // Display, position, and set styles for font
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = "absolute";
          tooltipEl.style.left =
            position.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY + "px";
          tooltipEl.style.font = bodyFont.string;
          tooltipEl.style.padding =
            tooltipModel.padding + "px " + tooltipModel.padding + "px";
          tooltipEl.style.pointerEvents = "none";
        },

        // callbacks: {
        //     labelColor: function(context) {
        //         return {
        //             borderColor: 'rgba(22, 255, 0, 1)',
        //             backgroundColor: 'rgba(22, 255, 0, 1)',
        //             borderWidth: 2,
        //             borderDash: 0,
        //             borderRadius: 2,
        //         };
        //     },
        //     labelTextColor: function(context) {
        //         return '#543453';
        //     }
        // }
      },
      },

      subtitle: {
        display: true,
        text: 'Chart Subtitle',
        color: 'blue',
        font: {
          size: 12,
          family: 'tahoma',
          weight: 'normal',
          style: 'italic'
        },
        padding: {
          top: 10
        }
      },

      scales: {
      y: {
        // min: -100,
        // max: 100,
        beginAtZero: true,
        ticks: {
          font: {
            size: 24, 
            weight: 'bold', 
          },
          color: '#FF6C22'
        },
      },

      x: {
        // min: -100,
        // max: 100,
        beginAtZero: true,
        ticks: {
          // fontSize: 14,
          // fontWeight: 'bold',
          font: {
            size: 20, 
            weight: 'bold',
          },
          color: '#FF6C22'
        },
      },

      },

    },
  }
});
