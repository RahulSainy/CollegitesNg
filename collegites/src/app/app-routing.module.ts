import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth/auth.guard'
import { EcommerceHomeComponent } from './Ecommerce/ecommerce-home/ecommerce-home.component'
import { SellComponent } from './Ecommerce/sell/sell.component'
import { HomeComponent } from './home/home.component'
import { SubjectComponent } from './learning/subject/subject.component'
import { TopicComponent } from './learning/topic/topic.component'
import { AboutComponent } from './other-components/about/about.component'
import { BlogComponent } from './other-components/blog/blog.component'
import { ChatComponent } from './other-components/chat/chat.component'
import { ContactComponent } from './other-components/contact/contact.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'shop', component: EcommerceHomeComponent },
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
