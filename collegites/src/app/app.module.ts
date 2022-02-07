import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFireModule } from '@angular/fire/compat'

import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MateririalModule } from './material.module'
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './navigation/header/header.component'
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component'
import { FooterComponent } from './navigation/footer/footer.component'
import { SubjectComponent } from './learning/subject/subject.component'
import { TopicComponent } from './learning/topic/topic.component'
import { NotesComponent } from './learning/topic/notes/notes.component'
import { TermsComponent } from './auth/terms.component'
import { AuthService } from './auth/auth.service'
import { environment } from 'src/environments/environment'
import { UIservice } from './Shared/ui.service'
import { AuthModule } from './auth/auth.model'
import { SharedModule } from './Shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthModule,
    SharedModule
  ],
  providers: [AuthService, UIservice],
  bootstrap: [AppComponent],
  entryComponents: [TermsComponent],
})
export class AppModule {}
