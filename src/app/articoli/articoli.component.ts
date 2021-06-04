import { Component, OnInit } from '@angular/core';

export class articoli {

  constructor(
    public codart: string,
    public descrizione: string,
    public um: string,
    public pzcart: number,
    public peso: number,
    public prezzo: number,
    public isactive: boolean,
    public data: Date
  ) {

  }
}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli = [
    new articoli('014600301', 'BARILLA FARINA 1 KG', 'PZ', 24, 1, 1.09, true, new Date()),
    new articoli('013500121', 'BARILLA PASTA GR.500 N.70 1/2 PENNE', 'PZ', 24, 1, 1.09, true, new Date()),
    new articoli("007686402", "FINDUS FIOR DI NASELLO 300 GR", "PZ", 8, 0.3, 6.46, true, new Date()),
    new articoli("057549001", "FINDUS CROCCOLE 400 GR", "PZ", 12, 0.4, 5.97,true, new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
