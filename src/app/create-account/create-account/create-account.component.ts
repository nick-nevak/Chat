import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  loginForm: FormGroup;
  get login() { return this.loginForm.get('login') };
  get password() { return this.loginForm.get('password') };

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void{
    console.log('is valid:', this.loginForm.valid);
    if (this.loginForm.invalid) { return; }
    const user: User = {
      email: this.login.value,
      password: this.password.value
    };
    this.authService.createAccount(user).subscribe();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
       login: ['', Validators.required],
       password: ['', Validators.required],
    });
 }

}

