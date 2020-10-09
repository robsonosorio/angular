import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[]
  displayedColumns = [ 'id', 'name', 'email', 'adm', 'active', 'action' ]

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }
}
