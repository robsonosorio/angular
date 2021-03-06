import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.userService.getById(id).subscribe(user => {
    this.user = user
    });
  }

  ngSubmit() {
    console.log(this.user);
  }

  updateUser(): void {
    this.userService.putUsers(this.user).subscribe(() => {
    this.userService.showMessage('Usuário atualizado com sucesso.')
    this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
