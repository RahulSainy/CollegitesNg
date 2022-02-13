import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'

import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MateririalModule } from './material.module'
import { HomeComponent } from './home/home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
import { AboutComponent } from './other-components/about/about.component'
import { ContactComponent } from './other-components/contact/contact.component'
import { ChatComponent } from './other-components/chat/chat.component'
import { CartComponent } from './Ecommerce/cart/cart.component'
import { EcommerceHomeComponent } from './Ecommerce/ecommerce-home/ecommerce-home.component'
import { BlogComponent } from './other-components/blog/blog.component'
import { CreatePostComponent } from './other-components/chat/create-post/createpost.component'


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
    AboutComponent,
    ContactComponent,
    ChatComponent,
    CreatePostComponent,
    CartComponent,
    EcommerceHomeComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MateririalModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AuthModule,
    SharedModule,
  ],
  providers: [AuthService, UIservice],
  bootstrap: [AppComponent],
  entryComponents: [TermsComponent],
})
export class AppModule {}
