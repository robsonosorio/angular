import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Login',
      icon: 'login',
      routeUrl: '/login'
    }
  }

  ngOnInit(): void {
  }

}
