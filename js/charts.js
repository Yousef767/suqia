
const salesCtx = document.getElementById("salesChart").getContext("2d");

const salesChart = new Chart(salesCtx, {
  type: "line",
  data: {
    labels: [
      "السبت",
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
    ],
    datasets: [
      {
        label: "المبيعات",
        data: [5, 12, 8, 15, 7, 10, 20],
        borderColor: "#049BB9",
        backgroundColor: "rgba(4, 155, 185, 0.265)",
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 6,
        pointHitRadius: 20,
        pointHoverBackgroundColor: "#049BB9",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      colors: { enabled: true },
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: "#000" }, grid: { color: "#e5e7eb" } },
      y: {
        beginAtZero: true,
        ticks: { color: "#000" },
        grid: { color: "#e5e7eb" },
      },
    },
  },
});

const projectCtx = document.getElementById("projectChart").getContext("2d");
const projectChart = new Chart(projectCtx, {
  type: "pie",
  data: {
    labels: [
      "المشروع الأول",
      "المشروع الثاني",
      "المشروع الثالث",
      "المشروع الرابع",
      "المشروع الخامس",
    ],
    datasets: [
      {
        data: [32, 25.6, 23.6, 9.9, 8.7],
        backgroundColor: [
          "#4F46E5",
          "#10B981",
          "#F87171",
          "#3B82F6",
          "#FBBF24",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: { size: 10 },
          padding: 20,
          color: "#000",
        },
      },
    },
  },
});

function generateLegendLabelsWithColor(chart, textColor) {
  const data = chart.data.datasets[0].data;
  const total = data.reduce((a, b) => a + b, 0);
  return chart.data.labels.map((label, i) => {
    const value = data[i];
    const percentage = ((value / total) * 100).toFixed(1) + "%";
    return {
      text: percentage,
      fillStyle: chart.data.datasets[0].backgroundColor[i],
      strokeStyle: chart.data.datasets[0].backgroundColor[i],
      lineWidth: 0,
      hidden: chart.getDatasetMeta(0).data[i].hidden,
      index: i,
      pointStyle: "circle",
      fontColor: textColor, 
      color: textColor, 
    };
  });
}

const updateChartsTheme = () => {
  const isDark = localStorage.getItem("theme") === "dark";
  const textColor = isDark ? "#fff" : "#000";

  salesChart.options.scales.x.ticks.color = textColor;
  salesChart.options.scales.y.ticks.color = textColor;
  salesChart.options.scales.x.grid.color = isDark
    ? "rgba(255,255,255,0.1)"
    : "#e5e7eb";
  salesChart.options.scales.y.grid.color = isDark
    ? "rgba(255,255,255,0.1)"
    : "#e5e7eb";

  if (salesChart.options.plugins.legend.labels) {
    salesChart.options.plugins.legend.labels.color = textColor;
  }
  salesChart.update();


  if (projectChart.options.plugins.legend.labels) {
    projectChart.options.plugins.legend.labels.color = textColor;
    projectChart.options.plugins.legend.labels.generateLabels = (chart) =>
      generateLegendLabelsWithColor(chart, textColor);
  }
  projectChart.update();
};


setInterval(updateChartsTheme, 100);
