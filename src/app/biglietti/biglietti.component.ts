import { Component } from '@angular/core';

@Component({
  selector: 'app-biglietti',
  templateUrl: './biglietti.component.html',
  styleUrls: ['./biglietti.component.css']
})
export class BigliettiComponent {
  biglietti: string[] = [];
  lista: string[] = [];
  salva: string="";
  showList: boolean = false;

  constructor() {
    this.generaBiglietti();
  }

  /*genera i biglietti da 1 a 100 e li inserisce nella coda lista*/
  generaBiglietti() {
    for (let i = 1; i <= 100; i++) {
      this.salva = i.toString(); 
      this.lista.push(this.salva.padStart(3, '0'));
    }
    this.prossimoBiglietto();
  }

  /*Se ci sono biglietti nella coda, ne estrae il primo utilizzando il metodo shift() che rimuove e restituisce il primo elemento dell'array. 
    Quindi questo biglietto estratto viene aggiunto all'array biglietti, che rappresenta i biglietti visualizzati nel tabellone.*/
  prossimoBiglietto() {
    if (this.lista.length > 0) {                       
      const prosBiglietto = this.lista.shift();
      if (prosBiglietto) {
        this.biglietti.push(prosBiglietto);
      }
    }
  }

  leggiInt(nome:string){
    return parseInt(nome);
  }

  azzeraBiglietti() {
    this.biglietti = [];
    this.lista = [];
    this.generaBiglietti();
  }
}

