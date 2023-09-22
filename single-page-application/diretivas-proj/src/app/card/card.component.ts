import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos:string[] = []
  userType:string = ''
  constructor() {
    this.produtos = ["mouse", "teclado", "calculadora"]
    this.userType = 'admin'
  }

  ngOnInit(): void {
  }

}
