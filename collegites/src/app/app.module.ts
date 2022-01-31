import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateririalModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SubjectComponent } from './learning/subject/subject.component';
import { TopicComponent } from './learning/topic/topic.component';
import { NotesComponent } from './learning/topic/notes/notes.component';
import { TermsComponent } from './auth/terms.component';
import { AuthService } from './auth/aut.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent,
    SubjectComponent,
    TopicComponent,
    NotesComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MateririalModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents:[TermsComponent]
})
export class AppModule {}
