import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsModule } from '../contact-us/contact-us.module';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    console.log(this.router.url);
  }


}
