import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade:number = 0

  constructor() { }

  //checked -> content -> view
  incrementar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }
  //ordem
  ngOnInit(): void {
    console.log("OnInit");

  }

  ngDoCheck(): void {
    console.log("do check");

  }


  ngAfterContentChecked(): void {
    console.log("content checked");

  }


  ngAfterContentInit(): void {
    console.log("content init");

  }

  ngAfterViewChecked(): void {
    console.log("view checked");

  }

  ngAfterViewInit(): void {
    console.log("view init");

  }

  ngOnDestroy(): void {
    console.log("On Destroy")
  }
 }
