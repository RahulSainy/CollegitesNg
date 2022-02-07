import { NgModule } from '@angular/core'
import { SharedModule } from '../Shared/shared.module'
import { AuthRoutingModlue } from './auth-routing.module'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [SharedModule,
  AuthRoutingModlue],
  exports: [],
})
export class AuthModule {}
