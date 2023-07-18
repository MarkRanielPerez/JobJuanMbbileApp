import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public email: string | undefined;
  public password: string | undefined;
  constructor() {}

  login() {
    // Implement your login logic here
    console.log('Working')
  }
}
