import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  username: string = '';
  password: string = '';

  ngOnInit(): void {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (resp) => {
        console.log(resp);
        localStorage.setItem('jwt', JSON.stringify(resp.access_token));
       // console.log(resp.userId);
       // localStorage.setItem('userId', JSON.stringify(resp.userId));
        //this.router.navigateByUrl(`/userDashboard/${resp.userId}`);
        this.getIdUser(this.username);
      },
      error: (err) => {
        console.log(err.message);
        Swal.fire('Error', err.error.message,'error');//No me devuelve los dos tipos de mensajes de la fake api, solo el original
      },
    });
  }

  getIdUser(username: string){
    this.authService.loginGetIdUser(username).subscribe({

    })
    // console.log(resp.userId);
       // localStorage.setItem('userId', JSON.stringify(resp.userId));
        //this.router.navigateByUrl(`/userDashboard/${resp.userId}`);
  }

}
