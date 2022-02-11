import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';


@NgModule({
  declarations: [
    SignUpComponent,
    QuizComponent,
    SignUpSuccessComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    QuizComponent,
    SignUpComponent,
    SignUpSuccessComponent
  ]
})
export class SignUpModule { }
