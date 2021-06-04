import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input() Titolo!: string // La notazione Iput viene utlizzata tutte le volte che i valori delle variabili vengono passati da un altro controllo
  @Input() SottoTitolo!: string
  @Input() show: boolean = true

  constructor() { }

  ngOnInit(): void {
    console.log(this.Titolo);
    console.log(this.SottoTitolo);
  }

}
