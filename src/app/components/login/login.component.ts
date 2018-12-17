import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  hide = true;
  loading = false;
  loginForm: FormGroup;

  constructor(public router: Router, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLogin() {
    console.log('On login');
    this.authService.login(
      this.loginForm.get('login').value,
      this.loginForm.get('password').value).subscribe(x => {
        this.router.navigate(['/dashboard']);
      }
      );
  }
}
