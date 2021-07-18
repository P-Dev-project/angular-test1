import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

  constructor(private router: Router, private loginService: LoginService) {
  }

  login(): void {
    this.router.navigate(['/home']);
    /*this.authenticationService.login(this.usernametxt, this.passwordtxt)
      .subscribe(result => {

        console.log(result);
        this.router.navigate(['/admin']);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');*/
  }

}
