import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/shopnavbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([]),

    BrowserAnimationsModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
