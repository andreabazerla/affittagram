import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { UserService } from '../../../services/user/user.service';

import { User } from './../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;
  // isLoading = true;

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {}

  message: string;

  ngOnInit(): void {
    this.httpClient.get<any>('api/profile').subscribe(
      (res) => {
        if (res) {
          this.message = res.msg;
        }
      },

      (err) => {
        if (err.status === 401) {
          this.message = 'Not authorized';
        }

        console.log(err);
      }
    );
  }
}
