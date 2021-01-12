import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {
  AuthenticationService,
  SignupPayload,
} from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;
    const username = form.value.username;
    const gender = form.value.gender;
    const birthday = form.value.birthday;

    const signupPayload: SignupPayload = {
      firstName,
      lastName,
      email,
      password,
      username,
      gender,
      birthday,
    };

    this.authenticationService.signup(signupPayload);
  }
}
