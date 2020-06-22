import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Papa',
      userName,
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser({
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName: string;
  }) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
