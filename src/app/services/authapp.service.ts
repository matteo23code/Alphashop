import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (UserId: string, Password: string): boolean => { // con arrow function
    if (UserId === 'Matteo' && Password === '123') {
      sessionStorage.setItem('Utente', UserId);
      return true;

    } else {
      return false;

    }

  }
  /* autentica(UserId: string, Password: string) {  // senza arrow function
    if (UserId === 'Matteo' && Password === '123') {
      sessionStorage.setItem('Utente', UserId);
      return true;

    } else {
      return false;

    }

  } */

  loggedUser = () => {

    let utente = sessionStorage.getItem('Utente');

    return (sessionStorage.getItem('Utente') != null) ? utente : ""; // se il nome utente è prensente nel sessionStorageallora il nostro metodo ci restituira il valore della nostara variabile utente altrimenti una otterremmo stringa vuota

  }

  isLogged = () => (sessionStorage.getItem('Utente') != null) ? true : false; // le arrow function => sono utili quando abbiamo una funzione mono riga


  clearAll= () => sessionStorage.removeItem("Utente"); // clear() elimina tutto e removeItem() elimina lo specifico elemento che vogliamo eliminare

}
