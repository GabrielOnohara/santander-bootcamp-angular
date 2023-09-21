import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

 @Input() nome:string = ''

  constructor() { }

  ngOnInit(): void {
    this.nome = `Ola ${this.nome}`
    console.log(this.nome)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.nome);

  }

}
