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
        localStorage.setItem('jwt', JSON.stringify(resp.access_token));
        this.getIdUser();//envío también el id del usuario logueado
      },
      error: (err) => {
        Swal.fire('Error', err.error.message, 'error');
      },
    });
  }

  getIdUser() {
    this.authService.loginGetIdUser().subscribe((resp) => {
      localStorage.setItem('userId', JSON.stringify(resp));
      this.router.navigateByUrl(`/userDashboard/${resp}`);
    });
  }
}
