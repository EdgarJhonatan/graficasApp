import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#21FF90', '#18D9B4', '#26D8F0', '#2591DB', '#2061FA'],
    },
  ];

  constructor(private graficaService: GraficasService) {}

  ngOnInit(): void {
    /* this.graficaService.getUsuariosRedesSociales().subscribe((data) => {
      console.log(data);
      const labels = Object.keys(data);
      const values = Object.values(data);
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    });*/

    this.graficaService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }
}
