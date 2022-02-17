import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdminOrdersComponent } from './Ecommerce/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Ecommerce/admin-products/admin-products.component';
import { CartComponent } from './Ecommerce/cart/cart.component';
import { CheckoutComponent } from './Ecommerce/checkout/checkout.component';
import { EcommerceHomeComponent } from './Ecommerce/ecommerce-home/ecommerce-home.component';
import { EcommerceLoginComponent } from './Ecommerce/ecommerce-login/ecommerce-login.component';
import { MyOrdersComponent } from './Ecommerce/my-orders/my-orders.component';
import { OrderSuccessComponent } from './Ecommerce/order-success/order-success.component';
import { SellComponent } from './Ecommerce/sell/sell.component';
import { HomeComponent } from './home/home.component';
import { SubjectComponent } from './learning/subject/subject.component';
import { TopicComponent } from './learning/topic/topic.component';
import { AboutComponent } from './other-components/about/about.component';
import { BlogComponent } from './other-components/blog/blog.component';
import { ChatComponent } from './other-components/chat/chat.component';
import { ContactComponent } from './other-components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'ecommerce', component: EcommerceHomeComponent },
  { path: 'sell', component: SellComponent },

  { path: 'blog', component: BlogComponent },

  {
    path: 'learning/subject',
    component: SubjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'learning/subject/topic',
    component: TopicComponent,
    canActivate: [AuthGuard],
  },
  { path: 'ecommerce-login', component: EcommerceLoginComponent },
  { path: 'ecommerce-cart', component: CartComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },

  { path: 'admin/products', component: AdminProductsComponent },

  { path: 'ecommerce-checkout', component: CheckoutComponent },
  { path: 'ecommerce-myorders', component: MyOrdersComponent },
  { path: 'ecommerce-ordersuccess', component: OrderSuccessComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
