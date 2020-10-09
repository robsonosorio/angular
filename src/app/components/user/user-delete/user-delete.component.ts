import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {


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

  deleteUser(): void {
    this.userService.deleteUsers(this.user.id).subscribe(() => {
    this.userService.showMessage('Produto deletado com sucesso.')
    this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
