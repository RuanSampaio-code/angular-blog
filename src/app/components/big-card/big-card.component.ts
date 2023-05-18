import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

 //forma de falar que as propridades criadas são inputavéis
  @Input()

  //criando propriedades para o componente
  //isto tornará o conteudo dinâmico
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string='0'

  constructor() { }

  ngOnInit(): void {
  }

}
