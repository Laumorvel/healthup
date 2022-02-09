import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  userId = localStorage.getItem("userId");
logout(){
  localStorage.clear();
  this.router.navigateByUrl('/');
}
}
