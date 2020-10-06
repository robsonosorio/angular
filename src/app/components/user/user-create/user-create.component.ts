import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model'
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: '',
    adm_user: true,
    active: true
  }



  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Cadastro realizado com sucesso.')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
