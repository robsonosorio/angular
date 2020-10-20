import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required]]
  })

  constructor( private fb: FormBuilder,
   private authService: AuthService,
   private router: Router,
   private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.authService.login(credentials)
    .subscribe(
    (user) => {
        console.log(user)
        this.snackBar.open(
          'Login efetuado com sucesso! Bem vindo' + user.name + '!'
        )
        this.router.navigateByUrl('/');
      },
      (err) => {
        console.log(err)
        this.snackBar.open(
          'Erro no Login'
        )
      }
    )
  }

  navigateToUserCreate(): void {
    this.router.navigate(['/users/create'])
    }
}
