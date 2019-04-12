import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
 
  n1: number;
  n2: number;
  resultado: number;



  
  constructor() { }

  ngOnInit() {
  }

  soma() {
    this.resultado = this.n1 + this.n2;
  }
  limpar() {
    this.resultado = 0;
    this.n1 = 0;
    this.n2 = 0;
  }

}
