window.addEventListener('load', fillChart);

function fillChart() {
  let ctx = document.getElementById('assessor__chart').getContext('2d');
  CHART = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        backgroundColor: '#6A5FDE',
      }, {
        label: 'Line Dataset',
        data: [30, 40, 20, 10],
        type: 'line'
      }],
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    options: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          text: ["One", "TWO"],
          fontFamily: 'Roboto',
        }
      }
    }
  });
}