import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from './../../services/header.service';
@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro',
      icon: 'person',
      routeUrl: '/users'
    }
  }

  ngOnInit(): void {
  }

  navigateToUserCreate(): void {
    this.router.navigate(['/users/create'])
    }
}
