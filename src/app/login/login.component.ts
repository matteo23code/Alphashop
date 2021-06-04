import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  autenticato = true;
  consentito = false;
  errorMsg = 'Mi dispiace le user id e la password sono errati!';
  msg = 'Benvenuto';
  constructor(private route : Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAut() {

    if (this.BasicAuth.autentica(this.userid, this.password)) {
      this.autenticato = true;
      this.route.navigate(['welcome', this.userid]);
    } else {
      this.autenticato = false;
      //this.consentito = false;
    }

   /*  if (this.userid === 'Matteo' && this.password === '123') {
      this.autenticato = true;

      this.route.navigate(['welcome', this.userid]);


    } else {
      this.autenticato = false;
      //this.consentito = false;
    } */

  }
}
