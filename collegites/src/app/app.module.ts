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
import { SellComponent } from './Ecommerce/sell/sell.component'
import { CheckoutComponent } from './Ecommerce/checkout/checkout.component'
import { OrderSuccessComponent } from './Ecommerce/order-success/order-success.component'
import { MyOrdersComponent } from './Ecommerce/my-orders/my-orders.component'
import { AdminOrdersComponent } from './Ecommerce/admin/components/admin-orders/admin-orders.component'
import { EcommerceLoginComponent } from './Ecommerce/ecommerce-login/ecommerce-login.component'
import { EcommerceNavComponent } from './Ecommerce/ecommerce-nav/ecommerce-nav.component'
import { EcommerceAuthService } from './Ecommerce/shared/services/ecommerce-auth.service'
import { EcommerceAuthGuardService } from './Ecommerce/shared/services/ecommerce-auth-guard.service'
import { EcommerceUserServiceService } from './Ecommerce/shared/services/ecommerce-user-service.service'
import { EcommerceAdminAuthGuardService } from './Ecommerce/admin/services/ecommerce-admin-auth-guard.service'
import { AdminProductsComponent } from './Ecommerce/admin/components/admin-products/admin-products.component'
import { ProductFormComponent } from './Ecommerce/admin/components/product-form/product-form.component'
import { ProductCategoryService } from './Ecommerce/shared/services/product-category.service'

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
    SellComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    EcommerceLoginComponent,
    EcommerceNavComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MateririalModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AuthModule,
    SharedModule,
  ],
  providers: [
    AuthService,
    UIservice,
    EcommerceAuthService,
    EcommerceAuthGuardService,
    EcommerceUserServiceService,
    EcommerceAdminAuthGuardService,
  ProductCategoryService],
  bootstrap: [AppComponent],
  entryComponents: [TermsComponent],
})
export class AppModule {}
