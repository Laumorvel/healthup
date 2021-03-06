import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  @Input()nombre:string ="";
  @Output()sendObjetivos = new EventEmitter<number[]>();
  objetivos:number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  rangeFood:number = 1;
  rangeSport:number = 1;

  /**
   * Consigue y envía por el decorador output los objetivos del usuario que se registra
   */
  enviaObjetivos(){
    this.objetivos.push(this.rangeFood, this.rangeSport);
    this.sendObjetivos.emit(this.objetivos);
  }

}
