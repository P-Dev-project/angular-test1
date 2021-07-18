import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  employesSiege(): void {
    this.router.navigate(['employes-siege'], {relativeTo: this.route});
    /*this.authenticationService.login(this.usernametxt, this.passwordtxt)
      .subscribe(result => {

        console.log(result);
        this.router.navigate(['/admin']);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');*/
  }

  correspondantsEtranger(): void {
    this.router.navigate(['correspondants-etranger'], {relativeTo: this.route});
    /*this.authenticationService.login(this.usernametxt, this.passwordtxt)
      .subscribe(result => {

        console.log(result);
        this.router.navigate(['/admin']);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');*/
  }

  gardes(): void {
    this.router.navigate(['gardes'], {relativeTo: this.route});
    /*this.authenticationService.login(this.usernametxt, this.passwordtxt)
      .subscribe(result => {

        console.log(result);
        this.router.navigate(['/admin']);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');*/
  }

  afis(): void {
    this.router.navigate(['afis'], {relativeTo: this.route});
    /*this.authenticationService.login(this.usernametxt, this.passwordtxt)
      .subscribe(result => {

        console.log(result);
        this.router.navigate(['/admin']);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');*/
  }

  moyensTransportAdministratif(): void {
    this.router.navigate(['moyens-transport-administratif'], {relativeTo: this.route});
    /*this.authenticationService.login(this.usernametxt, this.passwordtxt)
      .subscribe(result => {

        console.log(result);
        this.router.navigate(['/admin']);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');*/
  }

  armes(): void {
    this.router.navigate(['armes'], {relativeTo: this.route});
    /*this.authenticationService.login(this.usernametxt, this.passwordtxt)
      .subscribe(result => {

        console.log(result);
        this.router.navigate(['/admin']);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');*/
  }

}
