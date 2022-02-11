import { Component, Input, OnInit} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up-success',
  templateUrl: './sign-up-success.component.html',
  styleUrls: ['./sign-up-success.component.css']
})
export class SignUpSuccessComponent implements OnInit {

  constructor() { }

  @Input() nombre:string = ''; //Recibe del padre el nombre del usuario

  ngOnInit(): void {
  }


}
