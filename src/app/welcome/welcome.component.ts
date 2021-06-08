import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //messaggio = 'Saluti sono il componente welcome'
  saluti: string = 'Benvenuti nel sito Alphashop!';
  titolo2 = 'Seleziona gli articoli da acquistare';
  utente = '';
  messaggio = '';
  error = '';
  constructor(private route: ActivatedRoute,  private salutiSrv: SalutiDataService) { }

  ngOnInit(){

    this.utente = this.route.snapshot.params['userid'];

    //console.log(this.messaggio);

  }

  getSaluti() {
    console.log(this.salutiSrv.getSaluti());

    this.salutiSrv.getSaluti().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
      );
     //Utilizzando il metodo subscribe gli stiamo dicendo avvia il serivizio invia la richiesta al web service sottoscrivi l utilizzo di questo, e poi ottieni in maniera asincrona il risultato di questa sottoscrizione.
    }
    
    handleResponse(response: any) {
      this.messaggio = response;
      console.log(response);
    }

    handleError(error: any){
      this.messaggio = error.error.message;      
    }
    
}
