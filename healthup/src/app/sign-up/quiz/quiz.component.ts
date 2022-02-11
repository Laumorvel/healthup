import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  nombre:string = "false";

  constructor() { }

  ngOnInit(): void {
  }


}
