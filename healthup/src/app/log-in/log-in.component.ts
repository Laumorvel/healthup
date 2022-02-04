import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) { }

  email: string = "bruno@email.com";
  password: string = "bruno";

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.email,this.password)
    .subscribe( resp => {
      console.log(resp);
      localStorage.setItem('jwt',JSON.stringify(resp));
      this.router.navigateByUrl('/userDashboard');
    })
}

}
