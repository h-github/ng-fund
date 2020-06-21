import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  providers: [],
})
export class UserModule {}