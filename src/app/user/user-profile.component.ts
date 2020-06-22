import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(
      this.auth.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues);
      this.router.navigate(['events']);
    }
  }

  validateFirstName() {
    return this.firstName?.valid || this.firstName?.untouched;
  }

  validateLastName() {
    return this.lastName?.valid || this.lastName?.untouched;
  }
}
