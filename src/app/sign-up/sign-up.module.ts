import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    QuizComponent,
    SignUpComponent
  ]
})
export class SignUpModule { }
