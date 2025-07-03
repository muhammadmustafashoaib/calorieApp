import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent {
 trendsChartType: ChartType = 'line';

  trendsChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Calories',
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.3
      }
    ]
  };

  trendsChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  ngOnInit() {
    this.loadDummyData();
  }

  loadDummyData() {
    // Simulated calorie log for last 7 days
    this.trendsChartData.labels = [
      'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
    ];

    this.trendsChartData.datasets[0].data = [
      1800, 2000, 1900, 2200, 2100, 1950, 2050
    ];
  }
}
