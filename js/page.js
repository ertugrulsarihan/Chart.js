let ctx = document.getElementById("monthlySales").getContext("2d");
let pieCtx = document.getElementById("deptSales").getContext("2d");
let yeralyTotalLabel = document.getElementById("yearlyTotal");

let monthlySales = Array.of(500, 9000, 3000, 650);
let monthlyLabels = Array.of("March", "April", "May");

let deptSales = Array.of(12, 9, 3);
let deptLabels = Array.of("Gym", "Working", "Studying");

let yearlyTotal = 0;

function addYearlyTotal(x) {
  return (yearlyTotal = x + yearlyTotal);
}

monthlySales.forEach(addYearlyTotal);

let marchNums = Array.of(500, 1000, 9000);
let aprilNums = Array.of(1100, 2000, 9000);
let mayNums = Array.of(400, 1000, 5000);

let total = Array.of(
  addYearlyTotal(...marchNums),
  addYearlyTotal(...aprilNums),
  addYearlyTotal(...mayNums)
);

function resetNumbers() {
  monthlySales.fill(0);
  deptSales.fill(0);
  deptSalesChart.update();
  monthlySalesChart.update();
  yearlyTotal = 0;
  yeralyTotalLabel.innerHTML = 0;
}

yeralyTotalLabel.innerHTML = `$ ${yearlyTotal}`;

//Bar Chart
let monthlySalesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: monthlyLabels,
    datasets: [
      {
        label: "# of Votes",
        data: monthlySales,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//Pie Chart

let deptSalesChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: deptLabels,
    datasets: [
      {
        label: "# of Votes",
        data: deptSales,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
