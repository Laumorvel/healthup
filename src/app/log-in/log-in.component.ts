import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {

  username: string = '';
  password: string = '';
  marcadoRemember: boolean = false;

  //CONSTRUCTOR
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.marcadoRemember = JSON.parse(<string>localStorage.getItem('marcadoRemember')) == 'true' ? true : false;
    if(this.marcadoRemember){
      this.username = JSON.parse(<string>localStorage.getItem('username'));
    }
  }

  //JSON.parse(<string>localStorage.getItem('marcadoRemember'));

  ngOnInit(): void {}

  guardarUser(){
    if(!this.marcadoRemember){
      localStorage.setItem('username', JSON.stringify(this.username));
      localStorage.setItem('marcadoRemember', JSON.stringify('true'));
      this.marcadoRemember = true;
    }else{
      localStorage.removeItem('username');
      localStorage.setItem('marcadoRemember', JSON.stringify('false'));
      this.marcadoRemember = false;
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (resp) => {
        localStorage.setItem('jwt', JSON.stringify(resp.access_token));
        this.getUser();//envío también el id del usuario logueado
      },
      error: (err) => {
        Swal.fire('Error', err.error.message, 'error');
      },
    });
  }

  getUser() {
    this.authService.loginGetUser().subscribe(
      (resp) => {
      localStorage.setItem('user', JSON.stringify(resp));
      this.router.navigateByUrl(`/userDashboard/${resp.id}`);
      localStorage.setItem('userId', JSON.stringify(resp.id));
    });
  }
}
